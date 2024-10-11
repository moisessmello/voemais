"use client";

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Page() {
  const [passagens, setPassagens] = useState([]);

  useEffect(() => {
    setPassagens(JSON.parse(localStorage.getItem("passagens")) || []);
  }, []);

  function excluir(id) {
   then((result) => {
      if (result.isConfirmed) {
        const dadosAtualizados = passagens.filter((item) => item.id !== id);


        localStorage.setItem("passagens", JSON.stringify(dadosAtualizados));
        setPassagens(dadosAtualizados);

        Swal.fire({
          title: "Excluído!",
          text: "O registro foi excluído.",
          icon: "success"
        });
      }
    });
  }

  return (
    <Pagina titulo="Passagens">
      <Link href="/passagens/form" className="btn btn-primary mb-3">
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Voo</th>
            <th>Passageiro</th>
            <th>Assento</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {passagens.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/passagens/form/${item.id}`}>
                  <FaEdit title="Editar" className="text-primary" />
                </Link>
                <MdDelete
                  title="Excluir"
                  className="text-danger"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.voo}</td>
              <td>{item.passageiro}</td>
              <td>{item.assento}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}