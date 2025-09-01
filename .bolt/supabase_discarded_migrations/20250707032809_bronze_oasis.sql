/*
  # Disable Email Confirmation

  1. Configuration Changes
    - Disable email confirmation requirement
    - Allow users to sign in immediately after registration
    - Update auth settings for immediate access

  2. Security
    - Users can login immediately without email verification
    - Maintains all other security features
*/

-- Update auth configuration to disable email confirmation
UPDATE auth.config 
SET 
  enable_signup = true,
  enable_email_confirmations = false
WHERE true;

-- If the above doesn't work, we'll need to configure this in the Supabase dashboard
-- Go to Authentication > Settings > Email Auth and disable "Enable email confirmations"