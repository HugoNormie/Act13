import { Client } from "../models/clientes";
import supabase from "../util/supabase";


export const getCustomers = async (): Promise<Client[]> => {
  const { data, error } = await supabase.from("clientes").select();
  if (error) {
    console.error("Error fetching products:", error);
  } else {
    console.log("clientes:", data); // Agrega esta línea para imprimir los datos
  }
  return data || []; 
}