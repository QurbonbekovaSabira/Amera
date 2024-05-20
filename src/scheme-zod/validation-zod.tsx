import { z } from "zod";
export const validationCheckout = z.object({
  firstName: z.string().min(2, { message: "Less than 2 letterss" }),
  lastName: z.string().min(2, { message: "Less than 2 letters" }),
  location: z.string().min(5, { message: "min 5" }),
  phone: z.string().min(8, { message: "raqam notog'ri" }),
});

export type validationCheckoutType = z.infer<typeof validationCheckout>;
