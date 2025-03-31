---
layout: default
title: Hádanky Harry Potter
order_number: 1
---
<html>
	<head>
		<meta charset="utf-8">
		<title>{{ page.title }}</title>
	</head>
	<body>
		<div class="uvod">
			<h1>Hádanky Harry Potter</h1>
			<ul class="list-group list-group-flush  mb-4">
				{% for hadanka in site.harry_potter %}
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