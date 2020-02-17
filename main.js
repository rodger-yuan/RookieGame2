
$( document ).ready(function() {
	var url = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&callback=?&PerMode=Totals&Scope=Rookies&Season=2019-20&SeasonType=Regular+Season&StatCategory=PTS"
	var rodger_players = ["RJ Barrett", "Zion Williamson", "Rui Hachimura", "De'Andre Hunter", "Tyler Herro"]
	var jimmy_players = ["Ja Morant", "Darius Garland", "Coby White", "Brandon Clarke", "Jarrett Culver"]

	$.getJSON(url,  // url
	    function (data) {  // success callback
	    	console.log(data)
	        rowSet = data.resultSet.rowSet;
	        console.log(rowSet);
	        rodger_total = new Array(15).fill(0);
	        rodger_total[0] = "Rodger Totals"
	        jimmy_total = new Array(15).fill(0);
	        jimmy_total[0] = "Jimmy Totals"
	        jimmy_score = new Array(3).fill(0);
			for (var i = 0; i < rowSet.length; i++) {
				if (rodger_players.indexOf(rowSet[i][2]) > -1) {
					row = document.getElementById(rowSet[i][2]); 
					row.insertCell(0).innerHTML = rowSet[i][2]; //name
					row.insertCell(1).innerHTML = rowSet[i][4]; //GP
					row.insertCell(2).innerHTML = rowSet[i][6]; //FG
					row.insertCell(3).innerHTML = rowSet[i][7]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][6]*1.0/rowSet[i][7]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][12]; //FT
					row.insertCell(6).innerHTML = rowSet[i][13]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][12]*1.0/rowSet[i][13]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][23]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][17]; //REB
					row.insertCell(10).innerHTML = rowSet[i][18]; //AST
					row.insertCell(11).innerHTML = rowSet[i][9].toFixed(0); //3p
					row.insertCell(12).innerHTML = rowSet[i][19]; //STL
					row.insertCell(13).innerHTML = rowSet[i][20]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][21]; //TO
					rodger_total[1] += rowSet[i][4]; //GP
					rodger_total[2] += rowSet[i][6]; //FG
					rodger_total[3] += rowSet[i][7];
					rodger_total[5] += rowSet[i][12];
					rodger_total[6] += rowSet[i][13];
					rodger_total[8] += rowSet[i][23];
					rodger_total[9] += rowSet[i][17];
					rodger_total[10] += rowSet[i][18];
					rodger_total[11] += rowSet[i][9];
					rodger_total[12] += rowSet[i][19];
					rodger_total[13] += rowSet[i][20];
					rodger_total[14] += rowSet[i][21];
				}
				if (jimmy_players.indexOf(rowSet[i][2]) > -1) {
					row = document.getElementById(rowSet[i][2]); 
					row.insertCell(0).innerHTML = rowSet[i][2]; //name
					row.insertCell(1).innerHTML = rowSet[i][4]; //GP
					row.insertCell(2).innerHTML = rowSet[i][6]; //FG
					row.insertCell(3).innerHTML = rowSet[i][7]; //FGA
					row.insertCell(4).innerHTML = Number(rowSet[i][6]*1.0/rowSet[i][7]).toFixed(3); //FG%
					row.insertCell(5).innerHTML = rowSet[i][12]; //FT
					row.insertCell(6).innerHTML = rowSet[i][13]; //FTA
					row.insertCell(7).innerHTML = Number(rowSet[i][12]*1.0/rowSet[i][13]).toFixed(3); //FT%
					row.insertCell(8).innerHTML = rowSet[i][23]; //PTS
					row.insertCell(9).innerHTML = rowSet[i][17]; //REB
					row.insertCell(10).innerHTML = rowSet[i][18]; //AST
					row.insertCell(11).innerHTML = rowSet[i][9].toFixed(0); //3p
					row.insertCell(12).innerHTML = rowSet[i][19]; //STL
					row.insertCell(13).innerHTML = rowSet[i][20]; //BLK
					row.insertCell(14).innerHTML = rowSet[i][21]; //TO
					jimmy_total[1] += rowSet[i][4]; //GP
					jimmy_total[2] += rowSet[i][6]; //FG
					jimmy_total[3] += rowSet[i][7];
					jimmy_total[5] += rowSet[i][12];
					jimmy_total[6] += rowSet[i][13];
					jimmy_total[8] += rowSet[i][23];
					jimmy_total[9] += rowSet[i][17];
					jimmy_total[10] += rowSet[i][18];
					jimmy_total[11] += rowSet[i][9];
					jimmy_total[12] += rowSet[i][19];
					jimmy_total[13] += rowSet[i][20];
					jimmy_total[14] += rowSet[i][21];
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