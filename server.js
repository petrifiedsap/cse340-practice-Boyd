// Import express using ESM syntax
import express from 'express';

// file path stuff
import { fileURLToPath } from 'url';
import path from 'path';

// variables
// path variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//access environmental variable
const name = process.env.NAME;

//defines port for server
const PORT = process.env.PORT || 3000;

// setup express server
// Create an instance of an Express application
const app = express();

//middleware
/**
 * Configure Express middleware
 */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));


//declare routes
/**
 * Routes
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/about.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/products.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});