import supabase from "../util/supabase"
import { Product } from "../models/product";

export const getProductos = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("productos").select();
    if (error) throw error;
    else{
        console.log ("Product:", data);
    }
   return data || []; 
}

export const createProducts = async (producto: Product): Promise<void> => {
    const { error} = await supabase.from("productos").insert(producto);
    if (error) throw error;
  }