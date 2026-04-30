describe('Formulario de registro de usuario', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/MODULO4TEST/EVALUACION/index.html')
    })
    

    it('debería contener los campos email, password y repeat-password', () => {
        cy.get('#email').should('exist')
        cy.get('#password').should('exist')
        cy.get('#repeat-password').should('exist')
    })

     it('debería mostrar mensaje y ocultar el botón cuando las contraseñas no coinciden', () => {
   
        cy.get('#password').type('miPassword123')
        cy.get('#repeat-password').type('otraPassword456')   
        cy.get('#password-message').should('be.visible')
        cy.get('#send-btn').should('not.be.visible')
  })

})