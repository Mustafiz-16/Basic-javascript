// index.js
// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Dummy route
// app.get('/', (req, res) => {
//     res.send('iBlog backend is running!');
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });
// backend/index.js (update this)

const express = require('express');
const cors = require('cors'); // ✅ NEW
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');

dotenv.config();
const app = express();
const PORT = 3000;
app.use(cors()); // ✅ NEW

const blogs = [
    {
        id: 1,
        title: 'First Blog',
        content: 'This is the first blog content.',
        category: 'sports',
        author: 'Mustafizur',
        date: '2025-06-15'
    },
    {
        id: 2,
        title: 'Second Blog',
        content: 'This is the second blog content.',
        category: 'education',
        author: 'Rahman',
        date: '2025-06-12'
    }
];

app.use(express.json()); 
connectDB();

// ✅ Auth route
app.use('/api/auth', require('./routes/authroutes.js'));
app.use('/api/posts', require('./routes/postroutes')); // ✅ added

// Step 2: API route for blogs
// app.get('/api/blogs', (req, res) => {
//     const category = req.query.category;
//     if (category) {
//         const filtered = blogs.filter(blog => blog.category === category);
//         res.json(filtered);
//     } else {
//         res.json(blogs);
//     }
// });

const Post = require('./models/post'); // 🆕 Post model import
app.get('/api/blogs', async (req, res) => {
  try {
    const category = req.query.category;

    const query = category ? { category } : {};
    const posts = await Post.find(query).sort({ createdAt: -1 }); // Latest first

    res.json(posts);
  } catch (err) {
    console.error('❌ Error fetching posts:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Step 3: Server start
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



