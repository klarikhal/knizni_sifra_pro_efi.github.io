---
layout: default
title: Třetí hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>

<p>
 <form name="myForm" onsubmit="return validateForm3()" method="post">
Kde je pohřben "skutečný" Tom Riddle? <input type="text" name="fname">
<input type="submit" value="Submit">
</form> 
</p>

<div>
<h2>Nápovědy</h2>

<div>
<button onclick="help1()" class="btn btn-light"> Nápověda 1</button>
<p id="help1" style="display:none">Dvě slova</p>
</div>

<div>
<button onclick="help2()" class="btn btn-light">Nápověda 2</button>
<p id="help2" style="display:none">Hřbitov ve Skotsku</p>
</div>

<div>
<button onclick="window.location.href='{{ site.baseurl }}/uvody/hp_uvod.html'" class="btn btn-info">Zpět</button>
</div>
</div>
</div>
<script src="{{ site.baseurl }}//assets/js/hadanky_hp.js"></script> 