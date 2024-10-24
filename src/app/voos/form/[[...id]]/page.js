"use client";

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const voos = JSON.parse(localStorage.getItem("voos")) || [];
  const dados = voos.find((item) => item.id == params.id);

  const [empresas, setEmpresas] = useState([])
  const [aeroportos, setAeroportos] = useState([])

  useEffect(() => {
    setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    setAeroportos(JSON.parse(localStorage.getItem('aeroportos')) || [])
  }, [])
  

  const voo = dados || {
    
    identificador: "",
    dataCheckin: "",
    dataEmbarque: "",
    origem: "",
    destino: "",
    empresa: "",
    preco: "",
  };

  function salvar(dados) {
    if (voo.id) {
      Object.assign(voo, dados);
    } else {
      dados.id = v4();
      voos.push(dados);
    }
    localStorage.setItem("voos", JSON.stringify(voos));
    return route.push("/voos");
  }

  return (
    <Pagina titulo="Voo">
      <Formik initialValues={voo}   
      onSubmit={(values) => salvar(values)}>
        {({ 
            values, 
            handleChange, 
            handleSubmit, 
            setFieldValue 
        }) => (
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="identificador">
              <Form.Label>ID Voo</Form.Label>
              <Form.Control
                type="text"
                name="identificador"
                value={values.identificador}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataCheckin">
              <Form.Label>Data Check-in</Form.Label>
              <Form.Control
                type="text"
                name="dataCheckin"
                value={values.dataCheckin}
                onChange={(value) => {setFieldValue('dataCheckin', mask(value.target.value, '99/99/9999'))}}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dataEmbarque">
              <Form.Label>Data Embarque</Form.Label>
              <Form.Control
                type="text"
                name="dataEmbarque"
                value={values.dataEmbarque}
                onChange={(value) => {setFieldValue('dataEmbarque', mask(value.target.value, '99/99/9999'))}}
                  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="origem">
              <Form.Label>Origem</Form.Label>
              <Form.Select
                  name="origem"
                  value={values.origem}
                  onChange={handleChange('origem')}
                >

                  <option value=''>Selecione</option>
                  {aeroportos.map(item => (
                    <option key={item.nome} value={item.nome}>{item.nome}</option>
                  ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="destino">
              <Form.Label>Destino</Form.Label>
              <Form.Select
                  name="destino"
                  value={values.destino}
                  onChange={handleChange('destino')}
                >

                  <option value=''>Selecione</option>
                  {aeroportos.map(item => (
                    <option key={item.nome} value={item.nome}>{item.nome}</option>
                  ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="empresa">
              <Form.Label>Empresa</Form.Label>
              <Form.Select
                  name="empresa"
                  value={values.empresa}
                  onChange={handleChange('empresa')}
                >

                  <option value=''>Selecione</option>
                  {empresas.map(item => (
                    <option key={item.nome} value={item.nome}>{item.nome}</option>
                  ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                name="preco"
                value={values.preco}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  const formattedValue = (Number(value) / 100).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  });
                  setFieldValue("preco", formattedValue);
                }}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/voos" className="btn btn-danger ms-2">
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}