import { supabase } from "../../../supabase/supabase.config";

import type { TablesInsert } from "@/types/supabase";


export const deleteNews = async(id :string) => {
  const { error } = await supabase.from('news').delete().eq('id', `${id}`);
  if (error) {
    console.log(error)
  }
}

export const getNews = async () => {
  const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
  if (error) {
    console.log(error)
  }
  return data;
}

export const postNews = async(newPost:TablesInsert<'news'>) => {
  const { error } = await supabase.from('news').insert(newPost);
  if (error) {
    console.log(error)
    return error
  }
};