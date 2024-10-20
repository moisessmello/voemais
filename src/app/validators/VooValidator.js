import * as Yup from 'yup';

const VooValidator = Yup.object().shape({
    
    identificador: Yup.string()
        .required('Campo obrigatório'),
    data_checkin: Yup.date()
        .required('Campo obrigatório'),
    data_embarque: Yup.date()
        .required('Campo obrigatório'),
    origem: Yup.string()
        .required('Campo obrigatório'),
    destino: Yup.string()
        .required('Campo obrigatório'),
    empresa: Yup.string()
        .required('Campo obrigatório'),
    preco: Yup.number()
        .required('Campo obrigatório')
        .positive('O preço deve ser um valor positivo'),
});

export default VooValidator;