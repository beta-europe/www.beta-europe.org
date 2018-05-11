---
layout: single
permalink: /calendar/
title: Model EU Simulations Calendar
date: 2016-01-17
modified:
excerpt:
tags: []
image:
  feature:
---

To ensure you never miss a Model EU event, please [join our community][join]
to follow our [news] learn about the next conferences of our partners.

[Join our Community][join]{: .btn .btn--primary} [Checkout the News][news]{: .btn .btn--primary} [Import our Calendar (.ics)][ics]{: .btn .btn--primary}

[join]: https://forum.beta-europe.org/signup
[news]: /news/
[ics]: {{ "/events.ics" | absolute_url }}



<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js
"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js"></script>

<script>
  var jQuery3 = jQuery.noConflict(true);
  jQuery3(document).ready(function() {
    jQuery3('#calendar').fullCalendar({
        events:'{{ "events.json" | absolute_url }}',
        
        header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listYear,month'
        },
        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
                listYear: { buttonText: 'list year', displayEventEnd: false },
                listWeek: { buttonText: 'list week' }
        },

        defaultView: 'month',
        navLinks: true // can click day/week names to navigate views
    })
});
</script>

<p><div id="calendar"></div></p>


[Archive of all Conferences][archive]{: .btn .btn--primary}

[archive]: {{ site.baseurl }}{% link _pages/calendar-archive.md %}
