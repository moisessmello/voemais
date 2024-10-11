"use client";

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";



export default function Page() {
  const [voos, setVoos] = useState([])

  useEffect(() => {
    setVoos(JSON.parse(localStorage.getItem('voos')) || [])
   
  }, [])

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
        const dadosAtualizados = voos.filter((item) => item.id !== id);


        localStorage.setItem("voos", JSON.stringify(dadosAtualizados));
        setVoos(dadosAtualizados);

        Swal.fire({
          title: "Excluído!",
          text: "O registro foi excluído.",
          icon: "success"
        });
      }
    });
  }


  return (
    <Pagina titulo="Voos">
      <Link href="/voos/form" className="btn btn-primary mb-3">
        <FaPlusCircle /> Novo
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Iternacional</th>
            <th>Identificador</th>
            <th>Data_Checkin</th>
            <th>Data_Embarque</th>
            <th>Origin</th>
            <th>Destino</th>
            <th>Empresa</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {voos.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/voos/form/${item.id}`}>
                  <FaEdit title="Editar" className="text-primary" />
                </Link>
                <MdDelete
                  title="Excluir"
                  className="text-danger"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.internacional ? "Sim" : "Não"}</td>
              <td>{item.identificador}</td>
              <td>{item.dataCheckin}</td>
              <td>{item.dataEmbarque}</td>
              <td>{item.origin}</td>
              <td>{item.destino}</td>
              <td>{item.empresan}</td>
              <td>{item.preço}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}