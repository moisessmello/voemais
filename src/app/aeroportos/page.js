

'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";

export default function Page() {

    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || [] //get é para pegar

    return (
        <Pagina titulo="Aeroportos">
            <Link href="/aeroportos/create" className="btn btn-primary mb-3">
                <FaCirclePlus /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>UF</th>
                        <th>Cidade</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {aeroportos.map(item => (
                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>{item.uf}</td>
                            <td>{item.cidade}</td>
                            <td>{item.pais}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}


