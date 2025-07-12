"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleGetSuggestions } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const initialState = {
  message: "",
  errors: {},
  suggestions: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Gerando..." : "Gerar Sugestões"}
    </Button>
  );
}

export function PersonalizedLearningForm() {
  const [state, formAction] = useFormState(handleGetSuggestions, initialState);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl md:text-3xl text-center">Teste a Nossa Inteligência Artificial</CardTitle>
          <CardDescription className="text-center">
            Receba sugestões de atividades personalizadas para seu filho(a).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="childName">Nome da Criança</Label>
            <Input id="childName" name="childName" placeholder="Ex: João" required />
            {state?.errors?.childName && (
              <p className="text-sm font-medium text-destructive">{state.errors.childName[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentProgress">Descreva o Progresso Atual</Label>
            <Textarea
              id="currentProgress"
              name="currentProgress"
              placeholder="Ex: Já conhece as vogais, mas tem dificuldade com as consoantes B e P."
              required
              rows={4}
            />
             {state?.errors?.currentProgress && (
              <p className="text-sm font-medium text-destructive">{state.errors.currentProgress[0]}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <SubmitButton />
        </CardFooter>
      </form>
      {state?.suggestions && state.suggestions.length > 0 && (
        <CardContent>
           <div className="mt-6 bg-secondary/50 p-4 rounded-lg">
            <h4 className="font-headline text-lg mb-2">Sugestões para você:</h4>
            <ul className="space-y-2 list-none">
              {state.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <Lightbulb className="h-5 w-5 mr-2 mt-1 text-primary flex-shrink-0" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
       {state?.message && !state.suggestions?.length && (
         <p className="text-sm text-center p-4 font-medium text-destructive">{state.message}</p>
       )}
    </Card>
  );
}
