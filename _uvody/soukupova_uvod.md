---
title: Soukupova - hadanky
layout: default
order_number: 4
---
<html>
	<head>
		<meta charset="utf-8">
		<title>{{ page.title }}</title>
	</head>
	<body>
		<div class="uvod">
			<h1>Hádanky Petra Soukupová</h1>
			<ul>
				{% for hadanka in site.petra_soukupova %}
				<li>
					<a href="{{ site.baseurl }}/{{ hadanka.url }}">{{ hadanka.title }}</a>
					<!-- {{ post.excerpt }} -->
				</li>
				{% endfor %}
			</ul>
			 <a href="{{ site.baseurl }}" class="btn btn-info">Zpět</a>
		</div>
	</body>
</html>