import React, { useEffect, useState } from "react";
import { getDireccion } from "../services/direccion";
import { Form, Input, Table } from "antd";
import { Direction } from "../models/direccion";
import { Button, Drawer } from 'antd';
import DrawerFooter from "./DrawerFooter";

const tablaDireccion: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [direction, setDirection] = useState<Direction[]>([]);

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDirection();
  }, []);

  const columns = [
    {
        title: 'ID_Direccion',
        dataIndex: 'id_direccion',
        key: 'id_direccion',
        
      },
      {
        title: 'colonia',
        dataIndex: 'colonia',
        key: 'colonia',
      },
      {
        title: 'Codigo_Postal',
        dataIndex: 'codigo_postal',
        key: 'codigo_postal',
      },
  
      {
        title: 'Calle',
        dataIndex: 'calle',
        key: 'calle',
      },
  
      {
        title: 'numero_exterior',
        dataIndex: 'numero_exterior',
        key: 'numero_exterior',
      },
  
      {
        title: 'Num_Interior',
        dataIndex: 'numero_interior',
        key: 'numero_interior',
      },
  
      {
        title: 'Ciudad',
        dataIndex: 'ciudad',
        key: 'ciudad',
      },
  
      {
        title: 'fecha_creacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
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
        title: 'fecha_eliminacion',
        dataIndex: 'fecha_eliminacion',
        key: 'fecha_eliminacion',
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
        dataSource={direction}
      />

    </>
  );
}

export default tablaDireccion;