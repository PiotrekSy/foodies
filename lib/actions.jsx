'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('creator'),
        creator_email: formData.get('creator_email'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
    };

    await saveMeal(meal);
    redirect('/meals');
}