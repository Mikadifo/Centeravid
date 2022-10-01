import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import numbers from './../../resources/info/numbers';
import Contact from './Contact';

beforeEach(() => {
    render(
        <MemoryRouter>
            <Contact />
        </MemoryRouter>,
    );
});

afterEach(() => {
    cleanup();
});

test('contact render texts', () => {
    const contact = screen.getByTestId('contact');
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveTextContent('Contactanos');
    expect(contact).toHaveTextContent('Puedes contactarnos de varias formas');
});

test('contact render map card', () => {
    const mapCard = screen.getByTestId('map-card');
    const map = mapCard.firstChild;
    const address = screen.getByTestId('location');
    expect(mapCard).toBeInTheDocument();
    expect(map).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(mapCard).toHaveTextContent('Estamos ubicados en:');
    expect(map).toHaveAttribute(
        'src',
        'https://maps.google.com/maps?q=centeravid&t=&z=17&ie=UTF8&iwloc=&output=embed',
    );
    expect(address).toHaveTextContent(
        'Dos de Agosto y P. Vicente Maldonado, Cuenca, Ecuador',
    );
    expect(address).toHaveAttribute(
        'href',
        'https://www.google.com/maps?ll=-2.922375,-79.038992&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=13281604193666422235',
    );
    expect(address).toHaveAttribute('target', '_blank');
    expect(address).toHaveAttribute('rel', 'noreferrer');
});

test('contact render call options', () => {
    const callCard = screen.getByTestId('call-card');
    const emailOption = screen.getByTestId('E-clinic');
    const copyButtons = screen.getAllByTestId('copy-button');
    const whatsappButtons = screen.getAllByTestId('whatsapp-button');
    const callButtons = screen.getAllByTestId('call-button');
    const emailButton = screen.getByTestId('email-button');
    expect(callCard).toBeInTheDocument();
    expect(emailOption).toBeInTheDocument();
    expect(emailButton).toBeInTheDocument();
    expect(callCard).toHaveTextContent('Llámanos o Escríbenos');
    expect(callCard).toHaveTextContent('¿Prefieres usar correo?');
    expect(emailOption).toHaveTextContent('centeravid@hotmail.com');
    expect(emailButton).toHaveAttribute(
        'href',
        'mailto:centeravid@hotmail.com',
    );
    expect(emailButton.firstChild).toHaveAttribute('class', 'bi bi-envelope');
    numbers.forEach((number) => {
        const numberOption = screen.getByTestId(number.id);
        expect(numberOption).toBeInTheDocument();
        expect(numberOption).toHaveTextContent(number.number);
    });
    //The + 1 represents the email option
    expect(copyButtons.length).toEqual(numbers.length + 1);
    copyButtons.forEach((btn) => {
        expect(btn).toBeInTheDocument();
        expect(btn.firstChild).toHaveAttribute('class', 'bi bi-back');
    });
    expect(whatsappButtons.length).toEqual(numbers.length);
    whatsappButtons.forEach((btn, i) => {
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveAttribute(
            'href',
            `https://wa.me/593${numbers[i].number.substring(
                1,
                numbers[i].number.length,
            )}?text=Hola%20Centeravid,%20me%20gustaria%20saber%20...`,
        );
        expect(btn).toHaveAttribute('target', '_blank');
        expect(btn).toHaveAttribute('rel', 'noreferrer');
        expect(btn.firstChild).toHaveAttribute('class', 'bi bi-whatsapp');
    });
    expect(callButtons.length).toEqual(numbers.length);
    callButtons.forEach((btn, i) => {
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveAttribute('href', `tel:${numbers[i].number}`);
        expect(btn.firstChild).toHaveAttribute('class', 'bi bi-telephone');
    });
});
