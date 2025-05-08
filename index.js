// // const express = require('express');
// // const app = express();
// // app.use(express.json()); // to parse JSON bodies

// // // POST endpoint to find duplicates
// // app.post('/find-duplicates', (req, res) => {
// //     const { input } = req.body;

// //     if (!input || !Array.isArray(input) && typeof input !== 'string') {
// //         return res.status(400).json({ message: "Input must be a string or an array." });
// //     }

// //     const map = {};
// //     const duplicates = [];

// //     for (let i = 0; i < input.length; i++) {
// //         const item = input[i];
// //         map[item] = (map[item] || 0) + 1;
// //     }

// //     for (const key in map) {
// //         if (map[key] > 1) {
// //             duplicates.push({ value: key, count: map[key] });
// //         }
// //     }

// //     if (duplicates.length > 0) {
// //         res.json({ message: "Duplicates found", duplicates });
// //     } else {
// //         res.json({ message: "No duplicates found" });
// //     }
// // });

// // // Start the server
// // const PORT = 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// const Item = require('./model/Item');

// mongoose.connect('mongodb://localhost:27017/crud_logs', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use(bodyParser.json());

// const logPath = path.join(__dirname, 'logs/crud.log');
// function logToFile(content) {
//   const entry = `[${new Date().toISOString()}] ${content}\n`;
//   fs.appendFileSync(logPath, entry);
// }

// // CREATE
// app.post('/items', async (req, res) => {
//   try {
//     const item = new Item(req.body);
//     const saved = await item.save();

//     logToFile(`CREATE -> req: ${JSON.stringify(req.body)} | res: ${JSON.stringify(saved)}`);
//     res.json({ message: 'Item created', data: saved });

//   } catch (err) {
//     logToFile(`CREATE ERROR -> ${err.message}`);
//     res.status(500).json({ error: err.message });
//   }
// });

// // READ ALL
// app.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     logToFile(`READ -> res: ${JSON.stringify(items)}`);
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // UPDATE
// app.put('/items/:id', async (req, res) => {
//   try {
//     const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     logToFile(`UPDATE -> id: ${req.params.id}, req: ${JSON.stringify(req.body)} | res: ${JSON.stringify(updated)}`);
//     res.json({ message: 'Item updated', data: updated });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE
// app.delete('/items/:id', async (req, res) => {
//   try {
//     const deleted = await Item.findByIdAndDelete(req.params.id);
//     logToFile(`DELETE -> id: ${req.params.id} | res: ${JSON.stringify(deleted)}`);
//     res.json({ message: 'Item deleted', data: deleted });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://gsrvscode:Pln12m2JpEO6cHQm@cluster0.02s1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema & Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', UserSchema);

// Create
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// Read all
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Update
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

// Delete
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

