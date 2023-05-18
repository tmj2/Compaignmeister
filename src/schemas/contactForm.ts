import {z} from "zod";

export const contactFormSchema = z.object({
    email: z
        .string({
            invalid_type_error: "Email must be of type string.",
            required_error: "Email is required."
        })
        .email("Invalid email address.")
        .nonempty("Email field cannot be empty."),
    agreeToTOS: z.boolean().refine(value => value, "You must agree to the Terms of Service."),
    newsletter: z.boolean().optional()
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
