DROP DATABASE IF EXISTS chooseado;

CREATE DATABASE chooseado;

USE chooseado;

CREATE TABLE stylists(
  id INT PRIMARY KEY AUTO_INCREMENT,
  profile_image TEXT,
  stylist_name VARCHAR(30),
  stylist_description VARCHAR(255),
  specialty1 VARCHAR(10),
  specialty2 VARCHAR(10),
  specialty3 VARCHAR(10),
  specialty4 VARCHAR(10)
);

INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber1.jpeg", "Bob Walker", "I am a very good barber with experience giving fades.", "fade", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber2.jpeg", "Johnny Dream", "I am a very good barber with experience giving crewcuts.", "crew-cut", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber3.jpeg", "Steve Rose", "I am a very good barber with experience giving comb-overs.", "comb-over", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber4.jpeg", "Duane Royal", "I am a very good barber with experience giving slick-backs.", "slick-back", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon1.jpeg", "Melissa Rogers", "I am a very good hairdresser with experience giving bob cuts.", "bob", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon2.jpeg", "Denise Tipton", "I am a very good hairdresser with experience giving layered cuts.", "layered", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon3.jpeg", "Sally Lake", "I am a very good hairdresser with experience giving pixie cuts.", "pixie", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/stylist4.jpeg", "Naomi Bulb", "I am a very good hairdresser with experience giving extensions.", "extensions", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber2.jpeg", "Roger Moore", "I am a very good barber with experience giving fades", "fade", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber3.jpeg", "Bob Lamar", "I am a very good barber with experience giving crewcuts.", "crew-cut", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber4.jpeg", "Victor Roberts", "I am a very good barber with experience giving comb-overs.", "comb-over", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber1.jpeg", "Markie J", "I am a very good barber with experience giving slick-backs.", "slick-back", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon2.jpeg", "Jane Berger", "I am a very good hairdresser with experience giving bob cuts.", "bob", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon3.jpeg", "Barbera Allen", "I am a very good hairdresser with experience giving layered cuts.", "layered", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/stylist4.jpeg", "Danielle Ma", "I am a very good hairdresser with experience giving pixie cuts.", "pixie", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon1.jpeg", "Jane Foster", "I am a very good hairdresser with experience giving extensions.", "extensions", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber3.jpeg", "Nick Happy", "I am a very good barber with experience giving fades", "fade", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber4.jpeg", "David Dream", "I am a very good barber with experience giving crewcuts.", "crew-cut", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber1.jpeg", "Michael Phelps", "I am a very good barber with experience giving comb-overs.", "comb-over", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber2.jpeg", "Mark Myers", "I am a very good barber with experience giving slick-backs.", "slick-back", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon3.jpeg", "Alexa Garcia", "I am a very good hairdresser with experience giving bob cuts.", "bob", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/stylist4.jpeg", "Kimberly Kost", "I am a very good hairdresser with experience giving layered cuts.", "layered", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon1.jpeg", "Martha Co", "I am a very good hairdresser with experience giving pixie cuts.", "pixie", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon3.jpeg", "Jean Gray", "I am a very good hairdresser with experience giving extensions.", "extensions", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber4.jpeg", "Wayne Bath", "I am a very good barber with experience giving fades", "fade", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber1.jpeg", "Willie Parker", "I am a very good barber with experience giving crewcuts.", "crew-cut", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber2.jpeg", "Ryan Hugo", "I am a very good barber with experience giving comb-overs.", "comb-over", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/barber3.jpeg", "Sean 5hour", "I am a very good barber with experience giving slick-backs.", "slick-back", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/stylist4.jpeg", "Alison Bree", "I am a very good hairdresser with experience giving bob cuts.", "bob", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon1.jpeg", "Brenda Gardner", "I am a very good hairdresser with experience giving layered cuts.", "layered", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon2.jpeg", "Juliana McCraw", "I am a very good hairdresser with experience giving pixie cuts.", "pixie", "", "", "");
INSERT INTO chooseado.stylists (profile_image, stylist_name, stylist_description, specialty1, specialty2, specialty3, specialty4) VALUES ("/images/salon3.jpeg", "Anita Lingrel", "I am a very good hairdresser with experience giving extensions.", "extensions", "", "", "");