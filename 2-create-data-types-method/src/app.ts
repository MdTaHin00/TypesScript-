

//! data types module
type Student = {
    name: String,
    age: number,
    isEnrolled: boolean,
    courses: string[],
    scores: number[],
    //* info ar -> first value string hova
    //* second value number hova
    //* third value boolean hova 
    info: [string, number, boolean]
}


//! create students data
//* Student -> operal Student type moton data value hova
const student1: Student = {
    name: "Jihad",
    age: 21,
    isEnrolled: false,
    courses: ['javascript', 'redux', 'typeScript'],
    scores: [34, 55, 40, 60],
    info: ['jihad', 21, false]
}

const student2: Student = {
    name: "tahin",
    age: 20,
    isEnrolled: true,
    courses: ['javascript', 'redux', 'typeScript'],
    scores: [34, 85, 40, 20],
    info: ['tahin', 23, true]
}

//* : Student -> kon types method kas korva tar name
//*  void -> return value asva na tai void
function displayStudentData(student:Student): void{
   console.log(`Name: ${student.name}`);
   console.log(`Name: ${student.age}`);
   console.log(`Name: ${student.isEnrolled}`);
   console.log(`Name: ${student.courses.join(" , ")}`);
   console.log(`Name: ${student.scores.join(" , ")}`);
}

displayStudentData(student2)
displayStudentData(student1)