---
layout: archive
title: "Our Team Members"
permalink: /teammember/
author_profile: true
---

#This page is under development, apologies for any inaccuracies or incorrect information

BETA Europe is managed by its Management Board and Extended Management Board





{% include base_path %}

<div class="grid__wrapper grid__partners">
  {% for post in site.teammembers %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
