import { Category } from "./category";

export interface Post {
    id:          number;
    title:       string;
    body:        string;
    url_image:   string;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
    category:    Category;
}

export interface PostRequest {
    id?:          number;
    title:       string;
    body:        string;
    url_image:   string;
    category_id: number;
}

export interface PostResponse {
    id:          number;
    title:       string;
    body:        string;
    url_image:   string;
    category_id: number;
    created_at:  Date;
    updated_at:  Date;
}