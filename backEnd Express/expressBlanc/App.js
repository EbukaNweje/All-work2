// const express = require("express")
// const port = 9090;

// const app = express();

// // methods required
// //GET
// //POST
// //PUT/ PATCH
// //DELETE
    
// // Create out first dafault request

// // app.get("/", (req, res) => {
// //     // res.send("Newly created api");

// //     res.json({
// //         "name": "Ebuka",
// //         age: 64,
// //         alive: true, 
// //         course:[
// //             "node",
// //             "React",
// //             "Python",
// //             "Javascript",
// //             "Css",
// //             "Html",
// //             "UI/UX"
// //         ],

// //         grade: [{node: 25, React: 15, Python: 30, JavaScript: 45}],
// //     });

// // });
// // app.get("/", (req, res) => {

// // })

// // app.listen(port, () => {
// //     console.log(`Server is now listining port ${port}`)
// // });


// const express = require("express");
// const port = 2021;

// const app = express();

// // declaring a dummy data
// const studentInfo = [
//   {
//     id: 1,
//     name: "Miracle",
//     course: "Frontend",
//     grade: [
//       {
//         NodeJs: 55,
//         Python: 80,
//         ReactJs: 45,
//         JavaScript: 60,
//         CSS: 12,
//         HTML: 89,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Colin",
//     course: "FullStack",
//     grade: [
//       {
//         NodeJs: 90,
//         Python: 80,
//         ReactJs: 80,
//         JavaScript: 80,
//         CSS: 75,
//         HTML: 90,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Joe",
//     course: "FullStack",
//     grade: [
//       {
//         NodeJs: 90,
//         Python: 80,
//         ReactJs: 85,
//         JavaScript: 80,
//         CSS: 80,
//         HTML: 50,
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Martin",
//     course: "FullStack",
//     grade: [
//       {
//         NodeJs: 80,
//         Python: 90,
//         ReactJs: 80,
//         JavaScript: 80,
//         CSS: 75,
//         HTML: 80,
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Ebuka",
//     course: "Frontend",
//     grade: [
//       {
//         NodeJs: 70,
//         Python: 90,
//         ReactJs: 20,
//         JavaScript: 80,
//         CSS: 90,
//         HTML: 95,
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Godwin",
//     course: "Frontend",
//     grade: [
//       {
//         NodeJs: 23,
//         Python: 70,
//         ReactJs: 50,
//         JavaScript: 50,
//         CSS: 30,
//         HTML: 20,
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "David",
//     course: "FullStack",
//     grade: [
//       {
//         NodeJs: 70,
//         Python: 70,
//         ReactJs: 40,
//         JavaScript: 70,
//         CSS: 90,
//         HTML: 80,
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Confidence",
//     course: "Backend",
//     grade: [
//       {
//         NodeJs: 70,
//         Python: 90,
//         ReactJs: 90,
//         JavaScript: 70,
//         CSS: 50,
//         HTML: 60,
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Samuel",
//     course: "Backend",
//     grade: [
//       {
//         NodeJs: 70,
//         Python: 80,
//         ReactJs: 30,
//         JavaScript: 60,
//         CSS: 80,
//         HTML: 90,
//       },
//     ],
//   },
// ];

// // entry request
// app.get("/", (req, res) => {
//   res.send("Welcome to CodeLab Wilmer Branch API");
// });

// // getting all students from the collection
// app.get("/studentInfo", (req, res) => {
//   if (!studentInfo) {
//     res.json({ message: "No student info found" });
//   }
//   res.json({ studentInfo });
// });

// // getting a single data
// app.get("/studentInfo/:id", (req, res) => {
//   const studentId = studentInfo.find(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   console.log(studentId);
//   if (!studentId) {
//     res.json({ message: `No student with this id: ${req.params.id}` });
//   }
//   res.json({ studentId });
// });

// // create a new student
// app.post("/studentInfo", (req, res) => {
//     const newStudent = {
//         id: studentInfo.length + 1,
//         name: req.body.name,
//         course: req.body.course,
//         grade: [
//             {
//                 NodeJs: req.body.NodeJs,
//                 Python: req.body.Python,
//                 ReactJs: req.body.ReactJs,
//                 JavaScript: req.body.javaScript,
//                 CSS: req.body.CSS,
//                 HTML: req.body.HTML,
//             },
//         ],
//     };
//     studentInfo.push(newStudent)
//     res.json({ studentInfo });
// });

// app.listen(port, () => {
//   console.log(`Server is listening to port: ${port}`);
// });

// const express = require("express");
// const port = 2012;

// const app = express ()

// app.listen(port, () => {
//         console.log(`Server is now listining port ${port}`)
//     });