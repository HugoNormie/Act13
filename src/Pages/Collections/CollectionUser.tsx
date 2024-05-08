import { Space, Typography } from 'antd'
import React from 'react'
import TablaUsuarios from '../../tabla/tablaUsuarios'



const UsuariosCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Usuarios</Typography.Title>
        
            <TablaUsuarios />
        
    </Space>
  )
}

export default UsuariosCollections