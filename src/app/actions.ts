"use server";

import { z } from "zod";
import { getPersonalizedSuggestions } from "@/ai/flows/personalized-learning-suggestions";

const formSchema = z.object({
  childName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
  currentProgress: z.string().min(10, "Descreva o progresso com pelo menos 10 caracteres."),
});

export async function handleGetSuggestions(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    childName: formData.get("childName"),
    currentProgress: formData.get("currentProgress"),
  });

  if (!validatedFields.success) {
    return {
      message: "Por favor, corrija os erros no formulário.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getPersonalizedSuggestions(validatedFields.data);
    return {
      message: "Sugestões geradas com sucesso!",
      suggestions: result.suggestions,
      errors: {},
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Ocorreu um erro ao gerar as sugestões. Tente novamente.",
      errors: {},
    };
  }
}
