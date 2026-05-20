import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ikzvsdrssbebnugeqvtt.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrenZzZHJzc2JlYm51Z2VxdnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMzM5OTYsImV4cCI6MjA5NDgwOTk5Nn0.GKnt7lMy67pvQdpvD7s_zjQgJX3Ia-AdDL3XHLruDzY'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
)