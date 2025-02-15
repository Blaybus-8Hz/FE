import { useMutation } from '@tanstack/react-query';
import { baseApi } from '../../utils';


export const usePostTest = () => 
  useMutation({
    mutationKey: ['post-test'],
    mutationFn: async (text: string) => {
      const { data } = await baseApi.post('api/postUrl', { "text" : text });
      return data;
    },
    onError: (error) => {
      console.error('api failed', error);
    },
    onSuccess(data) {
      console.log('api success', data);
    },
});
