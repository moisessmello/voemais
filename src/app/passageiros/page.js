"use client";

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Page() {
  const [passageiros, setPassageiros] = useState([]);

  useEffect(() => {
    setPassageiros(JSON.parse(localStorage.getItem("passageiros")) || []);
  }, []);

  function excluir(id) {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, apague!"
    }).then((result) => {
      if (result.isConfirmed) {
        const dadosAtualizados = passageiros.filter((item) => item.id !== id);


        localStorage.setItem("passageiros", JSON.stringify(dadosAtualizados));
        setPassageiros(dadosAtualizados);

        Swal.fire({
          title: "Excluído!",
          text: "O registro foi excluído.",
          icon: "success"
        });
      }
    });
  }

  return (
    <Pagina titulo="Passageiros">
      <Link href="/passageiros/form" className="btn btn-primary mb-3">
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Tipo Documento</th>
            <th>Documento</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Data Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {passageiros.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/passageiros/form/${item.id}`}>
                  <FaEdit title="Editar" className="text-primary" />
                </Link>
                <MdDelete
                  title="Excluir"
                  className="text-danger"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nomeCompleto}</td>
              <td>{item.tipoDocumento}</td>
              <td>{item.documento}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.dataNascimento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}