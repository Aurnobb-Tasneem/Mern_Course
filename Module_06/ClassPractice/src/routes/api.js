const DemoC=require("../controllers/DemoController");

const express=require("express");

const router=express.Router();

router.get("/demo",DemoC.demo);
router.post("/post",DemoC.post);
router.delete("/delete",DemoC.delete);

module.exports=router;