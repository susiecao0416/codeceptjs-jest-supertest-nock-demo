import express from 'express';
//import {getConsultantResults, getLeaveResults} from './postgresqlConn';

const app = express();
app.set('port', process.env.PORT || 2000);

// app.get('/api/people', (req, res) => {
// 	getConsultantResults().then((result) => {
// 		const expectedResult = result.rows;
// 		return res.send(expectedResult[0]);
// 	})
// });

app.get('/api/providerdemo', (req, res) => {
		
		const validDate = req.query.validDate;
		
		if (!validDate) {
			res.status(400)
			res.json({error: 'validDate is required'})
		} else {
			res.json({
				test: 'NO',
				// date: '2021-08-16T15:31:20',
				count: 1000,
			})
		}
	}
);

app.listen(process.env.PORT);
module.exports = app;