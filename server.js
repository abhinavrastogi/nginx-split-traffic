const express = require('express');

const app1 = new express();
const app2 = new express();

app1.use((req, res) => {
	res.send("server 1");
});

app2.use((req, res) => {
	res.send("server 2");
});

app1.listen(8001, () => { console.log('8001') });
app2.listen(8002, () => { console.log('8002' )});