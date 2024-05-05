import { Product } from "../models/product";
import supabase from "../util/supabase";


export const getProducts = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("productos").select();
    if (error) throw error;
    return data
}