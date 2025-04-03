import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqfpynivonlrtbrhhqyq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZnB5bml2b25scnRicmhocXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTM3ODYsImV4cCI6MjA1OTI2OTc4Nn0.T4N1zImLXLBJq95_NY-FcchDuwzPe5T9bXKYZ76s-qs'

// Create the Supabase client with error handling
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Test the connection
supabase.auth.getSession()
  .then(({ data: { session } }) => {
    console.log('Supabase connection successful:', session ? 'User logged in' : 'No active session')
  })
  .catch(error => {
    console.error('Supabase connection error:', error.message)
  }) 