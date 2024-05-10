import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarios";
import { Form, Input, Table } from "antd";
import { User } from "../models/usuarios";
import { Button, Drawer } from 'antd';
import DrawerFooter from "./DrawerFooter";

const TablaUsuarios: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}footer={<DrawerFooter/>}>
      <Form>
          <Form.Item label="nombre de usuario"
          name="nombre"> 
            <Input/>
          </Form.Item>
          <Form.Item label="apellido de usuario"
          name="apellido"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
      <Table
        columns={columns}
        dataSource={users}
      />

    </>
  );
}

export default TablaUsuarios;