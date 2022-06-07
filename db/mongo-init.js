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
    _id: "carlos_sainz",
    name: "Carlos Sainz",
    birth: 1994,
    country: "Spain",
  },
  {
    _id: "charles_leclerc",
    name: "Charles Leclerc",
    birth: 1997,
    country: "Monaco",
  },
  {
    _id: "lewis_hamilton",
    name: "Lewis Hamilton",
    birth: 1985,
    country: "UK",
  },
  {
    _id: "george_russell",
    name: "George Russell",
    birth: 1998,
    country: "UK",
  },
]);

db.teams.insert([
  {
    _id: "ferrari",
    name: "Ferrari",
    foundation: 1929,
    races: 1032,
    current_drivers: ["carlos_sainz", "charles_leclerc"],
  },
  {
    _id: "mercedes",
    name: "Mercedes",
    foundation: 1954,
    races: 248,
    current_drivers: ["lewis_hamilton", "george_russell"],
  },
]);
