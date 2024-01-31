describe('explicit suite',()=>{
    it('heading test',()=>{
        let heading_name = "Testing"
        cy.visit("http://127.0.0.1:5500/index.html") 
        cy.get('#heading').then((ele)=>{
            let web_heading = ele.text();
            // expect(heading_name).to.equal(web_heading)
            assert.equal(heading_name, web_heading)
        })



    })
})