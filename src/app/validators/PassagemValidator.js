import * as Yup from 'yup';

const PassagemValidator = Yup.object().shape({
    
    voo: Yup.string()
        .required('Campo obrigatório'),
    passageiro: Yup.string()
        .required('Campo obrigatório'),
    assento: Yup.number()
        .required('Campo obrigatório')
        .positive('O número do assento deve ser positivo')
        .integer('O número do assento deve ser um número inteiro'),
    preco: Yup.number()
        .required('Campo obrigatório')
        .positive('O preço deve ser um valor positivo'),
});

export default PassagemValidator;
