/// <reference types='cypress' />
// describe('Intercept - Trellow Application', () => {
//     it('Create new Board', () => {
//         //root home page '/'
//         cy.visit('/')
//        cy.get('[data-cy=board-item]').should('have.length', 5)
// })
// })


describe('Intercept - Trellow Application', () => {
    it('Create new Board', () => {
        cy.intercept({
            method: 'GET',
            url:'/api/boards/'
        }).as('boards')
        //root home page '/'
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length', 5)
})
it('Return empty list',() => {
    cy.intercept({
        method: 'GET',
        url:'/api/boards'
    },{
        body:[]

    }).as('boards')
cy.visit('/')
})
  it.only('Pass values from Fixtures',() => {
    cy.intercept({
        method: 'GET',
        url:'/api/boards'
    },{
        fixture:'boards'      
    }).as('boards')
cy.visit('/')
})
// it.only('Check Network Failure',() => {
//     cy.intercept({
//         method: 'GET',
//         url:'/api/boards'
//     },{
//        forceNetworkError:true
        
//     }).as('boards')
// cy.visit('/')
// })
    })
