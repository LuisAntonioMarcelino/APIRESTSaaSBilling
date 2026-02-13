import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const url = process.env.URL_API_SAPABASE;
const key_publi = process.env.PUBLISHABLE_KEY;

export function createClienteSupabase(req) {
  const auth = req.headers.authorization;
  if (!auth) {
    return new Error("Sem token de acesso!");
  }
  return createClient(url, key_publi, {
    headers: { global: { Authorization: auth } },
  });
}
