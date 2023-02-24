import { LoginPageComponent } from './login-page.component';
describe('LoginComponent', () => {
  beforeEach(() => {
    cy.mount(LoginPageComponent);
  });
  it('check if form is valid', () => {
    const testEmail = 'test@email.com';
    cy.get('.email-input').type(testEmail);
    const testPassword = '12345dafad';
    cy.get('.password-input').type(testPassword);
    cy.get('form')
      .then(($el) => $el[0].checkValidity())
      .should('be.true');
  });
  it('check if email is invalid', () => {
    const testPassword = '12345dafad';
    cy.get('.password-input').type(testPassword);
    const testEmail = 'abcder';
    cy.get('.email-input').type(testEmail);
    cy.get('form')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });
});
