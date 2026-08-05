import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const portfolios = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/portfolios" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        category: z.string(),
        created_at: z.string().transform((str) => new Date(str)),
        image: image()
    }),
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        detail: z.string(),
        created_at: z.string().transform((str) => new Date(str)),
        image: image()
    }),
});

const blogs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
    schema: ({ image }) => z.object({
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
