import React, { useEffect, useState } from "react";
import { getProductos,createProducts } from "../services/product";
import { Table, Drawer, Button, Form, Input, InputNumberProps, InputNumber } from "antd";
import { Product } from "../models/product";
import DrawerFooter from "./DrawerFooter";
import supabase from "../util/supabase";

const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [precio, setPrecio] = useState<number>(0);
  const [idcategoria, setIDCategoria] = useState<number>(0);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductos();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();

      const maxIdResponse = await supabase
        .from("productos")
        .select("id_producto")
        .order("id_producto", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_producto || 0;
      const newId = maxId + 1;

      const productosInput: Product = {
        id_producto: newId,
        nombre,
        descripcion,
        precio,
        idcategoria,
        fechacreacion: currentDateTime, 
        fk_creadopor: randomID
      };

      await createProducts(productosInput);

      const updatedProductos = await getProductos();
      setProducts(updatedProductos);
      onClose();
    } catch (error) {
      console.error("Error creating productos:", error);
    }
  };

  const onChangeP: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setPrecio(value);
    } else {
      setPrecio(0);
    }
  };

  const onChangeC: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDCategoria(value);
    } else {
      setIDCategoria(0);
    }
  };

  const columns = [
    {
      title: 'ID_Producto',
      dataIndex: 'id_productos',
      key: 'id_Productos',

    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    },

    {
      title: 'fk_categoria',
      dataIndex: 'fk_categoria',
      key: 'fk_categoria',
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
        Agregar producto
      </Button>
      <Table columns={columns} dataSource={products}/>
      <Drawer title="Agregar Productos" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form onFinish={handleSubmit}>
          <Form.Item<Product>
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Agrega el nombre del producto" }]}
          >
          <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />          
          </Form.Item>

          <Form.Item<Product>
            label="Descripcion"
            name="descripcion"
            rules={[{ required: true, message: "Agrega la descripción del producto" }]}
          >
          <Input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />          
          </Form.Item>

          <Form.Item<Product>
            label="Precio"
            name="precio"
            rules={[{ required: true, message: "Agrega el precio" }]}
          >
          <InputNumber defaultValue={precio} onChange={onChangeP} />          </Form.Item>

          <Form.Item<Product>
            label="ID_Categoria"
            name="idcategoria"
            rules={[{ required: true, message: "Agrega el ID de la categoria del producto" }]}
          >
          <InputNumber defaultValue={idcategoria} onChange={onChangeC} />          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaProductos;