export interface User {
  id: number;
  avatar?: any;
  username: string;
  email: string;
  discount_ratio: number;
  payment_method_id?: any;
  is_vat_valid?: any;
  communication_by_letter: boolean;
  vat_number?: any;
  tax_number?: any;
  credit_limit?: any;
  eori_number?: any;
  use_gln_indocuments?: any;
  default_shipping_method_id?: any;
  default_payment_terms_id?: any;
  file_id?: any;
  point?: any;
  is_active: boolean;
  _data?: any;
  birth_date: string;
  created_at: string;
  updated_at: string;
  invoice_contact_group_id: number;
  person: Person;
  roles: Role[];
  userType?: any;
}

export interface Role {
  id: number;
  title: string;
  company_visibility: boolean;
  owner_visibility: boolean;
  slug: string;
}

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  company_name?: any;
  created_by?: any;
}
export interface UserProfile {
  email: string;
  birth_date?: string;
  people: {
    first_name: string;
    last_name: string;
  };
}
