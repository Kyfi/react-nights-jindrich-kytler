describe('home page', () => {
  it('should display home page', () => {
    cy.visit('/products')
    // Find first Add To Cart button
    cy.get('[data-testid="add-to-cart"]')
      .eq(0)
      .click() // put the product into shopping cart
      .click() // put the product into shopping cart
      .click() // put the product into shopping cart
      .click() // put the product into shopping cart
      .click() // put the product into shopping cart
    // Find second Add To Cart button
    cy.get('[data-testid="add-to-cart"]')
      .eq(1)
      .click() // put the product into shopping cart
      .click() // put the product into shopping cart
    // Navigate to shopping cart
    cy.contains('My Cart').click()
    // Expect to have 2 different products in shopping cart
    cy.get('[data-testid="product-in-cart"]').should('have.length', 2)
  })
})
