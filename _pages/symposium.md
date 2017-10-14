---
layout: archive
permalink: /symposium/
title: "MEU Symposium"
---

The MEU Symposium is a forum for organisers of MEU conferences and those who wish to organise one to meet and share their experience and best practices. The Symposium serves as a useful training event for MEU organisers as well as an annual convention of MEU organisers from all associations within the MEU network.

<div markdown="0">
{% capture written_year %}'None'{% endcapture %}
{% for post in site.symposium %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %} 
</div>