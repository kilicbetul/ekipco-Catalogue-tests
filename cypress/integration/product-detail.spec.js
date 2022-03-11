describe('product-detail-page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/shopping/product/1')
  })

  it('Product detail and favorite button test', () => {
    cy.get('h4').should('have.text', '13 inç MacBook Pro')
    cy.get('p').should('have.text', 'Apple M1 çip, 13 inç MacBook Pro’ya inanılmaz bir hız ve güç kazandırıyor. 2,8 kata kadar daha yüksek CPU performansı. 5 kata kadar daha hızlı grafik teknolojileri. En gelişmiş Neural Engine birimimiz sayesinde 11 kata kadar daha hızlı yapay öğrenme. Ve gün boyunca devam etmenizi sağlayan 20 saate kadar pil ömrü. En sevilen profesyonel dizüstü bilgisayarımız şimdi bambaşka bir seviyede.')
    cy.get('.lead').should('have.text', '17499₺')
    cy.get('.flex-column > .d-flex > .font-weight-bold').should('have.text', 'Favorilere ekle')

    cy.intercept('POST', '/api/favorites').as('post')
    // Remove favorite
    cy.get('.add-favorite > .bi').find('path').then(path => {
      if (path.attr("d") === "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z") {
        console.log("girdim")
        cy.get('.add-favorite > .bi').click().then(() => {
          cy.wait('@post')
          cy.get('@post').its('request.body').should('deep.equal', { productId: 1 })
          cy.get('@post').its('response.statusCode').should('eq', 200)
          cy.get('.add-favorite > .bi > path').should("have.attr", "d", "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z")
        })
      }
    })

    // Add favorite
    cy.get('.add-favorite > .bi').find('path').then(path => {
      if (path.attr("d") === "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z") {
        console.log("girdim")
        cy.get('.add-favorite > .bi').click().then(() => {
          cy.wait('@post')
          cy.get('@post').its('request.body').should('deep.equal', { productId: 1 })
          cy.get('@post').its('response.statusCode').should('eq', 200)
          cy.get('.add-favorite > .bi > path').should("have.attr", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z")
        })
      }
    })
  })
})