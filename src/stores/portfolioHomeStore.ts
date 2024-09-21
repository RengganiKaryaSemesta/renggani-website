import { atom } from 'nanostores';

export const categoryActived = atom('Terbaru');
export const setCategoryActived = (category: string) => {
    categoryActived.set(category);
}