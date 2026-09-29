export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  chefTips?: string;
  authorName?: string;
  createdAt?: string;
}

// Initial recipes array cleared as requested by user
export const RECIPES: Recipe[] = [];
