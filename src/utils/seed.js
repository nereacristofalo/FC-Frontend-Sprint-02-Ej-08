import UploadIcon from '../images/upload_icon.svg';
import TrashIcon from '../images/trash_icon.svg';

export const countryOptions = [
  {
    value: 'espanya',
    text: 'España',
  },
  {
    value: 'argentina',
    text: 'Argentina',
  },
];

export const cityOptions = [
  {
    value: 'barcelona',
    text: 'Barcelona',
  },
  {
    value: 'rosario',
    text: 'Rosario',
  },
];

export const precenseOptions = [
  {
    value: 'inoffice',
    text: 'Presencial',
  },
  {
    value: 'remote',
    text: 'En remoto',
  },
];

export const transferOptions = [
  {
    value: 'yes',
    text: 'Sí',
  },
  {
    value: 'no',
    text: 'No',
  },
];

export const btnOptions = [
  {
    classes: ['btn', 'btn-upload'],
    icon: UploadIcon,
    label: 'Subir de nuevo',
  },
  {
    classes: ['btn'],
    icon: TrashIcon,
    label: 'Borrar',
  },
];

export const skillsOptions = {
  options: [
    'HTML&CSS',
    'ANGULAR',
    'REACT',
    'VUE',
    'NODEJS',
    'JAVASCRIPT',
    'JAVA',
    'SPRING',
    'C#',
    '.NET',
    'SQL',
  ],
  selectedOptions: ['HTML&CSS', 'REACT', 'ANGULAR'],
};
