import supabase from "../util/supabase"
import { Direction } from "../models/direccion";

export const getDireccion = async (): Promise<Direction[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) throw error;
    else{
        console.log ("Direction:", data);
    }
   return data || []; 
}