// describe('resistration test', () => {
  
//   it('passes 1', () => {
//     cy.visit('https://example.cypress.io')
//   })


// })

//website=> elements 
// class 
// id
// tag 
// selectors


describe("registration test", function(){

  // it("usrname test", function(){
  //     cy.visit("http://127.0.0.1:5500/index.html")
  //     // cy.get("button").click()
  //     cy.get('[name="username"]').type("preeti")
  //     cy.get('.inp_2').type("123456789")
  //     cy.get('#sub_btn').click()
  // })

  //implicit assertions
  //1: should 
  //2: and 

  it("test- implicit assertion",()=>{
    // cy.visit("http://127.0.0.1:5500/index.html")
    // cy.url().should('not.eq','http://127.0.0.1:5500/index.html/shoes')
    // cy.url().should('contain',"index")
    // cy.url().should('include',"index.html")
    
    // cy.visit("http://127.0.0.1:5500/index.html")
    // cy.url().should('not.eq','http://127.0.0.1:5500/index.html/shoes')
    // .should('contain',"index")
    // .should('include',"index.html")

    cy.visit("https://www.amazon.in/")
    cy.url().should('not.eq','http://127.0.0.1:5500/index.html/shoes')
    .and('not.contain',"index")
    .and('not.include',"index.html2")

    cy.get('[href="/deals?ref_=nav_cs_gb"]').should("be.visible").and('eq',"abc")
    // cy.get("#heading").should("be.visible").and('not.have.length','18')
  // check if company name "company" if correct on website
  })

})

// describe('template spec 2', () => {
  
//   it('passes', () => {
//     cy.visit('http://127.0.0.1:5500/index.html')
//   })

  
  
// })



// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })

//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })

//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
// describe => test-suite//login PAge 
//it => test// password inputbox => 8char @
//it => //username => length =>4 color=>blue
