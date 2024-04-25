const multer = require('multer');
// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Define the destination folder for uploaded files
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Define the file name for uploaded files
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  // Initialize Multer with storage settings
  const upload = multer({ storage: storage });
  
  // Define the saveFile function
  exports.saveFile = (req, res) => {
    // Route to handle form submission with image upload
    upload.single('image')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res.status(500).send('Multer error occurred.');
      } else if (err) {
        // An unknown error occurred.
        return res.status(500).send('An unknown error occurred.');
      }
      // File upload was successful.
      const image = req.file;
      // Process the uploaded image (e.g., save to database)
      // Example: save to a database
      // YourDatabaseModel.create({ imagePath: image.path });
      res.send('Image uploaded successfully.');
    });
  };