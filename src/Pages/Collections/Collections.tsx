import React from "react";
import { Space, Row, Card, Button, Typography} from "antd";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { toTitleCase } from "../../util/stringFormater";

interface Collection {
	id: number;
	title: string;
	description: string;
	key: string;
}

interface CollectionsProps { }

const Collections: React.FC<CollectionsProps> = () => {

	const outlet = useOutlet();
	const collectionsData: Collection[] = [
		{
			id: 1,
			title: "Usuarios",
			description: "Descripción de la colección 1",
			key: "usuarios",
		},
		{
			id: 2,
			title: "Categorias",
			description: "Descripción de la colección 2",
			key: "categorias",
		},
		{
			id: 3,
			title: "Clientes",
			description: "Descripción de la colección 3",
			key: "clientes",
		},

		{
			id: 4,
			title: "Direccion",
			description: "Descripción de la colección 4",
			key: "direcciones",
		},
		{
			id: 5,
			title: "Genero",
			description: "Descripción de la colección 5",
			key: "generos",
		},
		{
			id: 6,
			title: "Producto",
			description: "Descripción de la colección 6",
			key: "productos",
		},
		{
			id: 7,
			title: "Sesiones",
			description: "Descripción de la colección 7",
			key: "sesiones",
		},
		{
			id: 8,
			title: "Sesiones Productos",
			description: "Descripción de la colección 8",
			key: "sesiones_productos",
		}
	];

	if (!outlet) {return (
		<>
			<Typography.Title>Colecciones</Typography.Title>
			<Space direction="vertical" size={20}>
				<Row gutter={16}>
					{collectionsData.map((collection) => (
						<Space key={collection.id} direction="vertical">
							<Card
								title={toTitleCase(collection.title)}
								extra={
									<Button type="primary">
										<Link to={`/collections/${collection.key}`}>Ver</Link>
									</Button>
								}
								style={{ width: 300 }}
							>
								{collection.description}
							</Card>
						</Space>
					))}
				</Row>
			</Space>
			
		</>
	);}
	return <Outlet/>
};

export default Collections;