var html = "";

for (var i = 1; i <= 8; i++) {
	html = html + "<tr>";
	var isTheRowEven = isEven(i);
	for (var j = 1; j <= 8; j++) {
		var tileColor;
		if (!isTheRowEven) {
			if (isEven(j)) {
				tileColor = "black";

			} else {
				tileColor = "white"

			}
		} else {
			if (isEven(j)) {
				tileColor = "white"

			} else {
				tileColor = "black"
			}
		}
		 html = html + "<td style=\"background: "+tileColor+" ;\"></td>";
	}
	html = html + "</tr>";
}

document.getElementById("chessTable").innerHTML = html;

function isEven(number) {
	if (number % 2 === 0) {
		return true;
	}

	return false;
}