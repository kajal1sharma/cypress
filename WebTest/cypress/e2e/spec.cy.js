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

  it("usrname test", function(){
      cy.visit("http://127.0.0.1:5500/index.html")
      // cy.get("button").click()
      cy.get('[name="username"]').type("preeti")
      cy.get('.inp_2').type("123456789")
      cy.get('#sub_btn').click()
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
