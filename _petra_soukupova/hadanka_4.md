---
layout: default
title: Čtvrtá hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>
<p>
<form name="myForm" onsubmit="return validateForm4()" method="post">
	Soukupová se jako scénáristka podílela na seriálu Comeback a ...? <input type="text" name="fname">
	<input type="submit" value="Submit">
</form>
</p>
<a href="{{ site.baseurl }}/uvody/soukupova_uvod.html" class="btn btn-info">Zpět</a>
</div>
<script src="{{ site.baseurl }}//assets/js/hadanky_ps.js"></script>