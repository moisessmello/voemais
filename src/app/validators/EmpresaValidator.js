import * as Yup from 'yup';

const EmpresaValidator = Yup.object().shape({
    
    nome: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(30, 'O máximo de caracteres é 30!')
        .required('Campo Obrigatório'),
    logo: Yup.string()
        .min(4, 'Mínimo de caracteres é 4'),
          
    site: Yup.string()
        .url('Digite uma url valida!')
});

export default EmpresaValidator

