// !! Nested Object Example
const college = {
  name: "Tech University",
  location: "New York",
  established: 1990,
  class: ["11th Grade", "12th Grade"],
  events: ["Tech Fest", "Science Fair"],
  departments: {
    name: "Computer Science",
    head: "Dr. Smith",
    courses: {
      course1: {
        title: "Introduction to Programming",
        duration: "3 months",
        level: "Beginner",
      },
      course2: {
        title: "Data Structures and Algorithms",
        duration: "4 months",
        level: "Intermediate",
      },
      course3: {
        title: "Web Development",
        duration: "5 months",
        level: "Advanced",
      },
    },
  },
};

// ** Accessing Nested Object Properties with Dot Notation
// console.log(college.departments.courses.course1.duration);

// ** Accessing Nested Object Properties with Bracket Notation
// console.log(college["departments"]["courses"]["course2"]["title"]);

// ** Modifying Nested Object Properties with Dot Notation
college.departments.courses.course3.level = "Expert";
// console.log(college.departments.courses.course3.level);

// ** Modifying Nested Object Properties with Bracket Notation
college["departments"]["courses"]["course1"]["duration"] = "4 months";
// console.log(college["departments"]["courses"]["course1"]["duration"]);

// ** Modifying Nested Object Properties with Bracket Notation with Variable
let courseKey = college["departments"]["courses"]["course1"]["duration"];

courseKey = "6 months";
console.log(courseKey);
