const express=require("express")
const app=express()
const path=require("path")
const bodyParser=require("body-parser")
const port=(process.env.PORT || '3000')
const rIndex=require("./routers/index")
const rAdd=require("./routers/add")
const  mongoose= require("mongoose")
  


//  Mongoosa conecting
mongoose.connect("mongodb://localhost:27017/newpraduct")
const db=mongoose.connection

db.on("open", ()=>{
    console.log("mongodb runing");
})
db.on("error",(err)=>{
    console.log(err);
})

// Body-Parsr  conecting

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Pug conecting

app.set("view engine", "pug")


app.use((express.static(path.join(__dirname, "public"))))

app.use(rIndex);
app.use(rAdd)

app.listen(port,  ()=>{
    console.log(" server runnnig")
})