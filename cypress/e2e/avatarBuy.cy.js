describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.me/');                          // переходим на сайт https://pokemonbattle.me/
         cy.get('input[type="email"]').type('USER_LOGIN');               // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');         // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
         cy.get('.credit').type('0000000000000000');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn')
            .trigger('mouseover')                                        // ховер на кнопку
            .click()                                                     // клик на кнопку
            .wait(5000)                                                  // ждем 5 секунды
            .click();                                                    // нажимаем кнопку Оплатить
         cy.get('#cardnumber')
            .wait(5000)                                                  // ждем 5 секунды
            .type('56456');                                              // вводим код подтверждения СМС
         cy.get('.payment__submit-button')
            .trigger('mouseover')                                        // ховер на кнопку
            .click()                                                     // нажимаем кнопку Отправить
            .wait(5000);                                                 // ждем 5 секунды
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
 