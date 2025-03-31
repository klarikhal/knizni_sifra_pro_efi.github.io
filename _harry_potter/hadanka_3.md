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


<h3>Nápovědy</h3>

<button onclick="help1()">Nápověda 1</button>
<p id="help1" style="display:none">Dvě slova</p>

<button onclick="help2()">Nápověda 2</button>
<p id="help2" style="display:none">Hřbitov ve Skotsku</p>




 <a href="{{ site.baseurl }}/uvody/hp_uvod.html">Zpět</a>

 </div>
<script src="/assets/js/hadanky_hp.js"></script> 