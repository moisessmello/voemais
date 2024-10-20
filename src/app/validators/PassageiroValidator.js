import * as Yup from 'yup';

const PassageiroValidator = Yup.object().shape({

    nome: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(50, 'O nome deve ter no máximo 50 caracteres')
        .required('Campo obrigatório'),
    tipo_documento: Yup.string()
        .required('Campo obrigatório'),
    documento: Yup.string()
        .required('Campo obrigatório'),
    email: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .matches(/^\d+$/, 'O telefone deve conter apenas números')
        .min(10, 'O telefone deve ter no mínimo 10 dígitos')
        .required('Campo obrigatório'),        
    data_nascimento: Yup.date()
        .required('Campo obrigatório'),
});

export default PassageiroValidator;