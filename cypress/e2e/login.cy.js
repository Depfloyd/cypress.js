describe('Автотесты на форму логина', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');                                                    // посетили сайт
        cy.get('#loginButton').should('be.disabled');                                            // кнопка "войти" не активна
        cy.get('#mail').type('german@dolnikov.ru');                                              // ввели логин
        cy.get('#pass').type('iLoveqastudio1');                                                  // ввели пароль
        cy.get('#loginButton').click();                                                          // нажали войти
        cy.get('#messageHeader')
            .should('be.visible')                                                                // проверка что текст виден
            .contains('Авторизация прошла успешно');                                             // текст соответствует документации
        cy.get('#exitMessageButton')
            .should('be.enabled')                                                                // крестик активен
            .click();                                                                            // крестик работает
         })

         it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');                                                // посетили сайт
            cy.get('#loginButton').should('be.disabled');                                        // кнопка "войти" не активна
            cy.get('#mail').type('german@dolnikov.ru');                                          // ввели логин
            cy.get('#pass').type('iLoveqastudio54');                                             // ввели пароль
            cy.get('#loginButton').click();                                                      // нажали войти
            cy.get('#messageHeader')
               .should('be.visible')                                                             // проверка что текст виден
               .contains('Такого логина или пароля нет');                                        // текст соответствует документации
            cy.get('#exitMessageButton')
               .should('be.enabled')                                                             // крестик активен
               .click();                                                                         // крестик работает
             })

             it('Верный логин и неневерный пароль', function () {
                cy.visit('https://login.qa.studio/');                                            // посетили сайт
                cy.get('#loginButton').should('be.disabled');                                    // кнопка "войти" не активна
                cy.get('#mail').type('german@nedolnikov.ru');                                    // ввели логин
                cy.get('#pass').type('iLoveqastudio1');                                          // ввели пароль
                cy.get('#loginButton').click();                                                  // нажали войти
                cy.get('#messageHeader')
                   .should('be.visible')                                                         // проверка что текст виден
                   .contains('Такого логина или пароля нет');                                    // текст соответствует документации
                cy.get('#exitMessageButton')
                   .should('be.enabled')                                                         // крестик активен
                   .click();                                                                     // крестик работает
                 })

                 it('Невалидный логин и верный пароль', function () {
                    cy.visit('https://login.qa.studio/');                                        // посетили сайт
                    cy.get('#loginButton').should('be.disabled');                                // кнопка "войти" не активна
                    cy.get('#mail').type('germannedolnikov.ru');                                 // ввели логин
                    cy.get('#pass').type('iLoveqastudio1');                                      // ввели пароль
                    cy.get('#loginButton').click();                                              // нажали войти
                    cy.get('#messageHeader')
                       .should('be.visible')                                                     // проверка что текст виден
                       .contains('Нужно исправить проблему валидации');                          // текст соответствует документации
                    cy.get('#exitMessageButton')
                       .should('be.enabled')                                                     // крестик активен
                       .click();                                                                 // крестик работает
                     })

                     it('Строчные буквы в логине и верный пароль', function () {
                        cy.visit('https://login.qa.studio/');                                    // посетили сайт
                        cy.get('#loginButton').should('be.disabled');                            // кнопка "войти" не активна
                        cy.get('#mail').type('GerMan@Dolnikov.ru');                              // ввели логин
                        cy.get('#pass').type('iLoveqastudio1');                                  // ввели пароль
                        cy.get('#loginButton').click();                                          // нажали войти
                        cy.get('#messageHeader')
                           .should('be.visible')                                                 // проверка что текст виден
                           .contains('Авторизация прошла успешно');                              // текст соответствует документации
                        cy.get('#exitMessageButton')
                           .should('be.enabled')                                                 // крестик активен
                           .click();                                                             // крестик работает!
                         })

                         it('Проверка восстановления пароля', function () {
                            cy.visit('https://login.qa.studio/');                                // посетили сайт
                            cy.get('#loginButton').should('be.disabled');                        // кнопка "войти" не активна
                            cy.get('#forgotEmailButton').click();                                // нажали "забыли пароль?"       
                            cy.get('#forgotForm').should('be.visible');                          // окно восстановления пароля доступно
                            cy.get('#mailForgot').type('german@dolnikov.ru');                    // ввели логин
                            cy.get('#restoreEmailButton').click();                               // нажали "отправить код"
                            cy.get('#message').should('be.visible');                             // проверка что текст виден
                            cy.get('#messageHeader')
                               .contains('Успешно отправили пароль на e-mail');                  // текст соответствует документации
                             })

})