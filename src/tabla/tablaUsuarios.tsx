import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarios";
import { Table } from "antd";
import { User } from "../models/usuarios";

const TablaUsuarios: React.FC = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUsuarios();
        setUser(user);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUser();
  }, []);

  const columns = [
    {
        title: 'ID_Usuario',
        dataIndex: 'id_usuario',
        key: 'id_usuario',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      
      {
        title: 'Creado_por',
        dataIndex: 'creado_por',
        key: 'creado_por',
      },
      
      {
        title: 'Actualizado_por',
        dataIndex: 'actualizado_por',
        key: 'actualizado_por',
      },
      
      {
        title: 'Fecha_eliminacion',
        dataIndex: 'fecha_eliminacion',
        key: 'fecha_eliminacion',
      },
      {
        title: 'Eliminado_por',
        dataIndex: 'Eliminado_por',
        key: 'Eliminado_por',
      }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={users}
      />

    </>
  );
}

export default TablaUsuarios;