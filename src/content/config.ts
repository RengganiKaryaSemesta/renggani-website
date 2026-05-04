import { defineCollection,z } from "astro:content";

const portfolios = defineCollection({
    type: 'content',
    schema:  ({ image }) => z.object({
        title: z.string(),
        category: z.string(),
        created_at: z.string().transform((str) => new Date(str)),
        image: image()
    }),
});
const services = defineCollection({
    type: 'content',
    schema:  ({ image }) => z.object({
        title: z.string(),
        detail: z.string(),
        created_at: z.string().transform((str) => new Date(str)),
        image: image()
    }),
});

const blogs = defineCollection({
    type: 'content',
    schema:  ({ image }) => z.object({
        title: z.string(),
        category: z.string(),
        author: z.string(),
        reviewer: z.string().optional(),
        banner: image(),
        created_at: z.string().transform((str) => new Date(str)),
        description: z.string().optional(),
    }),
});

export const collections = {
    portfolios,
    services,
    blogs
};