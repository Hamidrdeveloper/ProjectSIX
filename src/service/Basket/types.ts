export interface Baskets {
  count: number;
  productVariationIds?: string;
}
export interface BasketAddForPay {
  delivery_contact_group_id: number;
  description: string;
  invoice_contact_group_id: number;
  payment_method_id: number;
  shipping_profile_id: number;
}
