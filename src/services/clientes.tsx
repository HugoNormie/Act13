import supabase from "../util/supabase"
import { Client } from "../models/clientes";


export const getCliente = async (): Promise<Client[]> => {
    const { data , error} = await supabase.from("clientes").select();
    if (error) throw error; 
    else{
        console.log ("Client:", data);
    }
   return data || []; 
}