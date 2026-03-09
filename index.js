const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  const now = new Date().toISOString();
  res.send(`
    <h1>Hello from GCP Mumbai!</h1>
    <p>Deployed via GitHub Actions CI/CD</p>
    <p>Server time: ${now}</p>
    <p>Version: 1.0.0</p>
  `);
});
 
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});
 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
