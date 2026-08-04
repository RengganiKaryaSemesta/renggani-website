import { sanityClient } from "sanity:client";
import { defineQuery } from "groq";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    "author": author->{ name, image },
    "categories": categories[]->{ title, slug }
  }`
);

export async function getPosts() {
  return await sanityClient.fetch(POSTS_QUERY);
}

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body,
    "author": author->{ name, image, bio },
    "categories": categories[]->{ title, slug }
  }`
);

export async function getPost(slug: string) {
  return await sanityClient.fetch(POST_QUERY, { slug });
}
