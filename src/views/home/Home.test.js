import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
    aboutUsTitle,
    aboutUs,
    misionTitle,
    mision,
    visionTitle,
    vision,
} from './../../constants/homeTexts';
import Home from './Home';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('home render info, img and button', () => {
    const home = screen.getByTestId('home');
    const callAction = screen.getByTestId('call-action');
    const homeImg = screen.getByTestId('home-img');
    const infoContainer = screen.getByTestId('info-container');
    expect(home).toBeInTheDocument();
    expect(callAction).toBeInTheDocument();
    expect(homeImg).toBeInTheDocument();
    expect(infoContainer).toBeInTheDocument();
    expect(callAction).toHaveTextContent('CENTERAVID');
    expect(callAction).toHaveTextContent(
        'Nunca es tarde para comenzar de nuevo',
    );
    expect(callAction).toHaveTextContent('Contactanos');
    expect(homeImg).toHaveAttribute('src', 'home_img.jpeg');
    expect(infoContainer).toHaveTextContent(aboutUsTitle);
    expect(infoContainer).toHaveTextContent(aboutUs.join(''));
    expect(infoContainer).toHaveTextContent(misionTitle);
    expect(infoContainer).toHaveTextContent(mision.join(''));
    expect(infoContainer).toHaveTextContent(visionTitle);
    expect(infoContainer).toHaveTextContent(vision.join(''));
});

test('home button is working', async () => {
    const callActionButton = screen.getByTestId('call-action-button');
    expect(callActionButton).toBeInTheDocument();
    expect(callActionButton).toHaveAttribute('href', '/contacto');
});
