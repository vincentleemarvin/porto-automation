class AddRemoveElements {
    
    visit() {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    clickButton(){
        return cy.get('button[onclick="addElement()"]').click()
    }

    removeButton(){
        return cy.get('.added-manually').eq(0).click()
    }

    checkButtonDelete(){
        return cy.get('.added-manually').should('be.visible')
    }

    checkButtonAdd(){
        return cy.get('button[onclick="addElement()"]').should('be.visible')
    }
}

export default AddRemoveElements;
