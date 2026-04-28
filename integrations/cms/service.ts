import { supabase } from '../supabase';
import { SupabaseDataItem } from '.';

/**
 * Pagination options for querying collections
 */
export interface PaginationOptions {
  /** Number of items per page (default: 50, max: 1000) */
  limit?: number;
  /** Number of items to skip (for offset-based pagination) */
  skip?: number;
}

/**
 * Paginated result with metadata for infinite scroll
 */
export interface PaginatedResult<T> {
  /** Array of items for current page */
  items: T[];
  /** Total number of items in the collection */
  totalCount: number;
  /** Whether there are more items after current page */
  hasNext: boolean;
  /** Current page number (0-indexed) */
  currentPage: number;
  /** Number of items per page */
  pageSize: number;
  /** Offset to use for next page */
  nextSkip: number | null;
}

/**
 * Generic CRUD Service class for Supabase tables.
 * The `collectionId` maps to a Supabase table name.
 */
export class BaseCrudService {
  /**
   * Creates a new row in the table
   */
  static async create<T extends SupabaseDataItem>(
    collectionId: string,
    itemData: Partial<T> | Record<string, unknown>
  ): Promise<T> {
    const { data, error } = await supabase
      .from(collectionId)
      .insert(itemData)
      .select()
      .single();

    if (error) {
      console.error(`Error creating ${collectionId}:`, error);
      throw new Error(error.message ?? `Failed to create ${collectionId}`);
    }
    return data as T;
  }

  /**
   * Retrieves rows from the table with pagination (default: 50 per page)
   */
  static async getAll<T extends SupabaseDataItem>(
    collectionId: string,
    _includeRefs?: unknown,
    pagination?: PaginationOptions
  ): Promise<PaginatedResult<T>> {
    const limit = Math.min(pagination?.limit ?? 50, 1000);
    const skip = pagination?.skip ?? 0;

    const { data, error, count } = await supabase
      .from(collectionId)
      .select('*', { count: 'exact' })
      .range(skip, skip + limit - 1);

    if (error) {
      console.error(`Error fetching ${collectionId}s:`, error);
      throw new Error(error.message ?? `Failed to fetch ${collectionId}s`);
    }

    const total = count ?? (data?.length ?? 0);
    const hasNext = skip + limit < total;

    return {
      items: (data ?? []) as T[],
      totalCount: total,
      hasNext,
      currentPage: Math.floor(skip / limit),
      pageSize: limit,
      nextSkip: hasNext ? skip + limit : null,
    };
  }

  /**
   * Retrieves a single row by ID
   */
  static async getById<T extends SupabaseDataItem>(
    collectionId: string,
    itemId: string
  ): Promise<T | null> {
    const { data, error } = await supabase
      .from(collectionId)
      .select('*')
      .eq('id', itemId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // row not found
      console.error(`Error fetching ${collectionId} by ID:`, error);
      throw new Error(error.message ?? `Failed to fetch ${collectionId}`);
    }
    return data as T | null;
  }

  /**
   * Updates an existing row
   */
  static async update<T extends SupabaseDataItem>(collectionId: string, itemData: T): Promise<T> {
    if (!itemData.id) {
      throw new Error(`${collectionId} ID is required for update`);
    }

    const { data, error } = await supabase
      .from(collectionId)
      .update(itemData)
      .eq('id', itemData.id)
      .select()
      .single();

    if (error) {
      console.error(`Error updating ${collectionId}:`, error);
      throw new Error(error.message ?? `Failed to update ${collectionId}`);
    }
    return data as T;
  }

  /**
   * Deletes a row by ID
   */
  static async delete<T extends SupabaseDataItem>(collectionId: string, itemId: string): Promise<T> {
    if (!itemId) {
      throw new Error(`${collectionId} ID is required for deletion`);
    }

    const { data, error } = await supabase
      .from(collectionId)
      .delete()
      .eq('id', itemId)
      .select()
      .single();

    if (error) {
      console.error(`Error deleting ${collectionId}:`, error);
      throw new Error(error.message ?? `Failed to delete ${collectionId}`);
    }
    return data as T;
  }
}

