describe('Product Page Test', () => {
  beforeEach(() => {
    cy.visit(
      'https://prolaio-web-test-tech-interview-668657176393.us-central1.run.app/'
    );
  });

  it('Visibility Test ', () => {
    cy.contains('h1', 'Product Search').should('be.visible');
    cy.get('#searchInput').should('be.visible');
  });

  it('Minimum Price Validation', () => {
    const minPrice = '200';

    cy.get('#minPrice').should('be.visible').type(`${minPrice}{enter}`);
    cy.wait(1000);
    cy.get('div > div.product').each(($productCard) => {
      cy.wrap($productCard).within(() => {
        cy.contains('p', 'Price: $')
          .invoke('text')
          .then((price) => {
            const priceText = price.split(' ');
            // trim $ from from priceText[1]
            const priceNumber = priceText[1].replace('$', '');
            expect(Number(priceNumber)).to.be.gte(Number(minPrice));
          });
      });
    });
  });

  it.only('Add to Cart', () => {
    cy.contains('h3', 'Wireless Noise-Canceling Headphones')
      .should('be.visible')
      .siblings('button')
      .should('have.text', 'Add to Cart')
      .click();
    cy.get('ul#cartItems').within(() => {
      cy.contains('li', 'No items in cart').should('not.exist');
      cy.contains('li', 'Wireless Noise-Canceling Headphones - $249').should(
        'be.visible'
      );
      cy.contains('li button', 'Remove').should('be.visible').click();
    });

    // Verify that cart is returned to start state
  });
});
