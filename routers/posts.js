const express = require("express")
const router = express.Router()
//NOTE - importiamo ed effettuiamo il destucturing di postController per inserle come funzioni di callback
const {index, show, create, update, updatePar,cancel} = require("../controllers/postController")
// index
router.get('/',index);

  // show
 router.get('/:id',show);
  //create
router.post('/', create);
  //update 
router.put('/:id',update);
 
router.patch("/:id",updatePar)
  //NOTE - delete
router.delete('/:id',cancel);
//NOTE - esportiamo il file per collegarlo ad app-js  
module.exports = router;