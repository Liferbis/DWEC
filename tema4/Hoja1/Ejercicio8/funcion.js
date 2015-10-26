addEventListener('load', tabla, false);

function tabla(){
	var c=1;
	document.write("<table border='1'>");

	for (var i = 0; i <10; i++) {
		document.write("<tr>");

		for (var a = 0; a <10; a++) {
			document.write("<td>"+c+"</td>");
			c++;
		}

		document.write("</tr>");
		
	};
	document.write("</tr></table>");
}