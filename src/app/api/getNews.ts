import {supabase} from '../../../supabase/supabase.config'

export const getMainNews = async () =>{
  const {data} =  await supabase.from('news').select('id, title').range(0,4).order('created_at', {ascending : false});
 return data
}

export const getNewsPagination = async (pageParams: number) => {
    const startPostNumber = (pageParams - 1) * 5;
    const endPostNumber = pageParams * 5 - 1;
    const {data }  = await supabase.from('news').select('*').range(startPostNumber, endPostNumber).order('created_at', {ascending : false});
      const { count } = await supabase.from('news').select(`*`, { count: 'exact', head: true })
  return {data,count, totalPages: Math.ceil((Number(count) ?? 0) / 5) *10};  
};

export const getNewsDetail = async (id: string) => {
  const { data, error } = await supabase.from('news').select("*").eq('id', id)
  if (error) {
    console.log(error)
    throw error
  }
  return data[0]
}
