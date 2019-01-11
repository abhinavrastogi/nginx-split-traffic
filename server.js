const express = require('express');
const cookieParser = require('cookie-parser');

const app1 = new express();
const app2 = new express();

const setTCID = (req, res, next) => {
	if (!req.cookies['TCID']) {
		res.cookie('TCID', Math.floor(Math.random() * 1000));
	}
	next();
}

app1.use(cookieParser());
app2.use(cookieParser());

app1.use(setTCID);
app2.use(setTCID);

app1.use((req, res) => { res.send("server 1"); });
app2.use((req, res) => { res.send("server 2"); });

app1.listen(8001, () => { console.log('8001') });
app2.listen(8002, () => { console.log('8002' )});