import { Direction } from "../models/direccion";
import supabase from "../util/supabase";


export const getAdresses = async (): Promise<Direction[]> => {
  const { data, error } = await supabase.from("direccion").select();
  if (error) {
    console.error("Error fetching products:", error);
  } else {
    console.log("direcciones:", data); // Agrega esta línea para imprimir los datos
  }
  return data || []; 
}