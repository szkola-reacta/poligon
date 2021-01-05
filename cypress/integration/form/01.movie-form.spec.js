describe('Form testing', () => {
  it('should fill form', () => {
    cy.visit('/movies/create');

    cy.findByTestId('title-field').type('Forrest Gump');
    cy.findByTestId('description-field').type('The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate...');
    cy.findByTestId('video-url-field').type('https://www.imdb.com/title/tt0109830/');

    cy.findByRole('button', { name: /submit/i }).click();

    cy.findByText(/success!/i).should('exist');
  });
});
