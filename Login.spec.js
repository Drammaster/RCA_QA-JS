/// <reference types="cypress" />

context('Login Test', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Check URL', () => {
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/')
        })
    })

    it('Login', () => {
        cy.contains('Login').click()
        cy.get('.MuiInput-input').eq(0).type('matt@test.com')
        cy.get('.MuiInput-input').eq(1).type('1234')
        cy.get('.MuiButton-label').eq(2).click()
    })
})

context('Case Editing', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })
})