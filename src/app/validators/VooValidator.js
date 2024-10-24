import * as Yup from 'yup';

const VooValidator = Yup.object().shape({

  
    
    identificador: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(25, 'O máximo de caracteres é 25!')
    .required('Campo Obrigatório!'),
    data_checkin: Yup.date(),
        
    data_embarque: Yup.date(),
        
    origem: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(15, 'O máximo de caracteres é 15!'),
       
    destino: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(50, 'O máximo de caracteres é 50!')
        .required('Campo Obrigatório!'),
    empresa: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(50, 'O máximo de caracteres é 50!')
        .required('Campo Obrigatório!'),
    preco: Yup.number()
        .positive('O preço deve ser um valor positivo!')
        .required('Campo Obrigatório!')
});


export default VooValidator;