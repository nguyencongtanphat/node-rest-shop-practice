const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './API/Public/productImage')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
 //filter file
function fileFilter (req, file, cb) {
  if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/png')
  {
    console.log('accept file')
     // To accept the file pass `true`, like so:
      cb(null, true)
  }
  else{
    console.log('dont accept file')
      // To reject this file pass `false`, like so:
      cb(null, false)
  }
  
}
const upload = multer({ 
  storage, 
  fileFilter,
  limits:{
    fileSize: 1024 * 1024 * 6
  }
 })

 module.exports = upload