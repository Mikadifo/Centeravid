import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import plants from '../../resources/info/plants';
import Plant from './Plant';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Plant />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('plant render texts and imgs', () => {
    const plantContainer = screen.getByTestId('plant');
    expect(plantContainer).toBeInTheDocument();
    expect(plantContainer).toHaveTextContent('Instalación');
    expect(plantContainer).toHaveTextContent(
        'Contamos con zonas multipropositos',
    );
    plants.forEach((plant) => {
        const plantCard = screen.getByTestId(plant.id);
        expect(plantCard).toBeInTheDocument();
        expect(plantCard.firstChild).toHaveTextContent(plant.title);
        expect(plantCard.lastChild).toHaveAttribute('src', plant.img);
    });
});
