import supabase from "../util/supabase"
import { SessionProduct } from "../models/sesiones_productos";

export const getSesionProductos = async (): Promise<SessionProduct[]> => {
    const { data , error} = await supabase.from("sesiones_productos").select();
    if (error) throw error;
    else{
        console.log ("SessionProduct:", data);
    }
   return data || []; 
}