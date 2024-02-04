describe('Let Code Testing Web', () => {
  it('Create Script for the web', () => {
    cy.visit('https://letcode.in/edit');
    cy.contains('Input').should('be.visible');
    
    //Enter your full Name
    cy.get('#fullName').click().type('Vincent Lee Marvin');
    cy.get('#fullName').should('have.value', 'Vincent Lee Marvin');

    //Append a text and press keyboard tab
    cy.get('#join').click().type(' learner');
    cy.get('#join').type('{downArrow}');
    cy.get('#join').should('have.value', 'I am good learner');

    //What is inside the text box
    cy.get('#getMe')
    .invoke('val')
    .then(value => {
      cy.log(`Nilai dari input field: ${value}`);
    });

    //Clear the text
    cy.get('#clearMe').clear();

    //Confirm edit field is disabled
    cy.get('#noEdit').should('be.disabled');

    //Confirm text is readonly
    cy.get('#dontwrite').should('have.attr', 'readonly');
  })
})
