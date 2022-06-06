# Localize smoke test

Test repo for E2E test automation with Cypress and Typescript  

### Issues
There are several issues with running the app in Cypress against Chrome and Electron browsers.
See the screenshots in `/images/issues`

### How to run tests locally
- run `npm install`
- run `npm run test` or `npx cypress open`

### Reporting
Reporter: [mochawesome](https://www.npmjs.com/package/mochawesome)  
Report file: `/reports/mochawesome.html`

### GitHub Actions
[E2E tests workflow](https://github.com/vit-ganich/localize-smoke-test/actions/workflows/ci.yml)
