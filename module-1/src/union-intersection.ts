type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

enum Level { //enum is not recommended
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: "junior" | "mid" | "senior";
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Mojnu Mia",
  expertise: "javscript",
  experience: 1,
};

// const developer: NextDeveloper = {
//   name: "Next Bhai",
//   expertise: "Typescript",
//   experience: 3,
//   leadershipExperience: 7,
//   level: Level.junior,//eta enum type er jonno kora
// };
const developer: NextDeveloper = {
  name: "Next Bhai",
  expertise: "Typescript",
  experience: 3,
  leadershipExperience: 7,
  level: "mid",
};
