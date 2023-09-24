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
			<ul>
				{% for hadanka in site.evzen_onegin %}
				<li>
					<a href="{{ hadanka.url }}">{{ hadanka.title }}</a>
					<!-- {{ post.excerpt }} -->
				</li>
				{% endfor %}
			</ul>
			<a href="/">Zpět</a>
		</div>
	</body>
</html>