import { useQuery } from '@tanstack/react-query'
import { authApi } from '../..'

export const useGetDesignerInfo =()=>{
  return useQuery({queryKey:['designerInfo'],queryFn: async () => {
    const designerId = 1
    const res = await authApi.get(`/designer/api/designer/${designerId}`)
    return res
  }})
}