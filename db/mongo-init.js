db.createUser({
  user: "root",
  pwd: "toor",
  roles: [
    {
      role: "readWrite",
      db: "testDB",
    },
  ],
});

db = new Mongo().getDB("f1");

db.createCollection("drivers", { capped: false });
db.createCollection("teams", { capped: false });

db.drivers.insert([
  {
    name: "Carlos Sainz",
    birth: 1994,
    country: "Spain",
  },
  {
    name: "Charles Leclerc",
    birth: 1997,
    country: "Monaco",
  },
  {
    name: "Lewis Hamilton",
    birth: 1985,
    country: "UK",
  },
  {
    name: "George Russell",
    birth: 1998,
    country: "UK",
  },
]);

db.teams.insert([
  {
   
    name: "Ferrari",
    foundation: 1929,
    races: 1032,
    current_drivers: ["Carlos Sainz", "Charles Leclerc"],
  },
  {
   
    name: "Mercedes",
    foundation: 1954,
    races: 248,
    current_drivers: ["Lewis Hamilton", "George Russell"],
  },
]);
