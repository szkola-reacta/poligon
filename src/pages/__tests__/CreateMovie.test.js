import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateMovie from '../CreateMovie';

describe('CreateMovie', () => {
  test('should fill form', async () => {
    render(<CreateMovie />);

    userEvent.type(
      screen.getByRole('textbox', { name: /title/i }),
      'Forrest Gump',
    );

    userEvent.type(
      screen.getByRole('textbox', { name: /description/i }),
      'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate...',
    );

    userEvent.type(
      screen.getByRole('textbox', { name: /video url/i }),
      'https://www.imdb.com/title/tt0109830/',
    );

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /submit/i }));

    const successMessage = screen.getByText(/success!/i);
    expect(successMessage).toBeInTheDocument();
  });
});
