---
layout: archive
title: "Our Partners"
permalink: /partner/
author_profile: false

sidebar:
  - title: Become a Partner
    # image: "/assets/images/beta-logo-180-transparent.png"
    # image_alt: Logo of BETA Europe
    text:
      |
        Please [contact us](/contact/) to learn more about partnerships.
---

The network of BETA Europe is strong thanks to its partners.

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.partners %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
