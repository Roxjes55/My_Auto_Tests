describe('Авторизация', function () {

    it('Авторизация с валидными данными', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton').should ('be.visible');

     })

     it('Восстановление почты', function(){
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('pustovitovskiy.d@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Авторизация с невалидным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('wrongpasswrod123');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton').should ('be.visible');

     })
     it('Авторизация с невалидным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('denis@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton').should ('be.visible');

     })

     it('Авторизация без @ в почте', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton').should ('be.visible');
     })
     

     
 }) 