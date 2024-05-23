const express = require("express")
const app = express()
const ejs = require("ejs")
let port = 5000
const mongoose = require("mongoose")


app.set("view engine", "ejs")

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))

let URI = "mongodb+srv://Zadtechspace:Andsome5$@cluster0.rpxlmmd.mongodb.net/zadtechfirst_db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI) .then(()=>{
  console.log("Database connected");
}). catch((err)=>{
  console.log("Database not connected");
  console.log(err);

})


const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, unique: true},
  password: {type: String, required: true},
  country: {type: String, required: true},
  state: {type: String, required: true},
  city: {type: String, required: true},
  dateOfBirth: {type: String, required: true},
  gender: {type: String, required: true},
})


let userModel = mongoose.model("User", userSchema)

app.get("/Register", (req, res)=>{
    res.render("index")
})

app.get("/Login", (req, res)=>{
  res.render("signin")
})

app.post("/signup", async (req,res)=>{
  try {

    console.log(req.body)
    let user = new userModel(req.body)
    await user.save()
    console.log("user saved")

  } catch (error) {

    console.log(error);
    console.log("user not saved");

    
  }
})

app.post("/login", async (req, res)=>{
    try {
      const checkers = await userModel.findOne({email:req.body.email , password:req.body.password})
        if (checkers.password === req.body.password) {
          res.render("dashboard")
          console.log('Login Successful')
        }
       
      

    } catch (error) {
      console.log('Login not successful')

    }
})





app.listen(port, () => {
  console.log(`app is running on port ${port}`)
});



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

// app.get("/example", (req,res)=>{

//   res.render("example", {name:"Badmus Lekan Oreoluwa"})
// })
