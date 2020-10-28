/// <reference types="cypress" />

context('Bypass rca', () => {
    before(() => {
        cy.visit('http://localhost:3000/rca/')
    })

    it('Check URL', () => {
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/rca/')
        })
    })

    it('Check access', () => {
        cy.contains('NEW')
    })
})

context('Bypass new rca', () => {
    before(() => {
        cy.visit('http://localhost:3000/rca/new')
    })

    it('Check URL', () => {
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/rca/new')
        })
    })

    it('Create New RCA entry', () => {
        cy.get('.MuiInputBase-input').eq(0).type('Automated Test Csaba')
        cy.get('.MuiInputBase-input').eq(1).type('Csaba')
        cy.get('.MuiInputBase-input').eq(2).type('Csaba')
        cy.contains('Add Person').click()
        cy.get('.MuiInputBase-input').eq(3).type('Chris')
        cy.contains('COMPLETE').click()
    })

    it('Check URL', () => {
        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000')
        })
    })
})