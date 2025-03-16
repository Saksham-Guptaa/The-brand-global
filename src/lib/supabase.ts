import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xjssofovnjvtmzvbivdi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqc3NvZm92bmp2dG16dmJpdmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMjUzODEsImV4cCI6MjA1NDYwMTM4MX0.3lswQTEy7_ARwQxS_mPcH_fQSgtVbvM7gbnzA-57SVE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
