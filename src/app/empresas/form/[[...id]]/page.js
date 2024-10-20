'use client'

import Pagina from "@/app/components/Pagina";
import EmpresaValidator from "@/app/validators/EmpresaValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { v4 } from "uuid";


export default function Page({ params }) {

    const route = useRouter()

    const empresas = JSON.parse(localStorage.getItem('empresas')) || []
    const dados = empresas.find(item => item.id == params.id)
    const empresa = dados || { nome: '', logo: '', site: '' }

    function salvar(dados) {

        if (empresa.id) {
            Object.assign(empresa, dados)
        } else {
            dados.id = v4()
            empresas.push(dados)
        }

        localStorage.setItem('empresas', JSON.stringify(empresas))
        return route.push('/empresas');
    }

    return (
        <Pagina titulo="Empresa">
            <Formik
                initialValues={empresa}
                validationSchema={EmpresaValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                }) => {
                    console.log(errors)
                    return (
                        <Form className="mt-3">
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite o nome da empresa"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    isInvalid={errors.nome}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="logo">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Digite o nome da empresa"
                                    name="logo"
                                    value={values.logo}
                                    onChange={handleChange('logo')}
                                    isInvalid={errors.logo}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.logo}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="site">
                                <Form.Label>Site</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Digite o nome da empresa"
                                    name="site"
                                    value={values.site}
                                    onChange={handleChange('site')}
                                    isInvalid={errors.site}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.site}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-center">
                                <Link href={"/empresas"} className="btn btn-primary"><FaAngleLeft />Voltar</Link>
                                <Button variant="success" className="ms-1" onClick={handleSubmit}>
                                    <FaCheck />Salvar
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Pagina>
    )
}