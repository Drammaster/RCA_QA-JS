/// <reference types="cypress" />

context('Create New RCA', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Login', () => {
        cy.contains('Login').click()
        cy.get('.MuiInput-input').eq(0).type('matt@test.com')
        cy.get('.MuiInput-input').eq(1).type('1234')
        cy.get('.MuiButton-label').eq(2).click()
        cy.wait(100)
    })

    it('Create New RCA entry', () => {
        cy.get('.MuiButton-label').eq(1).click()
        cy.get('.MuiInputBase-input').eq(0).type('Automated Test Csaba')
        cy.get('.MuiInputBase-input').eq(1).type('Csaba')
        cy.get('.MuiInputBase-input').eq(2).type('Csaba')
        cy.contains('Add Person').click()
        cy.get('.MuiInputBase-input').eq(3).type('Chris')
        cy.contains('COMPLETE').click()
    })
})