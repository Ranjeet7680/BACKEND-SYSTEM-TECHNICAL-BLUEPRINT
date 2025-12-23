CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  role TEXT,
  counter_id UUID
);

CREATE TABLE tokens (
  id UUID PRIMARY KEY,
  token_number INT,
  status TEXT,
  counter_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);
