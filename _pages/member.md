---
layout: archive
title: "Our Members"
permalink: /member/
author_profile: true
Observers:
  - title: Observers
---

The network of BETA Europe is strong thanks to its members.



{% include map.html geojson="/members.geojson" %}

{% include base_path %}

# Full Members
<div class="grid__wrapper grid__partners">
  {% for post in site.members %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

{% include feature_row id="observers" type="left" %}

<div class="grid__wrapper grid__partners">
  <h1>Observers</h1>
  {% for post in site.observers %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
