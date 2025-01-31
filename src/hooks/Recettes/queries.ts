import { useQuery } from "@tanstack/react-query";
import { IRecette } from "@api/Recettes";
import { recetteApi } from "@api/Recettes/apiRecettes";

export function useRecettes() {
    return useQuery<IRecette[]>({
        queryKey: ['recettes'],
        queryFn: recetteApi.fetchRecettes,
        retry: false,
    });
}

export function useRecetteDetails(id: string | undefined) {
    return useQuery({
        queryKey: ['recetteDetails', id],
        queryFn: () => recetteApi.recetteDetails(id as string),
        enabled: !!id,
    });
}
