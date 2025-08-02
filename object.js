// !! Declaration of JavaScript Object

const subject = {
  name: "JavaScript",
  duration: "3 months",
  level: "Intermediate",
  instructor: "John Doe",
  examDate: "30 August",
  isFree: true,
  topics: ["Variables", "Functions", "Objects", "Arrays"],
};

// ** Dot Notation
// console.log(subject.name);

const duration = subject.duration;
// console.log(duration);

// **Bracket Notation
// console.log(subject["level"]);

const instructor = subject["instructor"];
// console.log(instructor);

// ** Modifying Object Properties
subject.duration = "4 months"; // Dot notation
// console.log(subject.duration);
subject["examDate"] = "15 September"; // Bracket notation
// console.log(subject);

// console.log(subject);

const propName = "name";
// console.log(subject[propName]); // Accessing property using a variable

// ** Modifying Object Properties using a variable
subject[propName] = "Advanced JavaScript"; // Modifying property using a variable
console.log(subject[propName]);
