// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from your local Node.js server!');
// });

// // app.listen(port, () => {
// //   console.log(`Server is running at http://localhost:${port}`);
// // });
// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const path = require('path'); // Make sure this line is included
const ngrok = require('@ngrok/ngrok');

const app = express();
const PORT = 5173;

// Serve static files from the "public" directory and parent "src" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, '..', 'src')));

// Serve app.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Node.js web server at ${PORT} is running...`);
    
    // Connect to ngrok
    ngrok.connect({ addr: PORT, authtoken: '2oiwWbPugekOIYHqXag83p5908t_2Z5jenEEDjc7393fbJxeL' })
        .then(listener => console.log(`Ingress established at: ${listener.url()}`))
        .catch(err => console.error('Error connecting to ngrok:', err));
});
