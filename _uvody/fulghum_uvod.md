---
layout: default
title: Hádanky Robert Fulghum
order_number: 2
---
<html>
	<head>
		<meta charset="utf-8">
		<title>{{ page.title }}</title>
	</head>
	<body>
		<div class="uvod">
			<h1>{{ page.title }}</h1>
			<ul class="list-group list-group-flush">
				{% for hadanka in site.robert_fulghum %}
				<li class="list-group-item">
					<a href="{{ site.baseurl }}/{{ hadanka.url }}">{{ hadanka.title }}</a>
					<!-- {{ post.excerpt }} -->
				</li>
				{% endfor %}
			</ul>
		</div>
		<div>
		<a href="{{ site.baseurl }}" class="btn btn-info">Zpět</a>
		</div>
	</body>
</html>