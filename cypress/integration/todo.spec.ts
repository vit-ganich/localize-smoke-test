import todoPage from '../support/pages/todo.page';

// Example of remastered todo.spec from Cypress examples using Page Object pattern.

describe('example to-do app', () => {
  beforeEach(() => {
    todoPage.visit();
  });

  it('shows environment variables', () => {
    // Examle of accessing the GitHub Actions secrets from Cypress.env
    cy.wrap(Cypress.env('TEST')).should('equal', 'test');
  });

  it('displays two todo items by default', () => {
    todoPage.todoList.get().should('have.length', 2);

    todoPage.todoList.get().first().should('have.text', 'Pay electric bill');

    todoPage.todoList.get().last().should('have.text', 'Walk the dog');
  });

  it('can add new todo items', () => {
    const newItem = 'Feed the cat';

    todoPage.newTodo.get().type(`${newItem}{enter}`);

    todoPage.todoList
      .get()
      .should('have.length', 3)
      .last()
      .should('have.text', newItem);
  });

  it('can check off an item as completed', () => {
    todoPage.getCheckedTask().check();

    todoPage.electricBillTask
      .get()
      .parents('li')
      .should('have.class', 'completed');
  });

  context('with a checked task', () => {
    beforeEach(() => {
      todoPage.getCheckedTask().check();
    });

    it('can filter for uncompleted tasks', () => {
      todoPage.activeButton.get().click();

      todoPage.todoList
        .get()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog');

      todoPage.electricBillTask.get().should('not.exist');
    });

    it('can filter for completed tasks', () => {
      todoPage.completedTask.get().click();

      todoPage.todoList
        .get()
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill');

      todoPage.walkDogTask.get().should('not.exist');
    });

    it('can delete all completed tasks', () => {
      todoPage.clearCompletedButton.get().click();

      todoPage.todoList
        .get()
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill');

      todoPage.clearCompletedButton.get().should('not.exist');
    });
  });
});
