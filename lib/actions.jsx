'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = async (prevState, formData) => {

    const isValidText = (text) => {
        return !text || text.trim() == '';
    };

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('creator'),
        creator_email: formData.get('creator_email'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    };

    if (isValidText(meal.title) ||
        isValidText(meal.summary) ||
        isValidText(meal.creator) ||
        isValidText(meal.creator_email) ||
        isValidText(meal.instructions) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid input',
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals', 'layout');
    redirect('/meals');
}