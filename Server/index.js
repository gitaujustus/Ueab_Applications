const express=require('express');
const mysql=require('mysql')
const cors=require('cors');
const bodyParser = require('body-parser');
const app=express();

app.use(cors())
app.use(bodyParser.json())

const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:null,
    database:'ueabapplication'
})

db.connect((err)=>{
    if (err) {
        console.log("Error connection to db", err);
    }
    else{
        console.log("Database connected successfully");
    }
})
app.get('/data',(req,res)=>{
    Selectquery="Select * From Accounts"
    db.query(Selectquery,(err,data)=>{
        if (err) {
            console.log("Err occured trying to fetch the data");
        }
        console.log(data);
        res.send(data)
    })
})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    console.log(username);

    Selectquery=`Select StudentId, FirstName, LastName, Email From Accounts WHERE StudentId = ? AND PASSWORD= ?`

    db.query(Selectquery,[username, password],(err,data)=>{
        if (err) {
            console.log("Err occured trying to fetch the data", err);
            return res.status(500).send("Error occurred while trying to fetch the data");
        }
        // Check if data is empty (no match found)
        if (data.length === 0) {
            console.log("Invalid login credentials");
            return res.status(401).send("Invalid login credentials");
        }
        console.log(data);
        res.send(data)
    })
})

app.post('/supp', (req, res) => {
    const StudentId = req.body.StudentId; // You need to get the StudentId from the user's session or request
    const Major = req.body.Major;
    const CourseCode = req.body.CourseCode;
    const CourseTitle = req.body.courseTitle;
    const Credits = req.body.Credit;
    const SemesterTaken = req.body.SemesterTaken;
    const CatGrade = req.body.CatGrade;
    const FinalGrade = req.body.FinalGrade;
  console.log(Major);
  
    const insertSup = "INSERT INTO Supp (StudentId, Major, CourseCode, CourseTitle, Credits, SemesterTaken, CatGrade, FinalGrade) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
    db.query(insertSup, [StudentId, Major, CourseCode, CourseTitle, Credits, SemesterTaken, CatGrade, FinalGrade], (err, result) => {
      if (err) {
        console.log("Error occurred while inserting data into Supp:", err);
        return res.status(500).send("Error occurred while inserting data into Supp");
      }
  
      console.log("Data inserted successfully");
      res.send(result);
    });
  });
  

app.get('/',(req,res)=>{
    res.send("This is the homepage")
})




app.listen(8000,()=>{
    console.log("Listening to port 8000");
})