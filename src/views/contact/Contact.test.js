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
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.629569892939!2d-79.04249688524321!3d-2.922399197871469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd228a942ced3b%3A0xb851bca52ad355db!2sCenteravid%20Centro%20Terap%C3%A9utico%20De%20Adicciones%20Amor%20Y%20Vida!5e0!3m2!1sen!2sus!4v1679696840144!5m2!1sen!2sus',
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
