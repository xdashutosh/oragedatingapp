const PORT =8000;
const express = require('express');
const {MongoClient} =require('mongodb');
const {v4 : uuidv4} = require('uuid')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const cors =require('cors');
require('dotenv').config();
const uri = process.env.URI
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{

    res.json("hello this is backend")
});

app.post('/signup',async (req,res)=>
{ 
    const client = new MongoClient(uri);
    const {Email,password} = req.body;
    const generateduserId = uuidv4();
    const hashedpassword = await bcrypt.hash(password,10);
    try{
        await client.connect();
       const database =client.db('app-data');
    const users = database.collection('users');
  const existinguser= await users.findOne({Email});
        if(existinguser)
        {
            return res.status(409).send("users already exist");
        }
        const universalemail=Email.toLowerCase();
        const data ={
            user_id:generateduserId,    
            Email:universalemail,
            hashed_password:hashedpassword
        }
        const inserteduser= await users.insertOne(data);
        const token = jwt.sign(inserteduser,universalemail,{expiresIn:60*24})
        res.status(201).json({token,userId:generateduserId});

    }catch(error)
    {console.Console(error)}
});

app.post('/login',async (req,res)=>{
    const client =new MongoClient(uri);
    const{Email,password}=req.body;

    try {
await client.connect();
const database =client.db('app-data');
const users =database.collection('users');
const user = await users.findOne({Email});
const correctpass = await bcrypt.compare(password,user.hashed_password);

  if (user && correctpass) {
    const token = jwt.sign(user,Email,{expiresIn:60*24});
    res.status(201).json({token,userId:user.user_id});
  }
  res.status('400').send("invalid credentials");
    }catch(error){
        console.log(error);
    }
})

app.get('/user',async (req,res)=>{
 const client = new MongoClient(uri);
 const userId = req.query.userId;
 console.log(userId);
 try{
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const query = {user_id:userId}
    const user = await users.findOne(query)
    res.send(user);
 }finally{
    await client.close();
 }
})

app.get('/gender-users', async (req, res) => {
    const client = new MongoClient(uri)
    const gender = req.query.gender

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')
        const query = {gender_identity: {$eq: gender}}
        const foundUsers = await users.find(query).toArray()
        res.json(foundUsers)

    } finally {
        await client.close()
    }
})



app.put('/user', async (req,res)=>{
    const client = new MongoClient(uri);
    const formdata =req.body.formdata;
    try {
        await client.connect();
        const database=client.db('app-data');
        const users = database.collection("users");
        const query ={user_id:formdata.user_id};
        const updateddoc ={
            $set:{
                first_name:formdata.first_name,
                dob_day:formdata.dob_day,
                dob_month:formdata.dob_month,
                dob_year:formdata.dob_year,
                show_gender:formdata.show_gender,
                gender_identity:formdata.gender_identity,
                gender_int:formdata.gender_int,
                url:formdata.url,
                aboutme:formdata.aboutme,
                matches:formdata.matches
                
            }
        }
        const inserteduser = await users.updateOne(query,updateddoc);
        res.json(inserteduser)
    }finally
    {
await client.close();
    }
})


app.listen(PORT,()=> console.log("running at port",PORT));
