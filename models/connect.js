const mongoose=require('mongoose');
require('dotenv').config();
const db=process.env.db;
mongoose.connect(db,{
    useNewUrlParser:true
}).then(()=>console.log('connected successfully')).catch(console.error)
