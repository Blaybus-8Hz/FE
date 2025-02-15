import { baseApi } from '../../utils'
import { useQuery } from '@tanstack/react-query'


export const useGetTest =()=>{
  return useQuery({queryKey:['test'],queryFn: async () => {
    const res = await baseApi.get('/test')
    return res.data
  }})
}