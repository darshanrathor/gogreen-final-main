
import { createClient } from "@supabase/supabase-js";

// retrieving environment variables
const supabaseUrl = "https://akblsrgwrgpiowzqztyj.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYmxzcmd3cmdwaW93enF6dHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM4NDAyOTAsImV4cCI6MTk2OTQxNjI5MH0.4GYOFzWPusy-BTktlqINpirYl1BeyjjfXmHqA0jFsZg"
const options = {
  schema: "public",
  headers: { "x-my-custom-header": "gogreenganesha" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};
export const supabase = createClient(supabaseUrl, supabaseKey, options);
