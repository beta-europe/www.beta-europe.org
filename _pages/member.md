---
layout: archive
title: "Our Members"
permalink: /member/
author_profile: true
---

The network of BETA Europe is strong thanks to its members.

# Full Members

{% include map.html geojson="/members.geojson" %}

{% include base_path %}

<div class="grid__wrapper grid__partners">
  {% int postcounter = 0 %}
  {% int remainder = 0 %}
  {% for post in site.members %}
    {% include archive-single.html type="grid" %}
    {% postcounter++ %}
  {% endfor %}
  {% remainder = postcounter%4 %}
  {% while remainder > 0 %}
    {% include  %}
    {% remainder-- %}
</div>



<h1>{{"Observers"}}</h1>

<div class="grid__wrapper grid__partners">
  {% for post in site.observers %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
