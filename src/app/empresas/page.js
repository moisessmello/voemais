'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Button, Table } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {

    const [empresas, setEmpresas] = useState([])

    useEffect(()=>{
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    }, [])

    

    function excluir(id){
        if(confirm('Deseja realmente excluir o registro?')){
            const dados = empresas.filter(item=>item.id != id)
            localStorage.setItem('empresas', JSON.stringify(dados))
            setEmpresas(dados)
        }
    }

    return (
        <Pagina titulo="Empresas">
            <Link href="/empresas/form" className="btn btn-primary mb-3">
                <FaCirclePlus /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th> 
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                  <Link href={`/empresas/form/${item.id}`}>
                                  <FaRegEdit title="Editar" clasName="text-primary" />
                                  </Link>                          
                                
                                <MdDelete 
                                title="Excluir" 
                                clasName="text-danger"
                                onClick={()=>excluir(item.id)}
                                />
                                </td>
                            <td>{item.nome}</td>
                            <td>
                            <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}