import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('footer render text and links', () => {
    const footer = screen.getByTestId('footer');
    const button = screen.getByTestId('contact-button');
    const faceLink = screen.getByTestId('facebook-link');
    const instaLink = screen.getByTestId('instagram-link');
    expect(footer).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(faceLink).toBeInTheDocument();
    expect(instaLink).toBeInTheDocument();
    expect(footer).toHaveTextContent('CENTERAVID');
    expect(footer).toHaveTextContent('Estamos aquí para ayudarte.');
    expect(footer).toHaveTextContent('Contactanos');
    expect(footer).toHaveTextContent(
        '© 2022 Centeravid. Todos los derechos reservados.',
    );
    expect(button).toHaveAttribute('href', '/contacto');
    expect(faceLink).toHaveAttribute(
        'href',
        'https://www.facebook.com/dipidiana/?ref=page_internal',
    );
    expect(instaLink).toHaveAttribute(
        'href',
        'https://www.instagram.com/centeravid/?hl=es',
    );
    expect(faceLink).toHaveAttribute('target', '_blank');
    expect(instaLink).toHaveAttribute('target', '_blank');
    expect(faceLink).toHaveAttribute('rel', 'noreferrer');
    expect(instaLink).toHaveAttribute('rel', 'noreferrer');
    expect(faceLink.firstChild).toHaveAttribute('class', 'bi bi-facebook');
    expect(instaLink.firstChild).toHaveAttribute('class', 'bi bi-instagram');
});
