describe('Home Page',()=>{

    it('Radio Button Test',()=>{


        cy.visit("http://127.0.0.1:5500/index.html")

        cy.get(':nth-child(2) > input').should('be.visible')
        cy.get(':nth-child(4) > input').should('be.visible')

        cy.get(':nth-child(2) > input').check().should('be.checked')
        cy.get(':nth-child(4) > input').should('not.be.checked')
        
        cy.get(':nth-child(4) > input').check().should('be.checked')
        cy.get(':nth-child(2) > input').should('not.be.checked')
        

    });
})