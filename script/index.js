var grid = [["P","M","C","T","W","A","D","H","C","G"],
            ["Z","Y",7,5,"M",8,"D","D",3,"Y"],
            ["J","B","W","P",8,"H","J","R","X",8],
            ["A","W","A","V","U",2,"G","U",7,"U"],
            [7,"V","F",3,5,"N","Q","K",5,"J"]];



/* *****************************************
	
   ****************************************
 */



var getGridColumn = function(column) {

	   switch(column) {
	   		case 'A':
	   			return 0;
	   			break;
	   		case 'B':
	   			return 1;
	   			break;
	   		case 'C':
	   			return 2;
	   			break;
	   		case 'D':
	   			return 3;
	   			break;
	   		case 'E':
	   			return 4;
	   			break;
	   		case 'F':
	   			return 5;
	   			break;
	   		case 'G':
	   			return 6;
	   			break;
	   		case 'H':
	   			return 7;
	   			break;
	   		case 'I':
	   			return 8;
	   			break;
	   		case 'J':
	   			return 9;
	   			break;
	   }
}


var RetrieveResult = function(passcode) {

		if (passcode.search("]") > 0) {
			 return getGridCodeFromParsedBrackets(passcode);
		} else {
			return getGridCodeFromParsedString(passcode);
		}

		}
 
 var getGridCodeFromParsedBrackets = function(passcode) {

 	var gridCode = [];
 	var splitResult = ((passcode.split("]").toString()).split(",").toString()).split("[");
 	for (var arrayCount = 1;arrayCount<splitResult.length;arrayCount++) {
			var gridRow = splitResult[arrayCount].substring(1,2);
			var gridColumn = getGridColumn(splitResult[arrayCount].substring(0,1));
			gridCode.push(grid[gridRow-1][gridColumn]);
	}
	return gridCode.toString();
 }

 var getGridCodeFromParsedString = function (passcode) {

 	 var gridCode = [];
 	 var ParsedString = [];
 	 ParsedString.push(passcode.slice(0,2));
 	 ParsedString.push(passcode.slice(2,4));
 	 ParsedString.push(passcode.slice(4,6));
 	 console.log(ParsedString.toString());

 	 for (var arrayCount = 0; arrayCount < 3; arrayCount++) {
 	 	    var gridRow = ParsedString[arrayCount].substring(1,2);
			var gridColumn = getGridColumn(ParsedString[arrayCount].substring(0,1));
			gridCode.push(grid[gridRow-1][gridColumn]);	  
 	 }

 	 return gridCode.toString();
}

var getGridCode = function() {
	alert(RetrieveResult(document.getElementById("passcode").value.toUpperCase()));
}	   