---
layout: default
title: První hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>
<p>
<form name="myForm" onsubmit="return validateForm1()" method="post">
	Kterou knihu máš od Petry Soukupové podepsanou? <input type="text" name="fname">
	<input type="submit" value="Submit">
</form>
</p>
<a href="/uvody/soukupova_uvod.html">Zpět</a>

</div>
<script src="/assets/js/hadanky_ps.js"></script>