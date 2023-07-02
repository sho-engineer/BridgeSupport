CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(255),
    languages VARCHAR(255),
    team_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (team_id) REFERENCES teams (id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
