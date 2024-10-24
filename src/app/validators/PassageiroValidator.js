import * as Yup from 'yup';

const PassageirosValidator = Yup.object().shape({

    nome: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(30, 'O máximo de caracteres é 30!')
        .required('Campo Obrigatório!'),
    tipo_documento: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(30, 'O máximo de caracteres é 30!')
        .required('Campo Obrigatório!'),
    documento: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(30, 'O máximo de caracteres é 30!')
        .required('Campo Obrigatório!'),
    email: Yup.string()
        .email('Digite um email válido!')
        .required('Campo Obrigatório!'),
    telefone: Yup.string()
        .positive('O número deve ser positivo!')
        .integer('O número deve ser inteiro!')
        .test('len', 'O telefone deve ter entre 8 e 11 dígitos', val => val && val.toString().length >= 8 && val.toString().length <= 11)
        .required('Campo Obrigatório!'),
    data_nascimento: Yup.string()
        
});

export default PassageirosValidator;