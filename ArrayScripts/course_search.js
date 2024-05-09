"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?
// What is the title of the PROJ500 course?
// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?

function getCourse(checkCourseId, checkTitle) {
  let matching = [];
  let numItems = courses.length;
  for (let i = 0; i < numItems; i++) {
    if (courses[i].CourseId == checkCourseId) {
      matching.push(courses[i].StartDate);
    }
    if (courses[i].CourseId == checkTitle) {
      matching.push(courses[i].Title);
    }
  }
  return matching;
}

function getCostFee(checkForFee) {
  let matching = [];
  let courseFee = Number(checkForFee);
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].Fee <= courseFee) {
      matching.push(courses[i].Title);
    }
  }
  return matching;
}

function getClassroomNum(checkClass) {
  let matching = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].Location == checkClass) {
      matching.push(courses[i].Title);
    }
  }
  return matching;
}

console.log(getCourse("PROG200", "PROJ500") + "\n" + getCostFee("50.00"));
console.log(getClassroomNum("Classroom 1"));
