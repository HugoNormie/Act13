import React, { useEffect, useState } from "react";
import { getProducts } from "./services/product";
import { getUsers } from "./services/usuarios";
import { getSessions } from "./services/sesiones";
import { getGenders } from "./services/genero";
import { getAdresses } from "./services/direccion";
import { getCustomers } from "./services/clientes";
import { getCategories } from "./services/categorias";
import { getProductSessions } from "./services/sesiones_productos";
import { Table } from "antd";

import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;



const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedOption] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData: React.SetStateAction<any[]>;
        switch (selectedOption) {
          case 'products':
            fetchedData = await getProducts();
            break;
          case 'users':
            fetchedData = await getUsers();
            break;
          case 'sessions':
            fetchedData = await getSessions();
            break;
            case 'genders':
              fetchedData = await getGenders();
              break;
            case 'adresses':
              fetchedData = await getAdresses();
              break;
            case 'customers':
              fetchedData = await getCustomers();
              break;
            case 'categories':
              fetchedData = await getCategories();
              break;
            case 'productSessions':
              fetchedData = await getProductSessions();
              break;
          default:
            fetchedData = [];
        }
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedOption) {
      fetchData();
    }
  }, [selectedOption]);


  const columns = {
    products: [
      {
        title: 'ID Producto',
        dataIndex: 'idproducto',
        key: 'idproducto',
      },
      {
        title: 'Descripción',
        dataIndex: 'descripcion',
        key: 'descripcion',
      },
      {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
      },
      {
        title: 'Categoría',
        dataIndex: 'fk_categoria',
        key: 'fk_categoria',
      },
      {
        title: 'Fecha de Creación',
        dataIndex: 'fechaCreacion',
        key: 'fechaCreacion',
      },
      {
        title: 'Fecha de Actualización',
        dataIndex: 'fechaActualizacion',
        key: 'fechaActualizacion',
      },
      {
        title: 'Creado Por',
        dataIndex: 'fk_creadoPor',
        key: 'fk_creadoPor',
      },
      {
        title: 'Actualizado Por',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor',
      },
      {
        title: 'Fecha de Eliminación',
        dataIndex: 'fechaeliminacion',
        key: 'fechaeliminacion',
      },
      {
        title: 'Eliminado Por',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor',
      },
    ],
    users: [
      {
        title: 'ID usuario',
        dataIndex: 'idusuario',
        key: 'idusuario'
      },
      {
        title: 'nombre',
        dataIndex: 'nombre',
        key: 'nombre'
      },
      {
        title: 'fecha de creacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha de actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
        title: 'fecha de eliminacion',
        dataIndex: 'fechaeliminacion',
        key: 'fechaeliminacion'
      },
    ],
    sessions: [
      {
        title: 'ID sesion',
        dataIndex: 'idsesion',
        key: 'idsesion'
      },
      {
        title: 'fecha sesion',
        dataIndex: 'fechasesion',
        key: 'fechasesion'
      },
      {
        title: 'hora sesion',
        dataIndex: 'horasesion',
        key: 'horasesion'
      },
      {
        title: 'id cliente',
        dataIndex: 'fk_cliente',
        key: 'fk_cliente'
      },
      {
        title: 'fecha de venta',
        dataIndex: 'fechaventa',
        key: 'fechaventa'
      },
      {
        title: 'fecha creacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
        title: 'creado por',
        dataIndex: 'fk_creadopor',
        key: 'fk_creadopor'
      },
      {
        title: 'actualizado por',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor'
      },
      {
        title: 'fecha de eliminacion',
        dataIndex: 'fechaeliminacion',
        key: 'fechaeliminacion'
      },
      {
        title: 'eliminado por',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor'
      },
    ],
    genders: [
      {
        title: 'ID genero',
        dataIndex: 'idgenero',
        key: 'idgenero'
      },
      {
        title: 'genero',
        dataIndex: 'genero',
        key: 'genero'
      },
      {
        title: 'fecha de creacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha de actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
        title: 'creado por',
        dataIndex: 'fk_creadopor',
        key: 'fk_creadopor'
      },
      {
        title: 'actualizado por',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor'
      },
      {
        title: 'fecha de eliminacion',
        dataIndex: 'fechaeliminacion',
        key: 'fechaeliminacion'
      },
      {
        title: 'eliminado por',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor'
      },
    ],
    adresses: [
      {
        title: 'ID direccion',
        dataIndex: 'iddireccion',
        key: 'iddireccion'
      },
      {
        title: 'codigo postal',
        dataIndex: 'codigopostal',
        key: 'codigopostal'
      },
      {
        title: 'calle',
        dataIndex: 'calle',
        key: 'calle'
      },
      {
        title: 'colonia',
        dataIndex: 'colonia',
        key: 'colonia'
      },
      {
        title: 'numext',
        dataIndex: 'numext',
        key: 'numext'
      },
      {
        title: 'numint',
        dataIndex: 'numint',
        key: 'numint'
      },
      {
        title: 'ciudad',
        dataIndex: 'ciudad',
        key: 'ciudad'
      },
      {
        title: 'fecha creacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
      title: 'creado por',
      dataIndex: 'fk_creadopor',
      key: 'fk_creadopor'
    },
    {
      title: 'actualizado por',
      dataIndex: 'fk_actualizadopor',
      key: 'fk_actualizadopor'
    },
    {
      title: 'fecha de eliminacion',
      dataIndex: 'fechaeliminacion',
      key: 'fechaeliminacion'
    },
    {
      title: 'eliminado por',
      dataIndex: 'fk_eliminadopor',
      key: 'fk_eliminadopor'
    },
    ],
    customers: [
      {
        title: 'ID clientes',
        dataIndex: 'idclientes',
        key: 'idclientes'
      },
      {
        title: 'nombre',
        dataIndex: 'nombre',
        key: 'nombre'
      },
      {
        title: 'apellido',
        dataIndex: 'apellido',
        key: 'apellido'
      },
      {
        title: 'fecha nacimiento',
        dataIndex: 'fechanac',
        key: 'fechanac'
      },
      {
        title: 'genero',
        dataIndex: 'fk_genero',
        key: 'fk_genero'
      },
      {
        title: 'telefono',
        dataIndex: 'telefono',
        key: 'telefono'
      },
      {
        title: 'correo',
        dataIndex: 'correo',
        key: 'correo'
      },
      {
        title: 'direccion',
        dataIndex: 'fk_direccion',
        key: 'fk_direccion'
      },
      {
        title: 'fecha creacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha de actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
        title: 'fk_creadorpor',
        dataIndex: 'fk_creadorpor',
        key: 'fk_creadorpor'
      },
      {
        title: 'fk_actualizadopor',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor'
      },
      {
        title: 'fecha eliminado',
        dataIndex: 'fechaeliminado',
        key: 'fechaeliminado'
      },
      {
        title: 'eliminado por',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor'
      },
    ],
    categories: [
      {
        title: 'ID categoria',
        dataIndex: 'idcategoria',
        key: 'idcategoria'
      },
      {
        title: 'nombre',
        dataIndex: 'nombre',
        key: 'nombre'
      },
      {
        title: 'fechacreacion',
        dataIndex: 'fechacreacion',
        key: 'fechacreacion'
      },
      {
        title: 'fecha actualizacion',
        dataIndex: 'fechaactualizacion',
        key: 'fechaactualizacion'
      },
      {
        title: 'fk_creadorpor',
        dataIndex: 'fk_creadopor',
        key: 'fk_creadopor'
      },
      {
        title: 'fk_actualizadopor',
        dataIndex: 'fk_actualizadopor',
        key: 'fk_actualizadopor'
      },
      {
        title: 'fecha eliminado',
        dataIndex: 'fechaeliminacion',
        key: 'fechaeliminacion'
      },
      {
        title: 'eliminado por',
        dataIndex: 'fk_eliminadopor',
        key: 'fk_eliminadopor'
      },
    ],
    productSessions: [
      {
        title: 'sesion',
        dataIndex: 'fk_sesion',
        key: 'fk_sesion'
      },
      {
        title: 'ID producto',
        dataIndex: 'fk_producto',
        key: 'fk_producto'
      },
      {
        title: 'cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad'
      },
    ]


  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['products']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#001529', color: '#fff', textAlign: 'center' }}>Header</Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Table columns={columns[selectedOption || 'products']} dataSource={data} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;