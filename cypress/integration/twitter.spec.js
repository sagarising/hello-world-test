describe('Twitter', () => {
    it('Send automated tweet', () => {
        cy.visit('https://twitter.com/login');
        const username = 'sagarmaurya2';
        const password = Cypress.env('TWITTER_PASSWORD');
        cy.contains('Phone, email, or username')
            .type(username);
        cy.contains('Password')
                .type(password);
        cy.get('[data-testid=LoginForm_Login_Button]').first().click();
        
        cy.get('.public-DraftStyleDefault-block').click()
                .type('Hello Twitterati from Cypress!!')
        cy.get('[data-testid=tweetButtonInline]').click();
  })
})
