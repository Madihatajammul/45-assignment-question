//They think of something you could store in a TypeScript Object.
 //Write a program that creates Objects containing these items.

//define an interface named `itCourse` for a book object
 interface itCourse{
//property for the name of the course
    courseName:string;
//property of the location of the course
    location: string;
//property for the number of onsite students
    onsiteStudents: number;
//property for the number of online students
    onlineStudents: number;
}
//define an object of type `itCourse` representing a course in IT
let itCourse: string [] = ["courseName","location","onsiteStudents","onlineStudents"];

//Course name
location : "Governor  Sindh House";
//location of the course
onsiteStudents : "50000";
//number of onsite students
onlineStudents : "500000";
//Output the `itCourse` object to the console
console.log(itCourse);

      
     


 