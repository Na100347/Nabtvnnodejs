const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Thiết lập cổng server
const PORT = 3000;

// Dùng middleware để phục vụ các file tĩnh (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route để lấy dữ liệu từ file JSON
app.get('/api/vehicle-plates', (req, res) => {
    const filePath = path.join(__dirname, 'vehicle_plates.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const plates = JSON.parse(data);
        res.json(plates);
    });
});

// Lắng nghe trên cổng 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
