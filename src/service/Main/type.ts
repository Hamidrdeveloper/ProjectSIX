export interface PaginationRequest {
    page?: number;
    search?: string;
    per_page?: number;
  }
  export interface VariationFiles {
    id: number;
    file_id: number;
    file: string;
    link: string;
    title: string;
    type: string;
  }