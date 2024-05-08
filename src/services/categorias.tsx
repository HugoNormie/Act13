import supabase from "../util/supabase"
import { Category } from "../models/categorias";

export const getCategorias = async (): Promise<Category[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) {
        console.error("Error fetching category:", error);
      } else {
        console.log("Category:", data);
         // Agrega esta línea para imprimir los datos
      }
      return data || []; 

}