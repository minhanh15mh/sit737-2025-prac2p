// const express = require("express");
// const path = require('path')

// const app = express()

// app.use(express.static(__dirname))
// app.get('/',(req, res) =>{
//     res.sendFile()
// })

// app.listen(3000, ()=>{
//     console.log('server is listening on port', server.address().port)
// })

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
