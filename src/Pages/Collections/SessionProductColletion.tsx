import { Space, Typography } from 'antd'
import React from 'react'
import TablaSesionesProductos from '../../tabla/tablaSesionesProductos'



const SessionProductCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Sesiones Productos</Typography.Title>
        
            <TablaSesionesProductos />
        
    </Space>
  )
}

export default SessionProductCollections