// Simple script to help set up the Supabase database
// Run this after setting up your Supabase project

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://brdnpwvquamjwkpiczpb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZG5wd3ZxdWFtandrcGljenBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MjIyMDIsImV4cCI6MjA4MTA5ODIwMn0.eNItBHDoPRDzZHnnSOK1CrHKmCQmvGGhB4b2ICFSfik'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    const { data, error } = await supabase.from('github_users').select('count').single()
    
    if (error && error.code === 'PGRST116') {
      console.log('✅ Supabase connected! Tables need to be created.')
      console.log('📝 Please run the SQL from supabase-schema.sql in your Supabase SQL Editor')
    } else if (error) {
      console.log('❌ Error connecting to Supabase:', error.message)
    } else {
      console.log('✅ Supabase connected and tables exist!')
    }
  } catch (err) {
    console.log('❌ Connection failed:', err.message)
  }
}

testConnection()