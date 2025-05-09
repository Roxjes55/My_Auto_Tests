describe('e2e pokemons', function () {

    it('e2e покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get('#k_email').type('pustovitovskiy.d@gmail.com');
         cy.get('#k_password').type('1qasw23edFR$%^');
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').click();
         cy.get('.k_mobile > :nth-child(5)').click();
         cy.get('.shop__item.available').first().within(() => {
      cy.get('.shop__button').first().click();});
      cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4091707088551082');
      cy.get(':nth-child(1) > .style_1_base_input').type('0528');
      cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
      cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('DENIS PUSTOVITOVSKIY');
      cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
      cy.get('.style_1_base_input').type('56456');
      cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
      cy.get('.payment_status_top').contains('Покупка прошла успешно');
      cy.get('.style_1_base_link_blue').should('be.visible');



     })
 }) 