let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
var path = require('path');
const PORT = 3000; 

let pool = new pg.Pool({
	user:'eiaoajsjlvxvrh',
	database: 'ddgc2v02mk1eqa',
	password: 'a9a767395474163d8655129c34883defecb251a43f18930323d7d4a1864eeab0',
	host:'ec2-54-204-40-248.compute-1.amazonaws.com',
	port: 5432,
	URI:'postgres://eiaoajsjlvxvrh:a9a767395474163d8655129c34883defecb251a43f18930323d7d4a1864eeab0@ec2-54-204-40-248.compute-1.amazonaws.com:5432/ddgc2v02mk1eqa'
});


pool.connect((err, db, done) =>{
	if(err){
		return console.log("pooja "+ err);
	}
	else {
		var tableid = 'Table1';
		var devicetype = 'Phone';
		var C0R0 = 'R1';
		var C0R1 = 'R2';
		var C0R2 = 'R3';
		var C1R0 = '1';
		var C1R1 = '2';
		var C1R2 = '3';
		var C2R0 = '4';
		var C2R1 = '5';
		var C2R2 = '6';
		//db.query('INSERT INTO DeviceTable (tableid,devicetype,c0r0,c0r1,c0r2,c1r0,c1r1,c1r2,c2r0,c2r1,c2r2) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [tableid,devicetype,C0R0,C0R1,C0R2,C1R0,C1R1,C1R2,C2R0,C2R1,C2R2], (err, table) => {
		db.query('CREATE TABLE devicetable(tableid numeric NOT NULL,devicetype varchar(255) NOT NULL,c1r0 numeric NOT NULL,c1r1 numeric NOT NULL,c1r2 numeric NOT NULL,c2r0 numeric NOT NULL,c2r1 numeric NOT NULL,c2r2 numeric NOT NULL,c0r0 numeric NOT NULL,c0r1 numeric NOT NULL,c0r2 numeric NOT NULL,CONSTRAINT "DeviceTable_pkey" PRIMARY KEY (tableid))', (err, table) => {
			if(err)
			{
				return console.log("dixit "+ err);
			}
			else
			{
				console.log("INSERTED!!!!");
				db.end();
			}
		})
	}
});


let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('client/build'));
app.get('*',(req,res) =>{
	res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});
 /*
app.get('/', function(req, res) {
	//res.sendFile('index.html', { root: __dirname });
  res.sendFile('/client/public/index.html', { root: __dirname }, function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.get('/', function(req, res) {
  res.render('index.html');
});*/


app.listen(process.env.PORT, ()=> console.log('listening **** Port#' + PORT));