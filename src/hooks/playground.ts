import { useQuery, useMutation } from "react-query";
import client from "./index";

const options = {
	enabled: false,
	retry: false,
	staleTime: Infinity,
	cacheTime: Infinity,
};

export const useListen = (key: string) => {
	return useQuery(key, () => {}, {
		...options,
		initialData: localStorage.getItem(key),
	});
};
export const useCode = () => {
	return useQuery("code", () => {}, {
		...options,
		initialData: "",
	});
};
export const useSyncCode = () => {
	return useQuery("sync-code", () => {}, {
		...options,
		initialData: "",
	});
};
export const useError = () => {
	return useQuery("error", () => {}, options);
};
export const usePreview = () => {
	return useQuery("preview", () => {}, options);
};
export const useTheme = () => {
	const theme = localStorage.getItem("playground-theme");
	return useQuery("theme", () => {}, {
		...options,
		initialData: theme,
	});
};
export const update = (key: string, value: string) => {
	client.setQueryData(`${key}`, value);
};
export const updateStorage = (key: string, value: string) => {
	localStorage.setItem(key, value);
	client.setQueryData(`${key}`, value);
};