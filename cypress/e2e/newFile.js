describe('Teste do site https://test.muu.agr.br/ ', () => {
    it('Realiza o rastreamento e preenchimento do formulario', () => {
        // Acessar o site
        cy.visit(https, //test.muu.agr.br/)


            //Clicar no botão "Comece a rastrear agora"
            cy.contains('Comece a rastrear agora').click());

    });

});
