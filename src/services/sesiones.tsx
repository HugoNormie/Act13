import supabase from "../util/supabase"
import { Session } from "../models/sesiones";


export const getSesiones = async (): Promise<Session[]> => {
    const { data , error} = await supabase.from("sesiones").select();
    if (error) throw error;
    else{
        console.log ("Session:", data);
    }
   return data || []; 
}