export type MealApiResponse = {
  meals: Meal[];
};
export type CategoryApiResponse = {
  categories: Category[];
};

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
};
export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};
