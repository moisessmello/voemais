import * as Yup from 'yup';

const EmpresaValidator = Yup.object().shape({
    
    nome: Yup.string()
        .min(3, 'Mínimo de caracteres é 3')
        .max(10, 'Máximo de caracteres é 10')
        .required('Campo obrigatório'),   
    logo: Yup.string()
        .min(2, 'Mínimo de caracteres é 2')
        .required('Campo obrigatório'),    
    site: Yup.string()
        .min(5, 'Mínimo de caracteres é 5')
        .required('Campo obrigatório'),
});

export default EmpresaValidator

