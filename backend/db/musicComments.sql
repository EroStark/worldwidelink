DROP DATABASE IF EXISTS worldwidelink;
CREATE DATABASE worldwidelink;

\c worldwidelink;

CREATE TABLE allComments (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  comment VARCHAR,
  history VARCHAR 
);

INSERT INTO allComments (username , comment, history)
  VALUES ('Ero GTS','This is the WorldWide LinkUp. Say something to the people!', 'Infinity')