export interface PartnerId {
  id: number;
  user_id: number;
  left_tree: number;
  right_tree: number;
  mobile?: any;
  bank_name: string;
  iban: string;
  default_warranty_days: number;
  swift: string;
  receive_vat_responsible: boolean;
  send_vat_responsible: boolean;
  active_auto_bonus: boolean;
  active_training_bonus: boolean;
  post_delivery_factor: boolean;
  receive_commission: boolean;
  can_buy: boolean;
  transportation_ratio_percentage: number;
  over_personal_turnover: boolean;
  can_see_down_line: boolean;
  inhouse_sale: boolean;
  has_network: boolean;
  has_btob: boolean;
  has_btoc: boolean;
  has_warehouse: boolean;
  has_delivery: boolean;
  warranty_days: number;
  max_client_root: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_approved: boolean;
  country_id: number;
  data?: any;
  user: User;
  coach: User;
  backIdentityCard: BackIdentityCard;
  frontIdentityCard: BackIdentityCard;
  businessCertification: BackIdentityCard;
}

export interface BackIdentityCard {
  id: number;
  extension: string;
  enabled: boolean;
  name: string;
  type: string;
  root_file: Rootfile;
  created_at: string;
  updated_at: string;
}

export interface Rootfile {
  id: number;
  path: string;
  size: number;
  mime_type: string;
}

export interface User {
  id: number;
  avatar?: any;
  username: string;
  email: string;
  discount_ratio: number;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
  exportColumns: string[];
  filters: Filters;
  orderByColumns: string[];
}

export interface Filters {
  ids: string;
  mobile: string;
  coachId: string;
  userId: string;
  hasNetwork: string;
  hasBtob: string;
  hasBtoc: string;
  hasWarehouse: string;
  hasDelivery: string;
  warrantyDays: string;
  maxClientRoot: string;
  isActive: string;
  isApproved: string;
  fullName: string;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface Links {
  first: string;
  last: string;
  prev?: any;
  next?: any;
}

export interface Partners {
  id: number;
  user_id: number;
  left_tree: number;
  right_tree: number;
  mobile?: any;
  bank_name: string;
  iban?: string;
  default_warranty_days: number;
  swift?: string;
  receive_vat_responsible: boolean;
  send_vat_responsible: boolean;
  active_auto_bonus: boolean;
  active_training_bonus: boolean;
  post_delivery_factor: boolean;
  receive_commission: boolean;
  can_buy: boolean;
  transportation_ratio_percentage: number;
  over_personal_turnover: boolean;
  can_see_down_line: boolean;
  inhouse_sale: boolean;
  has_network: boolean;
  has_btob: boolean;
  has_btoc: boolean;
  has_warehouse: boolean;
  has_delivery: boolean;
  warranty_days: number;
  max_client_root?: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_approved: boolean;
  country_id: number;
  data?: Datum;
  user: User;
  coach?: Coach;
  backIdentityCard: BackIdentityCard;
  frontIdentityCard: BackIdentityCard;
  businessCertification?: BackIdentityCard;
}

export interface BackIdentityCard {
  id: number;
  extension: string;
  enabled: boolean;
  name: string;
  type: string;
  root_file: Rootfile;
  created_at: string;
  updated_at: string;
}

export interface Rootfile {
  id: number;
  path: string;
  size: number;
  mime_type: string;
}

export interface Coach {
  id: number;
  avatar?: any;
  username: string;
  email: string;
  discount_ratio: number;
}

export interface User {
  id: number;
  avatar?: any;
  username: string;
  email: string;
  discount_ratio: number;
  payment_method_id?: any;
  is_vat_valid?: any;
  communication_by_letter?: boolean;
  vat_number?: any;
  tax_number?: any;
  credit_limit?: any;
  eori_number?: any;
  use_gln_indocuments?: any;
  default_shipping_method_id?: any;
  default_payment_terms_id?: any;
  file_id?: any;
  point?: any;
  is_active?: boolean;
  _data?: any;
  birth_date?: string;
  created_at?: string;
  updated_at?: string;
  invoice_contact_group_id?: any;
  person?: Person;
  roles?: Role[];
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

export interface Datum {
  upline: number[];
}
