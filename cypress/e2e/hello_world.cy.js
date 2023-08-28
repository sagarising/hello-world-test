describe('/', () => {
    it('response with hello world', () => {
        cy.visit('http://localhost:5000/');
        cy.get('body').should('have.text', 'Hello World!')
  })
})

describe('/user', () => {
    it('greet user with hello ', () => {
        cy.visit('http://localhost:5000/user/gurukumar');
        cy.get('body').should('have.text', 'Hello gurukumar!')
  })
  it('the greets with appropriate Proper name format', () => {
          cy.visit('http://localhost:5000/user/Gurukumar');
          cy.get('body').should('have.text', 'Hello Gurukumar!')
    })
  it('Proper name format is used for user if request has user name smallcase ', () => {
            cy.visit('http://localhost:5000/user/gurukumar');
            cy.get('body').should('have.text', 'Hello Gurukumar!')
      })
})

describe('/org', () => {
    it('greet hello world from cloudtrain ', () => {
        cy.visit('http://localhost:5000/org/cloudtrain');
        cy.get('body').should('have.text', 'Hello World with love from cloudtrain!')
  })
  it('greet hello world from Asmigar', () => {
          cy.visit('http://localhost:5000/org/asmigar');
          cy.get('body').should('have.text', 'Hello World with love from asmigar!')
    })
})

describe('/user/org', () => {
    it('greet hello to Gurukumar from cloudtrain ', () => {
        cy.visit('http://localhost:5000/user/Gurukumar/org/cloudtrain');
        cy.get('body').should('have.text', 'Hello Gurukumar with love from cloudtrain!')
  })
  it('greet hello to Shabd from Asmigar', () => {
          cy.visit('http://localhost:5000/user/Shabd/org/asmigar');
          cy.get('body').should('have.text', 'Hello Shabd with love from asmigar!')
    })

})