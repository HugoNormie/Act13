import React, { useEffect, useState } from "react";
import { getSesiones, createSesion } from "../services/sesiones";
import { Table, Drawer, Button, Form, InputNumberProps, DatePicker,DatePickerProps, InputNumber } from "antd";
import { Session } from "../models/sesiones";
import DrawerFooter from "./DrawerFooter";
import supabase from "../util/supabase";

const TablaSesiones: React.FC = () => {
  const [session, setSessions] = useState<Session[]>([]);
  const [idcliente, setIDCliente] = useState<number>(0);
  const [fecha_sesion, setFechaSesion] = useState<Date>(new Date());
  const [fechaventa, setFechaVenta] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();

      const maxIdResponse = await supabase
        .from("sesiones")
        .select("id_sesion")
        .order("id_sesion", { ascending: false })
        .limit(1);

      const maxId = maxIdResponse.data?.[0]?.id_sesion || 0;
      const newId = maxId + 1;

      const sesionInput: Session = {
        id_sesion: newId,
        fecha_sesion,
        idcliente,
        fechaventa,
        fechacreacion: currentDateTime,
        fk_creadopor: randomID
      };

      await createSesion(sesionInput);

      const updatedSesiones = await getSesiones();
      setSessions(updatedSesiones);
      onClose();
    } catch (error) {
      console.error("Error creating sesiones:", error);
    }
  };

  const onChangeC: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDCliente(value);
    } else {
      setIDCliente(0);
    }
  };

  const onChangeS: DatePickerProps['onChange'] = (date) => {
    const selectedDate = new Date(date.year(), date.month() + 1, date.date());
    setFechaSesion(selectedDate);
  };

  const onChangeV: DatePickerProps['onChange'] = (date) => {
    const selectedDate = new Date(date.year(), date.month() + 1, date.date());
    setFechaVenta(selectedDate);
  };
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
        Agregar sesiones
      </Button>
      <Table columns={columns} dataSource={session}/>
      <Drawer title="Agregar Sesiones" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form onFinish={handleSubmit}>
    
          <Form.Item<Session>
            label="Fecha_Sesion"
            name="fecha_sesion"
            rules={[{ required: false}]}
          >
          <DatePicker onChange={onChangeS} />          </Form.Item>

          <Form.Item<Session>
            label="ID_Cliente"
            name="idcliente"
            rules={[{ required: true, message: "Agrega ID de la sesión" }]}
          >
          <InputNumber defaultValue={idcliente} onChange={onChangeC} />          </Form.Item>

          <Form.Item<Session>
            label="Fecha_Venta"
            name="fechaventa"
            rules={[{ required: true, message: "Agrega fecha de la venta" }]}
          >
          <DatePicker onChange={onChangeV} />          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaSesiones;