const express = require('express');
const app = express();

app.use(express.static('dist/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})
