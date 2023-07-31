const PORT =8000;
const express = require('express');
const {MongoClient} =require('mongodb');
const {v4 : uuidv4} = require('uuid')
const bcrypt = require('bcrypt');
const {jwt} =require('jsonwebtoken');
const cors =require('cors');
const uri ='mongodb+srv://xdashutosh:WaMKjnxP5LtVGB3\@cluster0.95lwi9w.mongodb.net/?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{

    res.json("hello this is backend")
});

app.post('/signup',async (req,res)=>
{ console.log('hello to signup');
    const client = new MongoClient(uri);
    const {Email,password} = req.body;
    const generateduserid = uuidv4();
    const hashedpassword = await bcrypt.hash(password,10);
    try{
        await client.connect();
       const database =client.db('app-data');
    const users = database.collection('users');
  const existinguser= await users.findOne({Email});
        if(existinguser)
        {
            return res.status(489).send("users already exist");
        }
        const universalemail=Email.toLowerCase();
        const data ={
            user_id:generateduserid,    
            Email:universalemail,
            hashed_password:hashedpassword
        }
        const inserteduser= await users.insertOne(data);
        const token = jwt.sign(inserteduser,universalemail,{expires:60*24})
        res.status(201).json({token,userid:generateduserid,email:universalemail})

    }catch(error)
    {console.Console(error)}
});

app.get('/users',async(req,res)=>{
const client =new MongoClient(uri);

try {
    await client.connect();
    const database=client.db('app-data');
    const users = database.collection('users');

    const returnedusers=await users.find().toArray();
    res.send(returnedusers);
} finally {
    await client.close();
}
});

app.listen(PORT,()=> console.log("running at port",PORT));
