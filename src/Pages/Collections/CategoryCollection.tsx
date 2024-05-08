import { Space, Typography } from 'antd'
import React from 'react'
import TablaCategorias from '../../tabla/tablaCategorias'



const CategoriesCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Categorias</Typography.Title>
        
            <TablaCategorias />
        
    </Space>
  )
}

export default CategoriesCollections