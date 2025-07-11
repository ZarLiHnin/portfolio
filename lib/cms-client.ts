// lib/cms-client.ts
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

console.log("✅ DOMAIN:", process.env.MICROCMS_SERVICE_DOMAIN);
console.log("✅ KEY:", process.env.MICROCMS_API_KEY);
