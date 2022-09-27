import T_familiar from './../imgs/T_familiar.jpeg';
import T_espiritual from './../imgs/T_espiritual.jpeg';
import T_psico from './../imgs/T_psico.jpeg';
import T_ocupacional from './../imgs/T_ocupacional.jpeg';
import T_recreativa from './../imgs/T_recreativa.jpeg';

const therapies = [
    {
        id: 'T_family',
        title: 'Terapia familiar',
        text: 'La importancia de la aplicación de un modelo psicoterapéutico familiar sistémico en pacientes drogodependientes radica en que no solo involucra un cambio individual del paciente sino a todo el contexto familiar.',
        img: T_familiar,
    },
    {
        id: 'T_espiritual',
        title: 'Terapia espiritual',
        text: 'Terapia de apoyo que favorecerá la identificación y contacto con la parte espiritual de la manera que cada uno de los pacientes la identifique, el trabajo se realizará mediante charlas grupales.',
        img: T_espiritual,
    },
    {
        id: 'T_psico',
        title: 'Terapia psicológica',
        text: 'Elaboración de Planes Terapéuticos individuales para los pacientes y sus familias. Su trabajo se desarrollará mediante terapias individuales y grupales con los pacientes y las familias.',
        img: T_psico,
    },
    {
        id: 'T_ocupacional',
        title: 'Terapia ocupacional',
        text: 'Terapia desarrollada de manera grupal en la que se buscara desarrollar y recuperar actividades de la vida cotidiana que puedan estar pérdidas por el avance de la enfermedad de la adicción.',
        img: T_ocupacional,
    },
    {
        id: 'T_recreativa',
        title: 'Terapia recreativa',
        text: 'Tiene como objetivo el reducir los niveles de estrés generado por el paso del tiempo en el tratamiento residencial y promover la integración del grupo comunitario a través de la participación de actividades de interés común.',
        img: T_recreativa,
    },
];

export default therapies;
