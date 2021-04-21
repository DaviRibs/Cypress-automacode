/// <reference types="Cypress" />

import testeElementos from '../elementosPage/testeElementos'

const testeelementos = new testeElementos
const url = Cypress.config("baseUrl")

class TestePage {
    acessarSite() {
        cy.visit(url)
    }

    primeiroNome() {
        cy.get(testeelementos.primeiroNome()).type("Davi")        
    }

    ultimoNome() {
        cy.get(testeelementos.ultimoNome()).type("Ribeiro Barros")
    }

    adress () {
        cy.get(testeelementos.adress()).type(
            "Rua Penha automacode 222"
        )
    }

    email () {
        cy.get(testeelementos.email()).type(
            "davir@gmail.com"
        )
    }

    telefone () {
        cy.get(testeelementos.telefone()).type('9876543210')
    }

    radioMale () {
        cy.get(testeelementos.radioMale()).first().check()
        }

    hobbies () {
        cy.get(testeelementos.hobbies()).click()
    }

    languages () {
        cy.get(testeelementos.languages()).click()
        cy.get(':nth-child(8) > .ui-corner-all')
        .trigger('mousemove').click()
        cy.get('h1').click()
    }

    skills () {
        cy.get(testeelementos.skills()).select('Engineering')
    }

    pais () {
        cy.get(testeelementos.pais()).select('Australia')
    }

    country () {
        cy.get(testeelementos.country()).click()
        cy.get('#select2-country-results > :nth-child(2)')
        .trigger('mousemove').click()
    }

    year () {
        cy.get(testeelementos.year()).select('1995')
    }

    month () {
        cy.get(testeelementos.month()).select('December')
    }

    date () {
        cy.get(testeelementos.date()).select('25')
    }

    password () {
        cy.get(testeelementos.password()).type('Teste321')
    }

    confirmPassowrd () {
        cy.get(testeelementos.confirmPassword()).type('Teste321')
    }

    submitButton () {
        cy.get(testeelementos.submitButton()).click()
    }
}
export default TestePage;