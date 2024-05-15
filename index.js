const express = require("express")
const app = express()
const ejs = require("ejs")
let port = 5000

// app.get("/welcome", (req, res) => {
//   res.send('Welcome to the world of Zadtechspace Enterprises')
// }).listen(port)

// app.get("/", (req, res)=>{
//     console.log("Welcome to my world of dev zadtech ")
// });




// app.get("/",(req, res)=>{
//     res.send(
//         [
//             {
//                 firstName: "Oreoluwa",
//                 lastName: "Badmus",
//                 gender: "male",
//                 age: 200,
//             }
//         ]
//     )
// })


// app.get("/Home", (req, res)=>{
// // console.log(__dirname);
// res.sendFile(__dirname + "/signup.html")
// })

app.set("view engine", "ejs")

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))

app.get("/Register", (req, res)=>{
    res.render("index")
})

app.get("/Login", (req, res)=>{
  res.render("signin")
})

app.post("/signup",(req,res)=>{
  console.log(req.body)
})
// app.get("/example", (req,res)=>{

//   res.render("example", {name:"Badmus Lekan Oreoluwa"})
// })





app.listen(port, () => {
  console.log(`app is running on port ${port}`)
});