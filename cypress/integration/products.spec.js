describe('Products page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/shopping/products/')
  })

  it('Product Electronic category text test', () => {
    cy.get(':nth-child(1) > .lead').contains('Elektronik')
    cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .card-title').should('have.text', '13 inç MacBook Pro')
    cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .card-text').should('have.text', 'Apple M1 çip, 13 inç MacBook Pro’ya inanılmaz bir hız ve güç kazandırıyor. 2,8 kata kadar daha yüksek CPU performansı. 5 kata kadar daha hızlı grafik teknolojileri. En gelişmiş Neural Engine birimimiz sayesinde 11 kata kadar daha hızlı yapay öğrenme. Ve gün boyunca devam etmenizi sağlayan 20 saate kadar pil ömrü. En sevilen profesyonel dizüstü bilgisayarımız şimdi bambaşka bir seviyede.')
    cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('have.text', '17499₺')
    cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .card-title').should('have.text', '64GB iPad')
    cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .card-text').should('have.text', 'True Tone özellikli 10.2 inç Retina ekran olağanüstü ayrıntılar, canlı renkler ve rahat bir görüntüleme deneyimi sunuyor.')
    cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('have.text', '4799₺')
    cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .card-title').should('have.text', 'iPhone 13 Pro')
    cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .card-text').should('have.text', 'Kameramızda bugüne kadarki en büyük gelişme. Yepyeni Pro kamera sistemi. Gelişmiş loş ışık performansı. Makro çekimle inanılmaz ayrıntılar.')
    cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .d-flex > .lead').should('have.text', '19999₺')
  })

  it('Product Moda category text test', () => {
    cy.get('products-list > :nth-child(3) > .lead').contains('Moda')
    cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .card-title').should('have.text', 'Regular - Tar')
    cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .card-text').should('have.text', "Kaft'ın en sade hali. Aynı kalıp, aynı kumaş, aynı kalitedeki tişörtü dilersen desensiz basic olarak da alabilirsin.")
    cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('have.text', '105₺')
    cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .card-title').should('have.text', 'Relax - Off White')
    cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .card-text').should('have.text', 'Modern bir tasarım çizgisinde, oversize ve rahat bir kullanım için hazırlandı.\nRegular kalıp tişörtlere oranla daha kalın bir kumaşa sahip olmasına rağmen yüksek hava geçirgenliği sayesinde ferah bir kullanım sunar.')
    cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('have.text', '125₺')
  })

  it('Product Book category text test', () => {
    cy.get(':nth-child(5) > .lead').contains('Kitap')
    cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .card-title').should('have.text', 'Kendine İyi Davran Güzel İnsan')
    cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .card-text').should('have.text', 'Sen kendin için bir şey yapmıyorsan kim senin için bir şeyler yapacak? Sen kendi yaralarını kendin sarmadan, kim sana yardım edebilir gerçekten? Eğer başkaları için önemli olmadığını hissediyorsan, ilkönce kendine şunu sormalısın: Ben kendim için önemli miyim?\nSeninle bir yolculuğa çıkacağız bu kitapla birlikte. Her insanın içinde bir sağlıklı bir de sağlıksız bir “ben” vardır. Sağlıksız ben kontrolü devraldığında, insan kendine zarar verir. İşte bu kitapla çıkacağımız yolculuğun amacı, içindeki güzel insana yani sağlıklı bene ulaşmak.\nBu yolculukta, kaygılarınla baş etmek ve kafaya takmamak için hangi yöntemleri kullanabileceğini, olumsuz düşüncelerini nasıl kontrol edebileceğini, sağlıklı ilişkilerini geliştirirken, sana zarar veren zehirli insanlardan kendini nasıl koruyabileceğini, hangi alanlarda mücadele etmenin anlamlı olduğunu, hangi alanlarda hayatı ve getirdiklerini kabullenmen gerektiğini, içindeki değersizlik hissini nasıl yenebileceğini ve kendini nasıl dönüştürebileceğini keşfedeceksin.\nHazır mısın bu yolculuğa?')
    cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('have.text', '15.6₺')
    
    cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .card-title').should('have.text', 'Ne İçin Varsan Onun İçin Yaşa - Bir Arayışın Romanı')
    cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .card-text').should('have.text', '“Tüm muhteşem hikâyeler iki şekilde başlar. Ya bir insan bir yolculuğa çıkar ya da şehre bir yabancı gelir.”\n- Tolstoy\nDemirden keskin bir düdük sesi yükseldi o sırada. Ayrılığın ciddiyeti buz gibi sardı bedenimi. Kapılar kapandı sonra... Çantam sağımda, yalnızlık karşımda...\nGidiyorum!\nHayır bir saniye!\nFilmlerde böyle olmazdı ki... Son anda muhakkak bir kalma sebebi yazardı senarist. Tam hareket etmek üzereyken trenden atlayıverirdi esas adam.\nOysa şimdi rayların üzerinde kaymaya başlamıştı bile tren... Ayrılığın göğsüme oturan ağırlığıyla camdan dışarı bakıp el sallayan insanlarla dolu peronu izledim.\nBeni uğurlamaya gelmeyen herkese teşekkür eder gibi bir damla gözyaşı bıraktım oraya.')
    cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('have.text', '16.8₺')
    
    cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .card-title').should('have.text', 'Bilinmeyen Bir Kadının Mektubu')
    cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .card-text').should('have.text', `Stefan Zweig Bilinmeyen Bir Kadının Mektubu (Brief einer Unbekannten) adlı uzun öyküsünü 1920'li yılların ilk yarısında kaleme aldı. Bilinmeyen Bir Kadının Mektubu'nun kadın kahramanını sadece uzun bir mektubun yazarı olarak tanıyoruz. Kadının hayatı boyunca sevmiş olduğu erkek için kaleme aldığı bu mektubun "gönderen"inin adı yoktur. Mektubun başında tek bir hitap vardır: "Sana, beni asla tanımamış olan sana". Kadın büyük tutkusunu hep bir "bilinmeyen" olarak, yani tek başına yaşamaya razıdır, bu aşk öyküsünde "taraflar" değil, sadece tek bir "taraf" vardır. Böylesine, gerçek anlamda aşk denilebilir mi? Zweig okurunu, bir kez daha, insan psikolojisinde eşine pek rastlanmayan bir yolculuğa davet ediyor. Bu yeni yolculuğun sonunda "mutlak aşk" kavramının şimdiye kadar bilinmeyen kıyılarına varmayı amaçlamış olması da bir ihtimal!`)
    cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .d-flex > .lead').should('have.text', '3.9₺')
  })

  it('Product Electronic card onClick test', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .card').should("have.attr","ng-reflect-router-link","/shopping/product,1").click().then(() => {
      cy.url().should('eq', 'http://localhost:4200/shopping/product/1')
    })
    cy.go("back")
  })

  it('Remove favourite on product 1 test', () => {
    cy.intercept('POST', '/api/favorites').as('post')
    cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi > path').then(element => {
      if (element.attr("d") === "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z") {
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite').click().then(() => {
          cy.wait('@post')
          cy.get('@post').its('request.body').should('deep.equal', { productId: 1 })
          cy.get('@post').its('response.statusCode').should('eq', 200)
          cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should("have.attr", "d", "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z")
        })
      }
    })
  })

  it('Add favourite product 2 test', () => {
    cy.intercept('POST', '/api/favorites').as('post')
    cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi > path').then(element => {
      if (element.attr("d") === "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z") {
        cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite').click().then(() => {
          cy.wait('@post')
          cy.get('@post').its('request.body').should('deep.equal', { productId: 2 })
          cy.get('@post').its('response.statusCode').should('eq', 200)
          cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should("have.attr", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z")
        })
      }
    })
  })

  it('Katalog App title navigation test', () => {
    cy.get('.flex-row > .d-flex > .font-weight-bold').click().then(() => {
      cy.url().should('eq', 'http://localhost:4200/shopping/home')
    })
  })
})
    