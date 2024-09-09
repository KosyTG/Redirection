describe('Testing redirection', ()=>{
    it('Using cross origin command', ()=>{
        cy.fixture('selectors').then((data)=>{
            cy.get(data.elementSelenium).invoke('removeAttr','target').should('exist').click()
            cy.origin('https://elementalselenium.com/', { args: {data}}, ({data})=>{
                cy.get(data.emailTextfield).should('exist').type('kositg22@gmail.com')
                cy.get(data.pickLanguage).select('javascript')
            })
            
        })

  })

})
