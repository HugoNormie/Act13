import React, { useEffect, useState } from "react";
import { getGenero } from "../services/genero";
import { Table } from "antd";
import { IGenero } from "../models/genero";

const TablaGenero: React.FC = () => {
  const [gender, setGender] = useState<IGenero[]>([]);

  useEffect(() => {
    const fetchGender = async () => {
      try {
        const gender = await getGenero();
        setGender(gender);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchGender();
  }, []);

  const columns = [
    {
        title: 'ID_Genero',
        dataIndex: 'id_genero',
        key: 'id_genero',
        
      },
      {
        title: 'Genero',
        dataIndex: 'genero',
        key: 'genero',
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
        title: 'fk_creadoPor',
        dataIndex: 'fk_creado_por',
        key: 'fk_creado_por',
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
        title: 'fk_eliminadopor',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor',
      }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={gender}
      />

    </>
  );
}

export default TablaGenero;