describe('Testing redirection', ()=>{
    it('Using cross origin command', ()=>{

        cy.visit('/')
        cy.get("a[href='http://elementalselenium.com/']").invoke('removeAttr','target').should('exist').click()
        cy.origin('https://elementalselenium.com/', ()=>{
                    cy.get("#email").should('exist').type('kositg22@gmail.com')
                })

    })
    
})