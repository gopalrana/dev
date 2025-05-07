const express = require('express');
const app = express();
app.use(express.json()); // to parse JSON bodies

// POST endpoint to find duplicates
app.post('/find-duplicates', (req, res) => {
    const { input } = req.body;

    if (!input || !Array.isArray(input) && typeof input !== 'string') {
        return res.status(400).json({ message: "Input must be a string or an array." });
    }

    const map = {};
    const duplicates = [];

    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        map[item] = (map[item] || 0) + 1;
    }

    for (const key in map) {
        if (map[key] > 1) {
            duplicates.push({ value: key, count: map[key] });
        }
    }

    if (duplicates.length > 0) {
        res.json({ message: "Duplicates found", duplicates });
    } else {
        res.json({ message: "No duplicates found" });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
