---
layout: default
title: Pátá hádanka
---
<div class="uvod">
<h1>{{ page.title }}</h1>

<p>
 <form name="myForm" onsubmit="return validateForm5()" method="post">
Jaké je latinské motto Bradavic? Každé slovo začni velkým písmenem.<input type="text" name="fname">
<input type="submit" value="Submit">
</form> 
</p>

<a href="{{ site.baseurl }}/uvody/hp_uvod.html" class="btn btn-info">Zpět</a>

<script src="{{ site.baseurl }}//assets/js/hadanky_hp.js"></script> 