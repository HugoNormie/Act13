import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://ultkcnizwluuxfjxjsxk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdGtjbml6d2x1dXhmanhqc3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTM2MjIsImV4cCI6MjAyODg2OTYyMn0.aQPg6L6IK5kZfxZcdSJKLwOlknoti04xTYdEch3eKQ4'

);

export default supabase;