import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recetteApi } from "@api/Recettes/apiRecettes";



export function useUpdateRecette() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: recetteApi.updateRecette,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['recetteDetails'] });
        },
    });
}
