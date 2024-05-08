import { Space, Typography } from 'antd'
import React from 'react'
import TablaGenero from '../../tabla/tablaGenero'



const GenderCollections:React.FC = () => {
  return (
    <Space size={'large'} align={'start'} direction={'vertical'}>
        <Typography.Title>Generos</Typography.Title>
        
            <TablaGenero />
        
    </Space>
  )
}

export default GenderCollections