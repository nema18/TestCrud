import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ItemList from '../components/ItemList';

const mock = new MockAdapter(axios);

describe('ItemList', () => {
  const items = [
    { id: '1', name: 'Item 1', avatar: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Item 2', avatar: 'https://via.placeholder.com/50' },
  ];

  beforeEach(() => {
    mock.reset();
  });

  it('displays loading spinner initially', async () => {
    mock.onGet('https://6172cfe5110a740017222e2b.mockapi.io/elements').reply(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([200, []]);
        }, 500);
      });
    });
    await act(async () => {
      render(<ItemList />);
    });

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders items after data is fetched', async () => {
    mock.onGet('https://6172cfe5110a740017222e2b.mockapi.io/elements').reply(200, items);
    await act(async () => {
      render(<ItemList />);
    });

    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());

    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByAltText(item.name)).toHaveAttribute('src', item.avatar);
    });
  });

  it('renders an empty list when no items are fetched', async () => {
    mock.onGet('https://6172cfe5110a740017222e2b.mockapi.io/elements').reply(200, []);
    await act(async () => {
      render(<ItemList />);
    });

    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());

    expect(screen.queryByText(/Item/)).not.toBeInTheDocument();
  });
});
