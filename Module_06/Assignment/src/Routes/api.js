const express=require("express");

const router=express.Router();

const blogController=require("../Controllers/blogController");
const blogDetailsController=require("../Controllers/blogDetailsController");
const commentController=require("../Controllers/commentController");
const messageController=require("../Controllers/messageController");
const portfolioController=require("../Controllers/portfolioController");
const productController=require("../Controllers/productController");
const profitController=require("../Controllers/profitController");
const projectController=require("../Controllers/projectController");
const serviceController=require("../Controllers/serviceController");
const titleController=require("../Controllers/titleController");

router.get("/blogCreate",blogController.create);
router.get("/blogRead",blogController.read);
router.get("/blogDelete",blogController.delete);
router.get("/blogUpdate",blogController.update);

router.get("/blogDetailsCreate",blogDetailsController.create);
router.get("/blogDetailsRead",blogDetailsController.read);
router.get("/blogDetailsDelete",blogDetailsController.delete);
router.get("/blogDetailsUpdate",blogDetailsController.update);

router.get("/commentCreate",commentController.create);
router.get("/commentRead",commentController.read);
router.get("/commentDelete",commentController.delete);
router.get("/commentUpdate",commentController.update);

router.get("/messageCreate",messageController.create);
router.get("/messageRead",messageController.read);
router.get("/messageDelete",messageController.delete);
router.get("/messageUpdate",messageController.update);

router.get("/portfolioCreate",portfolioController.create);
router.get("/portfolioRead",portfolioController.read);
router.get("/portfolioDelete",portfolioController.delete);
router.get("/portfolioUpdate",portfolioController.update);

router.get("/productCreate",productController.create);
router.get("/productRead",productController.read);
router.get("/productDelete",productController.delete);
router.get("/productUpdate",productController.update);

router.get("/profitCreate",profitController.create);
router.get("/profitRead",profitController.read);
router.get("/profitDelete",profitController.delete);
router.get("/profitUpdate",profitController.update);

router.get("/projectCreate",projectController.create);
router.get("/projectRead",projectController.read);
router.get("/projectDelete",projectController.delete);
router.get("/projectUpdate",projectController.update);

router.get("/serviceCreate",serviceController.create);
router.get("/serviceRead",serviceController.read);
router.get("/serviceDelete",serviceController.delete);
router.get("/serviceUpdate",serviceController.update);

router.get("/titleCreate",titleController.create);
router.get("/titleRead",titleController.read);
router.get("/titleDelete",titleController.delete);
router.get("/titleUpdate",titleController.update);

