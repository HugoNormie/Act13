import supabase from "../util/supabase"
import { User } from "../models/usuarios";

export const getUsuarios = async (): Promise<User[]> => {
    const { data , error} = await supabase.from("usuarios").select();
    if (error) throw error;
    else{
        console.log ("User:", data);
    }
   return data || []; 
}