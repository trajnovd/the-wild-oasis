import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://yxbmtapruqopmffvuact.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4Ym10YXBydXFvcG1mZnZ1YWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NDIxOTMsImV4cCI6MjA0NDMxODE5M30.5hLVYTwlojZkmfZp-CCBLoXLiKx2wPBpTkpidTuM5hU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
