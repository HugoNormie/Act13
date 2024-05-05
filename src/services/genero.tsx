import { IGenero } from "../models/genero";
import supabase from "../util/supabase";


export const getGenders = async (): Promise<IGenero[]> => {
  const { data, error } = await supabase.from("genero").select();
  if (error) {
    console.error("Error fetching products:", error);
  } else {
    console.log("generos:", data); // Agrega esta línea para imprimir los datos
  }
  return data || []; 
}