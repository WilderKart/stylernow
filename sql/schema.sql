-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    barbershop_name TEXT NOT NULL,
    consent BOOLEAN NOT NULL DEFAULT FALSE
);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public lead form)
CREATE POLICY "Allow public insert" ON leads FOR INSERT WITH CHECK (true);

-- Deny all other operations by default
CREATE POLICY "Deny all others" ON leads FOR ALL USING (false);
