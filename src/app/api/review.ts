import { supabase } from "../../../supabase/supabase.config"

export const getReview = (id:string) => {
  const {data} = supabase.storage.from('reviews').getPublicUrl(`${id}`)
  return data
}