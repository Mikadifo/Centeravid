import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import therapies from './../../resources/info/therapies.js';
import Therapies from './Therapies';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Therapies />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('therapies render texts and imgs', () => {
    const therapiesContainer = screen.getByTestId('therapies');
    expect(therapiesContainer).toBeInTheDocument();
    expect(therapiesContainer).toHaveTextContent('Terapias');
    expect(therapiesContainer).toHaveTextContent(
        'Ofrecemos las mejores terapias de rehabilitación',
    );
    therapies.forEach((therapy, i) => {
        const current = screen.getByTestId(therapy.id);
        expect(current).toBeInTheDocument();
        expect(current).toHaveTextContent(therapy.title);
        expect(current).toHaveTextContent(therapy.text);
        const regex = RegExp(
            i % 2 !== 0
                ? '^(?!.*order-last text-end)'
                : '.*order-md-last text-md-end.*',
        );
        expect(current.firstChild).toHaveAttribute(
            'class',
            expect.stringMatching(regex),
        );
        expect(current.firstChild.firstChild).toHaveAttribute(
            'src',
            therapy.img,
        );
    });
});
