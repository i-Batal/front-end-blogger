import { Category } from "./category";

export interface Post {
    id: string;
    title: string;
    content: string;
    createdDate: Date;
    category: Category;
}

export type PostCreateInput = Omit<Post, "id" | "createdDate" | "category"  > & {
    categoryId: string
}