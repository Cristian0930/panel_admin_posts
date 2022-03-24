export interface Category {
    id:         number;
    name:       string;
    created_at: Date;
    updated_at: Date;
}

export interface CategoryRequest {
    id?: number;
    name:       string;
}