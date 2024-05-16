import React, { useEffect, useState } from "react";
import { getGenero, createGenero } from "../services/genero";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Gender } from "../models/genero";
import DrawerFooter from "./DrawerFooter";
import supabase from "../util/supabase";

const TablaGenero: React.FC = () => {
  const [gender, setGender] = useState<Gender[]>([]);
  const [genero, setGenero] = useState<string>('');
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  
      try {
        const currentDateTime = new Date();
        const maxIdResponse = await supabase
          .from("genero")
          .select("id_genero")
          .order("id_genero", { ascending: false })
          .limit(1);
  
          const maxId = maxIdResponse.data?.[0]?.id_genero || 0;
          const newId = maxId + 1;

          const UserInput: Gender = {
          id_genero: newId,
          genero,
          fechacreacion:currentDateTime,
          fk_creadopor:randomID,
        };
    
        await createGenero(UserInput);
    
        const updateGender = await getGenero();
        setGender(updateGender);
        onClose();
      } catch (error) {
        console.error("Error creating genero:", error);
      }
    };

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
     <Button type="primary" onClick={showDrawer}>
        Agregar genero
      </Button>
      <Table columns={columns} dataSource={gender}/>
      <Drawer title="Agregar Genero" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form onFinish={handleSubmit}>
          <Form.Item<Gender>
            label="Genero"
            name="genero"
            rules={[{ required: true, message: "Agrega el género" }]}
          >
           <Input value={genero} onChange={(e) => setGenero(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaGenero;