---
layout: default
title: Bonusová hádanka
---
<html>
	<head>
		<meta charset="utf-8">
		<title>{{ page.title }}</title>
	</head>
	<body>
<div class="uvod">
<h1>{{ page.title }}</h1>

<p>
 <form name="myForm" onsubmit="return validateForm()" method="post">
Jaké je Chandlerovo prostřední jméno? <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
</p>
<p>
<img src="https://media2.giphy.com/media/XEIrffKGzZlaVQ2z80/giphy.gif?cid=ecf05e47cjpt2b1dkuac73n2d190iztvd4tn905zq9mu91im&ep=v1_gifs_search&rid=giphy.gif&ct=g">
</p>

 <a href="{{ site.baseurl }}" class="btn btn-info">Zpět</a>

 </div>
<script src="{{ site.baseurl }}//assets/js/bonus.js"></script>
	</body>
</html>