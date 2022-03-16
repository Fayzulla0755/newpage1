const express=require("express")
const router=express.Router()
const maxsulotdb=require("../model/newshcema")


router.get("/",(req,res)=>{
    maxsulotdb.find({}, (err, data)=>{
        res.render("index",{
            title:"Bosh sahifa",
            data: data
        })
    })
})
router.post("add:id",(req,res)=>{
    const updateDb={}
    updateDb.name=req.body.name,
    updateDb.manufacturer=req.body.manufacturer,
    updateDb.price=req.body.price,
    updateDb.views=req.body.views,
    updateDb.comment= req.body.comment
    const updateId = {_id:req.params.id}

    maxsulotdb.updateOne(updateId, updateDb,(err)=>{
        if(err){
            console.log(err);
        }
        else
        res.redirect('/')
    })
    router.get("/add/del:id",(req ,res)=>{
        maxsulotdb.findByIdAndDelete(req.params.id,(err)=>{
            if(err) throw err
            else
                res.redirect("/")
        })
    })

})











module.exports=router