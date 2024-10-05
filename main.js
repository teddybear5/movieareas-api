import express from "express";
import moviesRoutes from "./routes/movies.route.js";
import connectDB from "./Lib/db.js";

const app = express();
const PORT = 6969;
// CONNECTDB
connectDB();

app.get('/', (req,res)=>{
    res.json({msg: "Hello Students!"});
});

// CRUD Functionality of movies
// CLIENT ->MIDDLEWARE -> SERVER
app.use('/movies',moviesRoutes)
app.listen(PORT, () =>{
    console.log(`The server is running at http://localhost:${PORT}`);
})

//DRY principle - Don't Repeat Yourself
//KISS principle- Keep it Simple, Stupid!
