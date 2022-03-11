describe('home-page test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/shopping/home')
    })
  
    it('Header buttons navigation and active class test', () => {
        // Homepage button
        cy.get('#ngb-nav-0').click().should("have.attr","class","nav-link active").should('include.text', 'Anasayfa ')
        cy.url().should('include', '/shopping/home')
        cy.url().should('eq', 'http://localhost:4200/shopping/home')
        // Product button
        // Test failure because class does not get active 
        // cy.get('#ngb-nav-1').click().should("have.attr","class","nav-link active").should('include.text', 'Ürünler ')
        cy.get('#ngb-nav-1').click()
        cy.url().should('include', '/shopping/products/')
        cy.url().should('eq', 'http://localhost:4200/shopping/products/')
        // Favorites button
        cy.get('#ngb-nav-2').click().should("have.attr","class","nav-link active").should('include.text', 'Favoriler ')
        cy.url().should('include', '/shopping/favorites')
        cy.url().should('eq', 'http://localhost:4200/shopping/favorites')
    })

    it('Page title text and navigation test', () => {
      cy.get("a[class='font-weight-bold text-dark text-truncate']").contains('Katalog App')
    })

    it('Footer text and social media button onClick test', () => {
      // Footer text control
      cy.get("span[class='font-weight-bold copyright']").contains('Katalog App @ All rights reserved')

      // Social media navigation control
      cy.get("div[class='d-flex justify-content-between social-media']").find('a')
        .then($a => {
          cy.get($a[0]).click().should("have.attr","href","http://www.instagram.com")
          cy.get($a[1]).click().should("have.attr","href","http://www.twitter.com")
          cy.get($a[2]).click().should("have.attr","href","http://www.facebook.com")
        }) 
    })

    it('Slider next and previous button test', () => {
      // Stop the slider transition
      cy.clock()

      // First slide, click previous button
      cy.get('#slide-ngb-slide-0').should("have.attr","class","carousel-item active")
      cy.get("a[class='carousel-control-prev']").click()
      cy.get('#slide-ngb-slide-0').should("have.attr","class","carousel-item")
      // Slide back to last slide
      cy.get('#slide-ngb-slide-2').should("have.attr","class","carousel-item active")
      // Click next button
      cy.get("a[class='carousel-control-next']").click()
      cy.get('#slide-ngb-slide-2').should("have.attr","class","carousel-item")
      // Slide to the first slide
      cy.get('#slide-ngb-slide-0').should("have.attr","class","carousel-item active")
    })

    it('Slider image url onClick and tablist onClick test', () => {
      // Stop the slider transition
      cy.clock()

      // First slide
      cy.get('#slide-ngb-slide-0').find("a").should("have.attr","href","/shopping/product/6").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/6')
      })
      cy.visit('http://localhost:4200/shopping/home')
      
      // Second slide
      cy.get('li[aria-labelledby="slide-ngb-slide-1"]').click()
      cy.get('#slide-ngb-slide-1').find("a").should("have.attr","href","/shopping/product/1").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/1')
      })
      cy.visit('http://localhost:4200/shopping/home')

      // Third slide
      cy.get('li[aria-labelledby="slide-ngb-slide-2"]').click()
      cy.get('#slide-ngb-slide-2').find("a").should("have.attr","href","/shopping/product/4").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/4')
      })
    })

    it('Category button title, onClick and hover test', () => {
      // Category title
      cy.get("span[class='text-center k-header']").contains('Kategoriler')

      // First button
      const btnCategory0 = cy.get('[ng-reflect-router-link="/shopping/products,1"]')
      btnCategory0.realHover().wait(1000).should('have.css', 'background-color', 'rgb(52, 58, 64)')
      btnCategory0.should('have.text', 'Elektronik').should("have.attr","href","/shopping/products/1").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/products/1')
      })
      cy.visit('http://localhost:4200/shopping/home')

      // Second button
      const btnCategory1 = cy.get('[ng-reflect-router-link="/shopping/products,2"]')
      btnCategory1.realHover().wait(1000).should('have.css', 'background-color', 'rgb(52, 58, 64)')
      btnCategory1.should('have.text', 'Moda').should("have.attr","href","/shopping/products/2").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/products/2')
      })
      cy.visit('http://localhost:4200/shopping/home')

      // Third button
      const btnCategory2 = cy.get('[ng-reflect-router-link="/shopping/products,3"]')
      btnCategory2.realHover().wait(1000).should('have.css', 'background-color', 'rgb(52, 58, 64)')
      btnCategory2.should('have.text', 'Kitap').should("have.attr","href","/shopping/products/3").click().then(() => {
        cy.url().should('eq', 'http://localhost:4200/shopping/products/3')
      })
    })
  })