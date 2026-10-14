// let student = {
//   name: "Santhosh",
//   age: 23,
//   mark: 80,
//   phone: [987654321, 8765432221],
//   address: {
//     Plot: "35",
//     steet: "ABC Sheet",
//   },
// };

// student.mark = 25;
// student.address.pincode = 600056;
// delete student.age;
// delete student.address.Plot;
// delete student.phone[1];
// console.log(student);

// console.log(student.phone[1]);
// console.log(student.phone);

// const price = [100, 200, 300, 400, 500, 34, 343];
// const total = price.reduce((p, c) => {
//   return p + c;
// });
// console.log(total);

// let student = [
//   { name: "Kiran", mark: 59 },
//   { name: "Anto", mark: 9 },
// ];

// let result = student.find((a) => a.name === "Kiran") ?? "Student not found";

// console.log(result);

// // Closure

// let name = "Santhosh";

// const mg = (message) => (name) => {
//   return `${message} ${name}`;
// };
// console.log(mg("Hello")("Santhosh"));

// async function loaduser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();

//     console.log(users[0].name);

//     let result = users.map((e) => e.name);

//     console.log(result);
//   } catch (error) {
//     console.log("Could not load:", error.message);
//   }
// }

// loaduser();
