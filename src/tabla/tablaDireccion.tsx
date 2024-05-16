import React, { useEffect, useState } from "react";
import { getDireccion, createDireccion} from "../services/direccion";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Direction } from "../models/direccion";
import DrawerFooter from "./DrawerFooter";
import supabase from "../util/supabase";

const TablaDireccion: React.FC = () => {
  const [direction, setDirection] = useState<Direction[]>([]);
  const [open, setOpen] = useState(false);
  const [codigopostal, setCP] = useState<string>('');
  const [calle, setCalle] = useState<string>('');
  const [numext, setNumEXT] = useState<string>('');
  const [numint, setNumINT] = useState<string>('');
  const [ciudad, setCiudad] = useState<string>('');


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching direccion:", error);
      }
    };

    fetchDirection();
  }, []);

  
  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();

      const maxIdResponse = await supabase
        .from("direccion")
        .select("id_direccion")
        .order("id_direccion", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_direccion || 0;
      const newId = maxId + 1;

      const direccionInput: Direction = {
        id_direccion: newId,
        codigopostal,
        calle,
        numext,
        numint,
        ciudad,
        fechacreacion: currentDateTime, 
        fk_creadopor: randomID
      };

      await createDireccion(direccionInput);

      const updatedDireccion = await getDireccion();
      setDirection(updatedDireccion);
      onClose();
    } catch (error) {
      console.error("Error creating direccion:", error);
    }
  };


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
        Agregar dirección
      </Button>
      <Table columns={columns} dataSource={direction}
      />
        <Drawer title="Agregar Direccion" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
        <Form onFinish={handleSubmit}>
          <Form.Item<Direction>
            label="Codigo_Postal"
            name="codigopostal"
            rules={[{ required: true, message: "Agrega el código postal" }]}
          >
          <Input value={codigopostal} onChange={(e) => setCP(e.target.value)} />          
          </Form.Item>
          <Form.Item<Direction>
            label="Calle"
            name="calle"
            rules={[{ required: true, message: "Agrega la calle" }]}
          >
          <Input value={calle} onChange={(e) => setCalle(e.target.value)} />          
          </Form.Item>

          <Form.Item<Direction>
            label="Num_Exterior"
            name="numext"
            rules={[{ required: true, message: "Agrega el número exterior" }]}
          >
          <Input value={numext} onChange={(e) => setNumEXT(e.target.value)} />          
          </Form.Item>

          <Form.Item<Direction>
            label="Num_Interior"
            name="numint"
            rules={[{ required: true, message: "Agrega el número interior" }]}
          >
          <Input value={numint} onChange={(e) => setNumINT(e.target.value)} />          
          </Form.Item>

          <Form.Item<Direction>
            label="Ciudad"
            name="ciudad"
            rules={[{ required: true, message: "Agrega la ciudad" }]}
          >
          <Input value={ciudad} onChange={(e) => setCiudad(e.target.value)} />      
          </Form.Item>    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaDireccion;