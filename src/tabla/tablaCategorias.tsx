import React, { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";
import { Table } from "antd";
import { Category } from "../models/categorias";

const TablaCategorias: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getCategorias();
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategory();
  }, []);

  const columns = [
    {
        title: 'id_categoria',
        dataIndex: 'id_categoria',
        key: 'id_categoria',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      
      {
        title: 'FechaCreacion',
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
        title: 'fk_eliminado_por',
        dataIndex: 'fk_eliminado_por',
        key: 'fk_eliminado_por',
      }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={category}
      />

    </>
  );
}

export default TablaCategorias;