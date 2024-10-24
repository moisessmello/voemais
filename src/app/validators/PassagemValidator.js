import * as Yup from 'yup';

const PassagemValidator = Yup.object().shape({
    
    voo: Yup.string()
    .required('Campo Obrigatório!'),
  
  passageiro: Yup.string()
    .required('Campo Obrigatório!'),
  
  assento: Yup.number()
    .required('Campo Obrigatório!'),
  
  preco: Yup.string()
    
});

export default PassagemValidator;
