// // src/types/Offer.ts
// export interface Offer {
//     id: number;
//     title: string;
//     slug: string;
//     product: {
//       id: number;
//       name: string;
//       price: number;
//       average_rating: number;
//       comments_count: number;
//       stock: number;
//       stock_percentage: number;
//       images: Array<{
//         file_path: string;
//       }>;
//     };

//     discount_type: 'percentage' | 'fixed_amount';
//     discount_value: number;
//     calculated_price: number;
//     promo_code?: string;
//     start_date: string;
//     end_date: string;
//     banner_image?: string;
//     background_gradient?: string;
//     text_color?: string;
//     is_featured: boolean;
//   }

// 

// src/types/offers.ts
export interface Offer {
    id: number;
    title: string;
    slug: string;
    description?: string;
    discount_type: 'percentage' | 'fixed_amount' | 'buy_x_get_y';
    discount_value: number;
    promo_code?: string;
    start_date: string;
    end_date: string;
    banner_image?: string;
    background_gradient?: string;
    text_color?: string;
    is_featured: boolean;
    is_active: boolean;
    status: 'draft' | 'active' | 'scheduled' | 'expired';
    created_at: string;
    updated_at: string;
    products: Product[];
    categories: Category[];
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image_url?: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface OfferCreatePayload {
    title: string;
    description?: string;
    discount_type: 'percentage' | 'fixed_amount';
    discount_value: number;
    promo_code?: string;
    start_date: string;
    end_date: string;
    product_ids: number[];
    category_ids?: number[];
    banner_image?: string;
    background_gradient?: string;
    text_color?: string;
    is_featured?: boolean;
  }
  
  export interface OfferUpdatePayload extends Partial<OfferCreatePayload> {
    id: number;
  }
  
  export interface OffersResponse {
    items: Offer[];
    total: number;
    page: number;
    page_size: number;
  }