---
layout: archive
permalink: /calendar/archive/
title: Model EU Simulations Calendar Archive
date: 2016-01-17T02:00:16+01:00
modified:
excerpt:
tags: []
image:
  feature:
---

<div markdown="0">
{% assign conferences_grouped = site.conferences | group_by: 'year' | sort: 'name' | reverse %}
{% for group in conferences_grouped %}
  <h2 class="archive__subtitle">{{ group.items.first.year }}</h2>
  {% assign group_sorted = group.items | sort: 'begin' | reverse %}
  {% for conference in group_sorted %}
    {% assign partner = site.partners | where: 'slug', conference.partner-slug  | first %}
    <div class="list__item">
      <article class="archive__item">
        {% if conference.link %}
          <h2 class="archive__item-title"><a href="{{ conference.url | absolute_url }}" title="{{ conference.title }}">{{ conference.title }}</a> <a href="{{ conference.link }}" target="_blank" title="{{ conference.title }}"><i class="fa fa-link"></i></a></h2>
        {% else %}
          <h2 class="archive__item-title"><a href="{{ conference.url | absolute_url }}" title="{{ conference.title }}">{{ conference.title }}{% if conference.begin %} ({{ conference.begin | date_to_string }}){% endif %}</a></h2>
          <p class="archive__item-excerpt">{% if partner %}<em>by <a href="{{ partner.url | absolute_url }}">{{ partner.title }}</a></em><br/>{% endif %}{{ conference.excerpt | strip_html | truncate: 160 }}</p>
        {% endif %}
      </article>
    </div>
  {% endfor %}
{% endfor %}
</div>

[Model EU Calendar][calendar]{: .btn}

[calendar]: {{ site.baseurl }}{% link _pages/calendar.md %}
