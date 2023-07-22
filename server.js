const app = require('./app.js');

PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT});`);
});
