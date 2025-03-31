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
			<ul>
				{% for hadanka in site.harry_potter %}
				<li>
					<a href="{{ site.baseurl }}/{{ hadanka.url }}">{{ hadanka.title }}</a>
					<!-- {{ post.excerpt }} -->
				</li>
				{% endfor %}
			</ul>
			<a href="{{ site.baseurl }}//">Zpět</a>
		</div>
	</body>
</html>