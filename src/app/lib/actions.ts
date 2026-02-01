"use server";

import { z } from "zod";

const rsvpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function handleRsvp(formData: { name: string; email: string }) {
  const validatedFields = rsvpSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would save this data to a database.
  // For this example, we'll just log it.
  console.log("New RSVP received:", validatedFields.data);

  return { success: true };
}
