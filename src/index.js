import 'dotenv/config';  // Load environment variables
import connectDB from './db/connect.js';

console.log('Starting application...');

// Connect to the database
connectDB().then(() => {
    console.log('Connection established, proceeding with application logic...');
}).catch((err) => {
    console.error('Failed to establish connection:', err);
});
