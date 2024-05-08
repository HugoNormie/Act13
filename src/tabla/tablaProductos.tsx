import React, { useEffect, useState } from "react";
import { getProductos } from "../services/product";
import { Table } from "antd";
import { Product } from "../models/product";

const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
      <Table
        columns={columns}
        dataSource={products}
      />

    </>
  );
}

export default TablaProductos;