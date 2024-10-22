import * as Yup from 'yup';

const PassageirosValidator = Yup.object().shape({

    nome: Yup.string()
        ,
    tipo_documento: Yup.string()
        .required('Campo obrigatório'),
    documento: Yup.string()
        .required('Campo obrigatório'),
    email: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .min(10, 'O telefone deve ter no mínimo 10 dígitos')
        .required('Campo obrigatório'),        
    data_nascimento: Yup.string()
        
});

export default PassageirosValidator;