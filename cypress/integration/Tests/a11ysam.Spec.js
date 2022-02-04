//import {is} from "cypress/types/bluebird"
function terminalLog(violations){

    cy.task('log',
          `${violations.length} accessibility violations${
            violations.length === 1 ? '' : 's'
             } ${violations.length === 1 ? 'was' : 'were'}detected`
        )
        const violationData = violations.map(
            ({ id, impact, description , nodes }) => ({
                id,
                impact,
                description,
                nodes: nodes.length
            })
        )
        cy.task('table', violationData)
}
/// <reference types='cypress' />
describe('Accessibility Testing',() => {
    it('First Accessibility Testing', () => {
        cy.visit('https://demo.opencart.com')
        //cy.visit('https://www.cypress.io/features/')
        cy.injectAxe()
        //cy.checkA11y()
        // to check particular element
        //cy.checkA11y('.input-group-btn > .btn')
        //cy.checkA11y('.visible-xs')

        //to exlucde particular element
        //  cy.checkA11y({
        //      exclude: ['.visible-xs']
        //  })
        cy.checkA11y(null, null, terminalLog)
})
})
