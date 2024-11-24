/* JSON to TypeScript https?://quicktype.io/typescript */

/* Formats */

export type SuccessResponse = {
  success?: boolean;
  message?: string;
  data?: unknown | unknown[] | null;
};

export type ErrorResponse = {
  success?: boolean;
  message?: string;
  error?: unknown | unknown[] | null;
};

export type ApiResponse = SuccessResponse | ErrorResponse;

export type PaginatorLink = {
    url?:    null | string;
    label?:  string;
    active?: boolean;
}

export type Paginator = {
    current_page?:   number;
    data?:           unknown[];
    first_page_url?: string;
    from?:           number | null;
    last_page?:      number;
    last_page_url?:  string;
    links?:          PaginatorLink[];
    next_page_url?:  string | null;
    path?:           string;
    per_page?:       number;
    prev_page_url?:  string | null;
    to?:             number | null;
    total?:          number;
}

/* Models */

export type User = {
  id?: number;
  name?: string;
  email?: string;
  email_verified_at?: Date | null;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
};

export type BarterCategory = {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type BarterService = {
  id?: number;
  barter_provider_id?: number;
  barter_category_id?: number;
  title?: string;
  description?: string;
  price?: string;
  rating?: number;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  barter_provider?: User | null;
  barter_category?: BarterCategory | null;
  pivot?: BarterServicePivot | null;
};

export type BarterTransaction = {
  id?: number;
  barter_acquirer_id?: number;
  barter_provider_id?: number;
  barter_service_id?: number;
  amount?: number;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  barter_acquirer?: User | null;
  barter_provider?: User | null;
  barter_service?: BarterService | null;
};

export type BarterInvoice = {
  id?: number;
  barter_acquirer_id?: number;
  barter_transaction_id?: number;
  amount?: number;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  barter_transaction?: BarterTransaction | null;
  barter_services?: BarterService[] | null;
};

export type BarterReview = {
  id?: number;
  author_id?: number;
  barter_service_id?: number;
  barter_transaction_id?: number;
  description?: string;
  rating?: number;
  created_at?: Date;
  updated_at?: Date;
  barter_service?: BarterService | null;
  barter_transaction?: BarterTransaction | null;
};

/* Pivots */

export type BarterInvoiceBarterService = {
  barter_invoice_id?: number;
  barter_service_id?: number;
};

export type BarterServicePivot = BarterInvoiceBarterService;
