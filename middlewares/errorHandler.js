const {CustomAPIError}=require("../errors/customError")
// const errorHandler=(err, req,res,next)=>{
//     console.log(err)
//     return res.status(err.status).json({msg:err.message})

// }
const errorHandler=(err, req,res,next)=>{
if(err instanceof CustomAPIError)
    return res.status(err.statusCode).json({msg:err.message})

}
module.exports=errorHandler