import supabase from "../util/supabase"
import { IGenero } from "../models/genero";


export const getGenero = async (): Promise<IGenero[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) throw error;
    else{
        console.log ("Gender:", data);
    }
   return data || []; 
}