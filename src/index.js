import 'dotenv/config';  // Load environment variables
import connectDB from './db/connect.js';
import app from './app.js';

console.log('Starting application...');

// Connect to the database
connectDB().then(() => {
    app.listen(process.env.PORT || 8000,()=>{
         console.log(`server has been started at ${process.env.PORT}`);
    })
}).catch((err) => {
    console.error('Failed to establish connection:', err);
});
