const express = require("express")
const router = express.Router()

const {index, show, create, update, updateid,cancel} = require("../controllers/postController")
// show
router.get('/',index);
  
  
  router.get('/:id',show);
  
  //create
  router.post('/', create);
  
  //update 
  router.put('/:id',update);
  
  router.patch("/:id",updateid)
  
  //NOTE - delete
  router.delete('/:id',cancel);
  
  module.exports = router;