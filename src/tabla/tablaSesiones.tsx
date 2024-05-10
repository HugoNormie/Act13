import React, { useEffect, useState } from "react";
import { getSesiones } from "../services/sesiones";
import { Form, Input, Table } from "antd";
import { Session } from "../models/sesiones";
import { Button, Drawer } from 'antd';
import DrawerFooter from "./DrawerFooter";

const TablaSesiones: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [session, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSesiones();
        setSessions(session);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSession();
  }, []);

  const columns = [
    {
        title: 'ID_Sesion',
        dataIndex: 'id_sesion',
        key: 'id_sesion',
        
      },
      {
        title: 'Fecha_Sesion',
        dataIndex: 'fecha_sesion',
        key: 'fecha_sesion',
      },
  
      {
        title: 'Hora_Sesion',
        dataIndex: 'hora_sesion',
        key: 'hora_sesion',
      },
  
      {
        title: 'fk_cliente',
        dataIndex: 'fk_cliente',
        key: 'fk_cliente',
      },
  
      {
        title: 'Fecha_Venta',
        dataIndex: 'fecha_venta',
        key: 'fecha_venta',
      },
  
      {
        title: 'fecha_creacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
      },
  
      {
        title: 'fk_creado_por',
        dataIndex: 'fk_creado_por',
        key: 'fk_creado_por',
      },
      {
        title: 'fecha_actualizacion',
        dataIndex: 'fecha_actualizacion',
        key: 'fecha_actualizacion',
      },
  
      {
        title: 'fk_actualizado_por',
        dataIndex: 'fk_actualizado_por',
        key: 'fk_actualizado_por',
      },
  
      {
        title: 'fecha_eliminado',
        dataIndex: 'fecha_eliminado',
        key: 'fecha_eliminado',
      },
  
      {
        title: 'fk_eliminado_por',
        dataIndex: 'fk_eliminado_por',
        key: 'fk_eliminado_por',
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
        dataSource={session}
      />

    </>
  );
}

export default TablaSesiones;