 const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/dashboard', (req, res) => {
  res.json({
    name: 'Uttam Singh',
    referralCode: 'uttam2025',
    donations: 7860
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

