
$( document ).ready(function() {
	var url = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2018-19&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=&callback=?"
	var rodger_players = ["Trae Young", "Collin Sexton", "Marvin Bagley III", "Wendell Carter Jr.", "Shai Gilgeous-Alexander"]
	var jimmy_players = ["Luka Doncic", "Deandre Ayton", "Kevin Knox", "Jaren Jackson Jr.", "Miles Bridges"]

	$.getJSON(url,  // url
	    function (data) {  // success callback
	        rowSet = data.resultSets[0].rowSet;
	        console.log(data.resultSets[0]);
	        rodger_total = new Array(15).fill(0);
	        rodger_total[0] = "Rodger Totals"
	        jimmy_total = new Array(15).fill(0);
	        jimmy_total[0] = "Jimmy Totals"
	        jimmy_score = new Array(3).fill(0);
			for (var i = 0; i < rowSet.length; i++) {
				if (rodger_players.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById(rowSet[i][1]); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					rodger_total[1] += rowSet[i][5]; //GP
					rodger_total[2] += rowSet[i][10]; //FG
					rodger_total[3] += rowSet[i][11];
					rodger_total[5] += rowSet[i][16];
					rodger_total[6] += rowSet[i][17];
					rodger_total[8] += rowSet[i][29];
					rodger_total[9] += rowSet[i][21];
					rodger_total[10] += rowSet[i][22];
					rodger_total[11] += rowSet[i][13];
					rodger_total[12] += rowSet[i][24];
					rodger_total[13] += rowSet[i][25];
					rodger_total[14] += rowSet[i][23];
				}
				if (jimmy_players.indexOf(rowSet[i][1]) > -1) {
					row = document.getElementById(rowSet[i][1]); 
					row.insertCell(0).innerHTML = rowSet[i][1]; //name
					row.insertCell(1).innerHTML = rowSet[i][5]; //GP
					row.insertCell(2).innerHTML = rowSet[i][10]; //FG
					row.insertCell(3).innerHTML = rowSet[i][11]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][10]*1.0/rowSet[i][11]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][16]; //FT
					row.insertCell(6).innerHTML = rowSet[i][17]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][16]*1.0/rowSet[i][17]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][29]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][21]; //REB
					row.insertCell(10).innerHTML = rowSet[i][22]; //AST
					row.insertCell(11).innerHTML = rowSet[i][13]; //3p
					row.insertCell(12).innerHTML = rowSet[i][24]; //STL
					row.insertCell(13).innerHTML = rowSet[i][25]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][23]; //TO
					jimmy_total[1] += rowSet[i][5]; //GP
					jimmy_total[2] += rowSet[i][10]; //FG
					jimmy_total[3] += rowSet[i][11];
					jimmy_total[5] += rowSet[i][16];
					jimmy_total[6] += rowSet[i][17];
					jimmy_total[8] += rowSet[i][29];
					jimmy_total[9] += rowSet[i][21];
					jimmy_total[10] += rowSet[i][22];
					jimmy_total[11] += rowSet[i][13];
					jimmy_total[12] += rowSet[i][24];
					jimmy_total[13] += rowSet[i][25];
					jimmy_total[14] += rowSet[i][23];
				}
			}
			rodger_total[4] = Number(rodger_total[2]*1.0/rodger_total[3]).toFixed(3);
			rodger_total[7] = Number(rodger_total[5]*1.0/rodger_total[6]).toFixed(3);
			jimmy_total[4] = Number(jimmy_total[2]*1.0/jimmy_total[3]).toFixed(3);
			jimmy_total[7] = Number(jimmy_total[5]*1.0/jimmy_total[6]).toFixed(3);
			for (var i = 0; i < rodger_total.length; i++) {
				jrow = document.getElementById("jt");
				rrow = document.getElementById("rt");
				jrow.insertCell(i).innerHTML = jimmy_total[i];
				rrow.insertCell(i).innerHTML = rodger_total[i];
				jcell = document.getElementById("jtt").insertCell(i);
				rcell = document.getElementById("rtt").insertCell(i);
				jcell.innerHTML = jimmy_total[i];
				rcell.innerHTML = rodger_total[i];
				if (i > 7 && i != 14) {
					if (jimmy_total[i] > rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						jimmy_score[0] += 1;
					} 
					else if (jimmy_total[i] < rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						jimmy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						jimmy_score[2] += 1;
					}
				}
				if (i == 14) {
					if (jimmy_total[i] < rodger_total[i]) {
						jcell.style.backgroundColor = 'yellow'
						jimmy_score[0] += 1;
					} 
					else if(jimmy_total[i] > rodger_total[i]) {
						rcell.style.backgroundColor = 'yellow'
						jimmy_score[1] += 1;
					}
					else {
						jcell.style.backgroundColor = 'lightgreen'
						rcell.style.backgroundColor = 'lightgreen'
						jimmy_score[2] += 1;
					}
				}
			}

			js = document.getElementById("js");
			rs = document.getElementById("rs");

			js.insertCell(0).innerHTML = "Jimmy"
			rs.insertCell(0).innerHTML = "Rodger"
			js.insertCell(1).innerHTML = jimmy_score[0]
			rs.insertCell(1).innerHTML = jimmy_score[1]
			js.insertCell(2).innerHTML = jimmy_score[1]
			rs.insertCell(2).innerHTML = jimmy_score[0]
			js.insertCell(3).innerHTML = jimmy_score[2]
			rs.insertCell(3).innerHTML = jimmy_score[2]
	    });
});