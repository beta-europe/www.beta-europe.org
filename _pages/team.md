---
layout: archive
title: "Our Management Board"
permalink: /team/
author_profile: true
---
# Management Board 





{% include base_path %}

<div class="grid__wrapper grid__partners">
  {% for post in site.teammembers %}
    {% include archive-team.html type="grid" %}
  {% endfor %}
</div>

{% include feature_row id="extendedteammembers" type="left" %}

# Extended Management Board

<div class="grid__wrapper grid__partners">
  {% for post in site.extendedteammembers %}
    {% include archive-team.html type="grid" %}
  {% endfor %}
</div>
