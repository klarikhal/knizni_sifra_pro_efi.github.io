---
title: Onegin - hadanky
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
			<h1>Hádanky Evžen Oněgin</h1>
			<ul class="list-group list-group-flush  mb-4">
				{% for hadanka in site.evzen_onegin %}
				<li class="list-group-item">
					<a href="{{ site.baseurl }}/{{ hadanka.url }}">{{ hadanka.title }}</a>
					<!-- {{ post.excerpt }} -->
				</li>
				{% endfor %}
			</ul>
			 <a href="{{ site.baseurl }}" class="btn btn-info">Zpět</a>
		</div>
	</body>
</html>