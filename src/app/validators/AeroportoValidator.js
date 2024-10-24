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
        .min(2, "O mínimo de caracteres é 3!")
        .max(4, "O máximo de caracteres é 4!")
        .required("Campo Obrigatório"),
    cidade: Yup.string()
        .min(3, "O mínimo de caracteres é 3")
        .max(30, "O máximo de caracteres é 30!")
        .required("Campo Obrigatório"),    
    pais: Yup.string()
        .min(3, "O mínimo de caracteres é 3")
        .max(30, "O máximo de caracteres é 30!")
        .required("Campo Obrigatório"),
});

export default AeroportoValidator;
