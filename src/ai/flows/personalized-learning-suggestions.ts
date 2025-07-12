// src/ai/flows/personalized-learning-suggestions.ts
'use server';

/**
 * @fileOverview Provides personalized learning suggestions based on a child's progress.
 *
 * - getPersonalizedSuggestions - A function that generates personalized learning suggestions.
 * - PersonalizedSuggestionsInput - The input type for the getPersonalizedSuggestions function.
 * - PersonalizedSuggestionsOutput - The return type for the getPersonalizedSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSuggestionsInputSchema = z.object({
  childName: z.string().describe('The name of the child.'),
  currentProgress: z
    .string()
    .describe(
      'Description of the child\'s current learning progress and areas of difficulty.'
    ),
  preferredLearningStyle: z
    .string()
    .optional()
    .describe(
      'Optional description of the child\'s preferred learning style (e.g., visual, auditory, kinesthetic).'
    ),
});

export type PersonalizedSuggestionsInput = z.infer<
  typeof PersonalizedSuggestionsInputSchema
>;

const PersonalizedSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of personalized learning suggestions tailored to the child\'s progress and learning style.'
    ),
});

export type PersonalizedSuggestionsOutput = z.infer<
  typeof PersonalizedSuggestionsOutputSchema
>;

export async function getPersonalizedSuggestions(
  input: PersonalizedSuggestionsInput
): Promise<PersonalizedSuggestionsOutput> {
  return personalizedSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSuggestionsPrompt',
  input: {schema: PersonalizedSuggestionsInputSchema},
  output: {schema: PersonalizedSuggestionsOutputSchema},
  prompt: `Based on the child's current progress and preferred learning style, provide personalized learning suggestions.

Child's Name: {{{childName}}}
Current Progress: {{{currentProgress}}}
Preferred Learning Style: {{{preferredLearningStyle}}}

Suggestions:`,
});

const personalizedSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedSuggestionsFlow',
    inputSchema: PersonalizedSuggestionsInputSchema,
    outputSchema: PersonalizedSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

