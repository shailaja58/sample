/// <reference types='cypress' />
describe('Rest API Samples', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com/'
    it('Handle Get Request', () => {
        cy.request(baseUrl.concat('users')).as('userRespObj')
        cy.get('@userRespObj').its('status').should('equals', 200)
        cy.get('@userRespObj')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8')
    })
    it('Get User Data', () => {
        cy.request('GET', 'https://reqres.in/api/users').then((response) => {
            
            expect(response.body.data[0].first_name).equal('George')
            expect(response.body.data).to.have.length(6)
            cy.log(response.body.data)
            //cy.log(response.body.data).to.have.length(6)
        })
    })
    it('Create User', () => {
        var userRecord ={
            id:11,
            name: 'TestUser',
            email: 'test@gmail.com'
        }
        cy.request('POST', 'https://reqres.in/api/users', userRecord).then((response)=> {
            expect(response.status).equal(201)
            expect(response.body.name).equal('TestUser')
        })
        cy.request('POST','https://reqres.in/api/users', userRecord)
        .its('body')
        .should('include', {name : 'TestUser'})
    })
    it('Update User',() =>{
        var user1 ={
            id:11,
            name: 'Test User',
            job: 'Lead'
        }
        cy.request('PUT','https://reqres.in/api/users', user1).then((response)=> {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })
   it('Delete User',() => {
       cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
           expect(response.status).equal(204)
       })

   })
})