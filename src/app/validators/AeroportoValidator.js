import * as Yup from 'yup';

const AeroportoValidator = Yup.object().shape({
    
    nome: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(25, 'O nome deve ter no máximo 25 caracteres')
        .required('Campo obrigatório'),    
    sigla: Yup.string()
        .min(2, 'A sigla deve ter no mínimo 2 caracteres')
        .max(5, 'A sigla deve ter no máximo 5 caracteres')
        .required('Campo obrigatório'),    
    uf: Yup.string()
        .length(2, 'UF deve conter 2 caracteres')
        .required('Campo obrigatório'),    
    cidade: Yup.string().required('Campo obrigatório'),    
    pais: Yup.string().required('Campo obrigatório'),
});

export default AeroportoValidator;
