import React, { useEffect, useState } from "react";
import { getSesionProductos } from "../services/sesiones_productos";
import { Form, Input, Table } from "antd";
import { SessionProduct } from "../models/sesiones_productos";
import { Button, Drawer } from 'antd';
import DrawerFooter from "./DrawerFooter";

const TablaSesionesProductos: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [session_product, setSessionProduct] = useState<SessionProduct[]>([]);

  useEffect(() => {
    const fetchSessionProduct = async () => {
      try {
        const session_product = await getSesionProductos();
        setSessionProduct(session_product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSessionProduct();
  }, []);

  const columns = [
    {
      title: 'fk_sesion',
      dataIndex: 'fk_sesion',
      key: 'fk_sesion',
      
    },
    {
      title: 'fk_productos',
      dataIndex: 'fk_productos',
      key: 'fk_productos',
    },
    
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad',
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
        dataSource={session_product}
      />

    </>
  );
}

export default TablaSesionesProductos;