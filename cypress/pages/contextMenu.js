class ContextMenu {

    visit(){
        cy.visit('https://the-internet.herokuapp.com/context_menu')
    }

    CheckTitle(){
        return cy.get('h3').should('have.text','Context Menu')
    }

    RightClickSquare(){
        return cy.get('#hot-spot').rightclick()
    }

    CheckAlert(){
        return cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You selected a context menu');
          });
    }
}
export default ContextMenu;