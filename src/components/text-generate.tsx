"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Google Workspace plans provide a custom professional email for your business and include collaboration tools like Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets and Slides. And now with Gemini for Workspace, you can boost your organisation's productivity with the power of generative AI.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
