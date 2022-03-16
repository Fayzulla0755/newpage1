const express=require("express")
const router=express.Router()
const maxsulotdb=require("../model/newshcema")



router.get("/add",(req,res)=>{
    res.render("add",{
        title:"Maxsulot qo'shish"
    })
})
router.post("/add",(req, res)=>{
    const {name, manufacturer, price, views, comment, img} =req.body
    const db=new maxsulotdb({
        name :name,
        manufacturer:manufacturer,
        price:price,
        views:views,
        comment:comment,
        img:`./img/${img}`
    })

    db.save((err)=>{
        console.log(err);
    })
    res.redirect("/")
})











module.exports=router