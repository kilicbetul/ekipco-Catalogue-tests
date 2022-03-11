describe('Favorites page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/shopping/favorites')
  })

  it('Remove one product from favorite test', () => {
    // Compare initial favorite product count with the removed product count
    if (document.querySelector('.text-center') !== null) {
      let initialCount, expectedCount
      cy.intercept('POST', '/api/favorites').as('post')
      cy.get('product-card').then(elem => {
        initialCount = elem.length
        cy.get(elem[0]).find('path').click().then(() => {
          cy.wait('@post')
          cy.get('@post').its('response.statusCode').should('eq', 200)
        })
        expectedCount = initialCount - 1
        cy.get('product-card').should('have.length', expectedCount)
      })
    }
  })

  it('No favorite product test', () => {
    if (document.querySelector('.text-center') === null) {
      cy.get('.lead').contains("Favori ürün bulunmamaktadır.")
    }
  })

})
