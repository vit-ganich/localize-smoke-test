import WebElement from '../web.elements/webElement';
import BasePage from './base.page';

/**
 * Page object for Todo page
 */
class TodoPage extends BasePage {
  url = '/todo';

  //#region Web elements
  todoList = new WebElement('.todo-list li');
  newTodo = new WebElement('[data-test=new-todo]');

  //#region Tasks
  electricBillTask = new WebElement('Pay electric bill', { contains: true });
  walkDogTask = new WebElement('Walk the dog', { contains: true });
  completedTask = new WebElement('Completed', { contains: true });
  //#endregion

  //#region Buttons
  activeButton = new WebElement('Active', { contains: true });
  clearCompletedButton = new WebElement('Clear completed', { contains: true });
  //#endregion

  //#endregion

  getCheckedTask() {
    return this.electricBillTask.get().parent().find('input[type=checkbox]');
  }
}

export default new TodoPage();
