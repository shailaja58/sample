/// <reference types='cypress' />
describe('API Testing - Trellow Application', () => {
    var baseURL = 'http://localhost:3000'
    beforeEach(() => {
        cy.request({
            //resetting the data
            method: 'POST',
            url:'/api/request'
        })
    })
    it('Create a new Board', () => {
        //root home page '/'
        cy.visit('/')
        cy.request({
            method:'POST',
            url: '/api/boards',
            body:{
                'name': 'Create Cypress Samples'
            }
        })
    })
    it('Update Board Name', () => {
        cy.visit('/')
        cy.request({
            method:'PATCH',
            url: '/api/boards/52259990728',
            body:{
                'name': 'Updated my Board'
            }
        })
    })

})
