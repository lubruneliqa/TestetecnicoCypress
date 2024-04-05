describe('Teste do site https://test.muu.agr.br/', () => {

   it('Realiza o rastreamento e preenchimento do formulário', () => {
    //Acessar o site
    cy.visit('https://test.muu.agr.br/')

    //Clicar no botão "Comece a rastrear agora"
    cy.get('[data-testid="buy-traceability"]').click()

    //Validar se foi para a tela de planos
    cy.get('.logo-mobile-rastreabilidade').should('exist')

    //Clicar no botão "Assine Já"
    cy.get(':nth-child(1) > .card-content > .card-button').click()

    // Preencher o campo Nome Completo
    cy.get('#\\:r0\\:').type('Lucilene Bruneli')

    //Preencher o campo CPF
    cy.get('#\\:r1\\:').type('18383615027')

    //Preencher o campo E-mail
    cy.get('#\\:r2\\:').type('lucilene@teste.com')

    //Preencher o campo Confirmação de e-mail
    cy.get('#\\:r3\\:').type('lucilene@teste.com')

    //Preencher o campo Telefone
    cy.get('#\\:r4\\:').type('12 99999999999')

    //Preencher o campo Data de nascimento
    cy.get('#\\:r5\\:').type('2024-04-05')

    //Complete o registro - Preencher o campo CEP
    cy.get('#\\:r6\\:').type('12305021')

    //Preencher o campo Número
    cy.get('#\\:r8\\:').type('50')

    //Preencher o campo Complemento
    cy.get('#\\:ra\\:').type('casa')


    //Checkout
    //Check no Termo de Uso
    cy.get(':nth-child(1) > .customCheckbox').click()

    //Check na Política de Privacidade
    cy.get(':nth-child(3) > .customCheckbox').click()


    //Conforme orientação não criei cenário para clicar em Checkout.


   });

});