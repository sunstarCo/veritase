import {supabase} from '../../../supabase/supabase.config'

export const getMainNews = async () =>{
  const {data} =  await supabase.from('news').select('id, title').range(0,4).order('created_at', {ascending : false});
 return data
}

/** 한 페이지 건수. antd Pagination 의 기본 pageSize(10)와 다르므로 넘길 때 같이 지정해야 한다 */
export const NEWS_PAGE_SIZE = 5;

export const getNewsPagination = async (pageParams: number) => {
    const startPostNumber = (pageParams - 1) * NEWS_PAGE_SIZE;
    const endPostNumber = pageParams * NEWS_PAGE_SIZE - 1;
    const {data }  = await supabase.from('news').select('*').range(startPostNumber, endPostNumber).order('created_at', {ascending : false});
      const { count } = await supabase.from('news').select(`*`, { count: 'exact', head: true })
  const total = Number(count) || 0;
  return {data, count: total, totalPages: Math.ceil(total / NEWS_PAGE_SIZE)};
};

export const getNewsDetail = async (id: string) => {
  const { data, error } = await supabase.from('news').select("*").eq('id', id)
  if (error) {
    console.log(error)
    throw error
  }
  return data[0]
}
