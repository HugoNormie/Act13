import { Space, Typography } from 'antd'
import React from 'react'
import TablaClientes from '../../tabla/tablaClientes'



const ClientCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Clientes</Typography.Title>
        
            <TablaClientes />
        
    </Space>
  )
}

export default ClientCollections