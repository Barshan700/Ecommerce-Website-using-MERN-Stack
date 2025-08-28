const Admin=require("../db/admindb");
const bcrypt=require("bcrypt")
module.exports={
    async addadmin(req,res){
        const salt=await bcrypt.genSalt(10);
        const hp=await bcrypt.hash("1234",salt);
    //     var ins={
    //   name:"Jack",
    //   email:"j@gmail.com",
    //   password:hp,
    //     }
    //     await Admin.create(ins);

        res.send(hp);
        
            },
       async login(req,res){
        var e=req.body.email;
        var p=req.body.pass;

        const data=await Admin.findOne({email:e})
        if(data!=null){
            bcrypt.compare(p,data.password,(err,result)=>{
                if(err){
                    throw err;
                }else{

                    if(result==true){
                        var udata={
                            id:data._id,
                            uname:data.name
                        }
                        res.json(udata)

                    }else{
                         res.json({msg:"Invalid Login"});
                    }
                }

            })


        }else{
            res.json({msg:"Invalid Login"});
        }
        

       }
            
}