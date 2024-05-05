import { SessionProduct } from "../models/sesiones_productos";
import supabase from "../util/supabase";


export const getProductSessions = async (): Promise<SessionProduct[]> => {
  const { data, error } = await supabase.from("sesiones_productos").select();
  if (error) {
    console.error("Error fetching products:", error);
  } else {
    console.log("sesiones_productos:", data); // Agrega esta línea para imprimir los datos
  }
  return data || []; 
}