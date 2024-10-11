"use client";

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const passagens = JSON.parse(localStorage.getItem("passagens")) || [];
  const dados = passagens.find((item) => item.id == params.id);

  const passagem = dados || {
    voo: "",
    passageiro: "",
    assento: "",
    preco: "",
  };

  function salvar(dados) {
    if (passagem.id) {
      Object.assign(passagem, dados);
    } else {
      dados.id = v4();
      passagens.push(dados);
    }
    localStorage.setItem("passagens", JSON.stringify(passagens));
    return route.push("/passagens");
  }

  return (
    <Pagina titulo="Passagens">
      <Formik initialValues={passagem} onSubmit={(values) => salvar(values)}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="voo">
              <Form.Label>Voo</Form.Label>
              <Form.Control
                type="text"
                name="voo"
                value={values.voo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passageiro">
              <Form.Label>Passageiros</Form.Label>
              <Form.Control
                type="text"
                name="passageiro"
                value={values.passageiro}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="assento">
              <Form.Label>Assento</Form.Label>
              <Form.Control
                type="text"
                name="assento"
                value={values.assento}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="preco">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                name="preco"
                value={values.preco}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link href="/passagens" className="btn btn-danger ms-2">
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}