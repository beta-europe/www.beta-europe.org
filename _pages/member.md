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
  {% for post in site.members %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<div class="grid__wrapper grid__partners">
</div>
[//]: # (Comment: ugly solution to a formating error with the previous grid not closing well)

# Observers
<div class="grid__wrapper grid__partners">
  {% for post in site.observers %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
