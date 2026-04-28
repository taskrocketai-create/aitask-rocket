/** Generic Supabase data item – every row has at minimum an id field */
export type SupabaseDataItem = {
  id?: string;
  [key: string]: unknown;
};

/** Alias kept for backward-compatibility with code that used WixDataItem */
export type WixDataItem = SupabaseDataItem;

/** Shape of a Supabase paginated query result (mirroring the old WixDataQueryResult shape) */
export type WixDataQueryResult = {
  data: SupabaseDataItem[] | null;
  count: number | null;
  error: unknown;
};
