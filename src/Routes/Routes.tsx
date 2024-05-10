import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home";
import Collections from "../Pages/Collections/Collections";
import UsuariosCollections from "../Pages/Collections/CollectionUser";
import CategoriesCollections from "../Pages/Collections/CategoryCollection";
import ClientCollections from "../Pages/Collections/ClientCollections";
import DirectionCollections from "../Pages/Collections/DirectionCollection";
import GenderCollections from "../Pages/Collections/GenderCollection";
import ProductCollections from "../Pages/Collections/ProductCollections";
import SessionProductCollections from "../Pages/Collections/SessionProductColletion";
import SessionCollections from "../Pages/Collections/SessionCollections";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{
				path: "collections",
				element: <Collections />,
				children: [
          { path: "usuarios", element: <UsuariosCollections /> },
          { path: "categorias", element: <CategoriesCollections /> },
          { path: "sesiones", element: <SessionCollections /> },
          { path: "sesiones_productos", element: <SessionProductCollections /> },
          { path: "Productos", element: <ProductCollections /> },
          { path: "direcciones", element: <DirectionCollections /> },
          { path: "generos", element: <GenderCollections /> },
          { path: "Clientes", element: <ClientCollections /> },
        ],
			},
		],

                
	},
]);