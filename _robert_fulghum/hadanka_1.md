---
layout: default
title: První hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>

<p>
 <form name="myForm" onsubmit="return validateForm1()" method="post">
Fulghum řekl, že kdyby tato osobnost byla jeho předkem, vysvětlilo by to jeho náklonnost k Čechům. O kom mluvil? <input type="text" name="fname">
<input type="submit" value="Submit">
</form> 
</p>

 <a href="{{ site.baseurl }}/uvody/fulghum_uvod.html">Zpět</a>

</div> 
<script src="/assets/js/hadanky_rf.js"></script> 