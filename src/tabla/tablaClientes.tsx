import React, { useEffect, useState } from "react";
import { getCustomers } from "../services/clientes";
import { Table } from "antd";
import { Client } from "../models/clientes";

const TablaCliente: React.FC = () => {
  const [clients, setCliente] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientes = await getCustomers();
        setCliente(clientes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchClients();
  }, []);

  const columns = [
    {
        title: 'ID_Cliente',
        dataIndex: 'id_cliente',
        key: 'id_cliente',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
    
      {
        title: 'Apellido',
        dataIndex: 'apellido',
        key: 'apellido',
      },
      {
        title: 'Fecha_Nacimiento',
        dataIndex: 'fechadenacimiento',
        key: 'fechadenacimiento',
      },
    
      {
        title: 'Fk_genero',
        dataIndex: 'fk_genero',
        key: 'fk_genero',
      },
    
      {
        title: 'Telefono',
        dataIndex: 'telefono',
        key: 'telefono',
      },
    
      {
        title: 'Correo',
        dataIndex: 'correo',
        key: 'correo',
      },
    
      {
        title: 'Fk_direccion',
        dataIndex: 'fk_direccion',
        key: 'fk_direccion',
      },
      {
        title: 'Fecha_creacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
      },
    
      {
        title: 'Fk_creado_por',
        dataIndex: 'fk_creado_por',
        key: 'fk_creado_por',
      },
    
      {
        title: 'Fecha_actualizacion',
        dataIndex: 'fecha_actualizacion',
        key: 'fecha_actualizacion',
      },
    
      {
        title: 'Fk_actualizado_por',
        dataIndex: 'fk_actualizado_por',
        key: 'fk_actualizado_por',
      },
      {
      title: 'Fecha_eliminado',
      dataIndex: 'fecha_eliminado',
      key: 'fecha_eliminado',
    },
    {
      title: 'Fk_eliminado_por',
      dataIndex: 'fk_eliminado_por',
      key: 'fk_eliminado_por',
    }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={clients}
      />

    </>
  );
}

export default TablaCliente;