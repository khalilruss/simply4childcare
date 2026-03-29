/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_JS_API_KEY?: string;
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
