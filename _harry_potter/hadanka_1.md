---
layout: default
title: První hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>

<p>
 <form name="myForm" onsubmit="return validateForm1()" method="post">
Uveď jedno křestní jméno Brumbála kromě Albuse: <input type="text" name="fname">
<input type="submit" value="Submit">
</form> 
</p>

 <a href="{{ site.baseurl }}/uvody/hp_uvod.html">Zpět</a>
</div>
 
<script src="{{ site.baseurl }}/assets/js/hadanky_hp.js"></script> 