const mongodb=require("mongoose")
const schema=mongodb.Schema



const mahsulotdb=new schema({
    name:{
        type: String,
        required:true,
    },
    manufacturer:{
        type:String,
        default:"Ishlab chiqaruvchisi nomalum",

    },
    price: {

        type:Number,
        maxlength:8,
        required: true
    },
    vires:{
        type:Number,
        default:0,
    },
    comment:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    img: {
        type:String
    }
    
})

module.exports=mongodb.model("NewPege", mahsulotdb)