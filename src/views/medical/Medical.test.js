import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import medicalBody from './../../resources/info/medicalBody';
import Medical from './Medical';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Medical />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('medical body render texts and imgs', () => {
    const medical = screen.getByTestId('medical');
    expect(medical).toBeInTheDocument();
    expect(medical).toHaveTextContent('Cuerpo Médico');
    expect(medical).toHaveTextContent('Poseemos los mejores especialistas');
    medicalBody.forEach((body) => {
        const card = screen.getByTestId(body.id);
        expect(card).toBeInTheDocument();
        expect(card).toHaveTextContent(body.name);
        expect(card).toHaveTextContent(body.role);
        expect(card.firstChild).toBeInTheDocument();
        expect(card.firstChild).toHaveAttribute('src', body.img);
    });
});
