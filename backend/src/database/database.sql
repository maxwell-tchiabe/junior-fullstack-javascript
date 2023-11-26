CREATE TABLE citiesTable(
  cityId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  cityName TEXT NOT NULL,
  cityCount INTEGER NOT NULL
  
);