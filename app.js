const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    console.log("dsafs")
    return res.status(200).send("afd")

})



const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listining on port " + PORT);
});
