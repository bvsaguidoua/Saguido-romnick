const express = require ("express");
const app = express();
const port = 5000;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/test", (req, res) => {
    res.status(200).send("Hello from /test endpoint.");
})

let friends = [];

//let person = {
//    firstName: "John",
//    lastName: "Dela Cruz",
//    email: "jdc@gmail.com"
//}
app. post("/friends/all", (req, res) => {
    if(friends.length === 0){
        res.send({
            code: 200,
            message: "Success!",
            data: "Your friendlist is empty."
        });
    }else{
        res.send({
            code: 200,
            message: "Success!",
            data: friends
        });
    }
})

app.post("/friends/add", (req, res) =>{ 
    let reqBody = req.body;
    if(reqBody != ""){
        friends.push(reqBody);
        res.status(201).send({
            code: 201,
            message: "Friend Added!",
            data: `You are now friends with ${reqBody.firstName} ${reqBody.lastName}`
        })
    }else{
         res.send({
            code: 200,
            message: "Oops!",
            data: "Please enter a friend name."
    })

}})

app.listen(port, () => console.log(`Server is now running at port ${port}.`))