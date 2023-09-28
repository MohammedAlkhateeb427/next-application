import { z } from 'zod';

export const schema = z.object({
  paymentOption: z.boolean(),
  cardNumber: z
    .string()
    .refine(
      (value) => /^\d{16}$/.test(value),
      'Invalid card number. It should be 16 digits.'
    )
    .optional(),
  cardName: z.string().min(2, 'Cardholder name must be at least 2 characters'),
  cardExpiry: z
    .string()
    .refine(
      (value) => /^\d{2}\/\d{2}$/.test(value),
      'Invalid expiry date. Use MM/YY format.'
    )
    .optional(),
  cardCVC: z
    .string()
    .refine(
      (value) => /^\d{3,4}$/.test(value),
      'Invalid CVC. It should be 3 or 4 digits.'
    )
    .optional(),
});
