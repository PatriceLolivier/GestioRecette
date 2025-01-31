import { IRecette, IRecetteDetails } from "./recettes.props";
 

const API_URL = "https://679cb1cd87618946e65311e6.mockapi.io/api/v1/";

export const recetteApi = {
  fetchRecettes: async (): Promise<IRecette[]> => {
    try {
      const response = await fetch(`${API_URL}/recettes`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recettes:", error);
      throw error;
    }
  },
  
  recetteDetails: async (id: string): Promise<IRecetteDetails> => {
    try {
      const response = await fetch(`${API_URL}/recettes/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recette details:", error);
      throw error;
    }
  },

  updateRecette: async (recetteDetails: IRecetteDetails) => {
    try {
      const response = await fetch(`${API_URL}/recettes/${recetteDetails.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recetteDetails),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating recette:", error);
      throw error;
    }
  }
};
