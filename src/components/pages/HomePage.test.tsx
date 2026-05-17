import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

type MockImageProps = ComponentProps<'img'> & {
  originWidth?: number;
  originHeight?: number;
  fittingType?: string;
};

vi.mock('@/components/Header', () => ({
  default: () => <div>Header</div>,
}));

vi.mock('@/components/Footer', () => ({
  default: () => <div>Footer</div>,
}));

vi.mock('@/components/ui/image', () => ({
  Image: ({ originWidth, originHeight, fittingType, ...props }: MockImageProps) => {
    void originWidth;
    void originHeight;
    void fittingType;
    return <img {...props} />;
  },
}));

describe('HomePage Riverside Plumbing demo', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  const renderPage = () =>
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

  it('opens the live demo and advances the guided tour', () => {
    renderPage();

    fireEvent.click(screen.getAllByRole('button', { name: /try live demo/i })[0]);

    expect(screen.getByRole('dialog', { name: /riverside plumbing live demo/i })).toBeInTheDocument();
    expect(screen.getByTestId('demo-tutorial-title')).toHaveTextContent('Missed calls');

    fireEvent.click(screen.getByRole('button', { name: /^next$/i }));

    expect(screen.getByTestId('demo-tutorial-title')).toHaveTextContent('Auto-text');
  });

  it('allows dismissing the tutorial and closing the overlay', async () => {
    renderPage();

    fireEvent.click(screen.getAllByRole('button', { name: /try live demo/i })[0]);
    fireEvent.click(screen.getByRole('button', { name: /explore freely/i }));

    await waitFor(() => {
      expect(screen.queryByTestId('demo-tutorial-title')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /back to taskrocket/i }));

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /riverside plumbing live demo/i })).not.toBeInTheDocument();
    });
  });
});
