import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "schemas";
import { ApiResponseBase } from "types";
import { z, ZodError } from "zod";

export interface HelloRequest extends NextApiRequest {
  body: z.infer<typeof contactFormSchema>;
}

export interface HelloResponse {
  message: `Hello ${string}!`;
}

const handler = nc<HelloRequest, NextApiResponse<ApiResponseBase<HelloResponse>>>({
  onError: (err, req, res, next) => {
    console.log(err.message);

    res
      .status(err.statusCode || 500)
      .json({ error: err instanceof ZodError ? err.issues : err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  }
}).post(async (req, res) => {
  contactFormSchema.parse(req.body);

  const { email } = req.body;

  return res.status(200).json({ message: `Hello ${email}!` });
});

export default handler;
