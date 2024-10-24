"use client";

import Pagina from "@/app/components/Pagina";
import PassageirosValidator from "@/app/validators/PassageiroValidator";
import PassageiroValidator from "@/app/validators/PassageiroValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter()

    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []
    const dados = passageiros.find(item => item.id == params.id)
    const passageiro = dados || { nome: '', email: '', telefone: '', data_nascimento: '', tipo_documento: '', documento: '' }

    function salvar(dados) {

        if (passageiro.id) {
            Object.assign(passageiro, dados)
        } else {
            dados.id = v4()
            passageiros.push(dados)
        }

        localStorage.setItem('passageiros', JSON.stringify(passageiros))
        return route.push('/passageiros')
    }

    return (
        <Pagina titulo="Passageiro">

            <Formik
                initialValues={passageiro}
                validationSchema={PassageirosValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => {

                    useEffect(() => {
                        switch (values.tipo_documento) {
                            case 'CPF':
                                values.documento = mask(values.documento, '999.999.999-99');
                                break;
                            case 'CNPJ':
                                values.documento = mask(values.documento, '99.999.999/9999-99');
                                break;
                            case 'RG':
                                values.documento = mask(values.documento, '9.999.999');
                                break;
                            case 'Passaporte':
                                values.documento = mask(values.documento, 'AAA9999');
                                break;
                        }
                    }, [values.documento])

                    useEffect(() => {
                        values.documento = ''
                    }, [values.tipo_documento])


                    return (

                        <Form>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    isInvalid={errors.nome}
                                    onChange={handleChange('nome')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tipo_documento">
                                <Form.Label>Tipo de Documento</Form.Label>
                                <Form.Select
                                    name="origem"
                                    value={values.tipo_documento}
                                    onChange={handleChange('tipo_documento')}
                                >


                                    <option value=''>Selecione</option>
                                    <option value='CPF'>CPF</option>
                                    <option value='CNPJ'>CNPJ</option>
                                    <option value='Passaporte'>Passaporte</option>
                                    <option value='RG'>RG</option>
                                    <option value='Outro'>Outro</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                        {errors.tipo_Documento}
                      </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="documento">
                                <Form.Label>Documento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="documento"
                                    value={values.documento}
                                    isInvalid={errors.documento}
                                    onChange={handleChange('documento')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.documento}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    isInvalid={errors.email}
                                    onChange={handleChange('email')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefone"
                                    value={values.telefone}
                                    isInvalid={errors.telefone}
                                    onChange={(value) => {
                                        setFieldValue('telefone', mask(value.target.value, '(99) 99999-9999'))
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="data_nascimento">
                                <Form.Label>Dt. Nascimento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="data_nascimento"
                                    value={values.data_nascimento}
                                    isInvalid={errors.data_nascimento}
                                    onChange={(value) => {
                                        setFieldValue('data_nascimento', mask(value.target.value, '99/99/9999'))
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.data_nascimento}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>
                                <Link
                                    href="/passageiros"
                                    className="btn btn-danger ms-2"
                                >
                                    <MdOutlineArrowBack /> Voltar
                                </Link>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Pagina>
    )
}