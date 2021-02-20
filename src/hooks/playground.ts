import {useQuery,useMutation} from 'react-query';
import client from './index'

const options = {
    	enabled:false,
    	retry:false,
    	staleTime:Infinity,
    	cacheTime:Infinity
    }


export const useCode = ()=>{
    return useQuery('code',()=>{}, options)
}
export const useError = ()=>{
    return useQuery('error',()=>{}, options)
}
export const usePreview = ()=>{
    return useQuery('preview',()=>{}, options)
}
export const update = (key:string,value:string)=>{
	client.setQueryData(`${key}`,value);
}
