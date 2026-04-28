/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare const Astro: Readonly<import("astro").AstroGlobal>;

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface ImportMetaEnv {
    readonly BASE_NAME: string;
    readonly PUBLIC_SUPABASE_URL: string;
    readonly PUBLIC_SUPABASE_ANON_KEY: string;
    readonly STRIPE_SECRET_KEY: string;
    readonly PUBLIC_CURRENCY: string;
  }
}

declare module "react-router-dom" {
  export interface IndexRouteObject {
    routeMetadata?: Record<string, unknown>;
  }
  export interface NonIndexRouteObject {
    routeMetadata?: Record<string, unknown>;
  }
}
