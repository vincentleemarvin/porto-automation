import AddRemoveElements from "../pages/addRemoveElements";
import Checkbox from "../pages/checkbox";
import ContextMenu from "../pages/contextMenu";

const addRemoveElements = new AddRemoveElements();
const contextMenu = new ContextMenu();
const checkboxes = new Checkbox();

describe('', () => {
    it('Add/Remove Elements', () => {
        addRemoveElements.visit()

        //add 5 element
        for (let i = 0; i < 5; i++){
            addRemoveElements.clickButton()
        }
        
        //delete 2 element
        for (let i = 0; i < 2; i++){
            addRemoveElements.removeButton()
        }

        //add 2 element
        for (let i = 0; i < 2; i++){
            addRemoveElements.clickButton()
        }

        //delete 4 element
        for (let i = 0; i < 4; i++){
            addRemoveElements.removeButton()
        }

        //check button add
        addRemoveElements.checkButtonAdd()

        //check button delete
        addRemoveElements.checkButtonDelete()

    }),
    it('Context Menu', () => {
        contextMenu.visit()

        //Check title page
        contextMenu.CheckTitle()

        //right click square
        contextMenu.RightClickSquare()

        //Check description in alert box
        contextMenu.CheckAlert()

        cy.wait(2000)

    })
   
  })
  