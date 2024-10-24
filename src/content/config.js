import { z, defineCollection, reference } from "astro:content";

const bookCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    cover: z.string(),
    buyurl: z.object({
      buscalibre: z.string(),
      amazon: z.string(),
    }),
  }),
});

const personalityCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    photo: z.string(),
    recommendedBooks: z.array(
      z.object({
        bookName: z.string(reference("books")),
        reason: z.string(),
      }),
    ),
  }),
});

export const collections = {
  books: bookCollection,
  personalities: personalityCollection,
};
