import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateMovie from '../CreateMovie';

const server = setupServer(
  rest.post(`${process.env.REACT_APP_API_URL}/movies`, (req, res, ctx) => {
    return res(ctx.json({ success: 'ok' }));
  }),
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('CreateMovie', () => {
  test.skip('should fill form', async () => {
    render(<CreateMovie />);
    await act(async () => {
      userEvent.type(
        screen.getByLabelText(/title/i),
        'Forrest Gump',
      );
    });
    await act(async () => {
      userEvent.type(
        screen.getByLabelText(/description/i),
        'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate...',
      );
    });
    await act(async () => {
      userEvent.type(
        screen.getByLabelText(/video url/i),
        'https://www.imdb.com/title/tt0109830/',
      );
    });

    await act(async () => {
      userEvent.click(screen.getByRole('button', {name: /submit/i}));
    });

    // const successMessage = screen.getByText(/success!/i);
    // expect(successMessage).toBeInTheDocument();
  });
});
