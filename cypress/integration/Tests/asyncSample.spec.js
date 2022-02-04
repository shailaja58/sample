
describe('Async Sample', () => {
it('Select from dropdown', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.get('#Skills').select('Android')
})
})