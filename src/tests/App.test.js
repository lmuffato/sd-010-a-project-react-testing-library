import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('App', () => {
  it('renders a reading with the text `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders a links with texts Home, About, and favorite pokemons', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const HomeLink = getByText(/Home/i);
    const AboutLink = getByText(/About/i);
    const FavoritePokemonsLink = getByText(/Favorite Pokémons/i);

    expect(HomeLink).toBeInTheDocument();
    expect(AboutLink).toBeInTheDocument();
    expect(FavoritePokemonsLink).toBeInTheDocument();
  });
}
)
