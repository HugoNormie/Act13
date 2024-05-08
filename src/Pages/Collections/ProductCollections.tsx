import { Space, Typography } from 'antd'
import React from 'react'
import TablaProductos from '../../tabla/tablaProductos'



const ProductCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Productos</Typography.Title>
        
            <TablaProductos />
        
    </Space>
  )
}

export default ProductCollections