---
title: "Pay Membership"
excerpt: "Pay BETA Membership"
sitemap: false
share: false
comments: false
edit: false
permalink: /pay-membership/
---

The following tool is meant for BETA members to pay their fees.

This tool is in BETA. Only use on invitation by BETA HR.
{: .notice--danger}

[Pay Membership](#){: .btn .btn--primary #stripeButton}


{::comment}
References:

- https://stripe.com/docs/checkout#integration-custom
- https://github.com/alexmacarthur/netlify-lambda-function-example
- https://macarthur.me/posts/building-a-lambda-function-with-netlify/
{:/comment}

<script src="https://checkout.stripe.com/checkout.js"></script>

<script>
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

var handler = StripeCheckout.configure({
  // key: 'pk_live_1gz0SmUMlPWVoaiXtgJezHqP',
  key: 'pk_test_QWON4XJghKqnPLwdrYG499Lq',
  image: 'https://www.beta-europe.org/assets/images/apple-touch-icon-144x144-precomposed.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
    // window.location.replace('/pay-membership/success/');
    var form_name = `BETA Membership`
    var description = `Annual BETA e.V. Membership Fee`

    fetch(`https://www.beta-europe.org/.netlify/functions/purchase`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        amount: 1500, // in euro cent
        description: description,
        idempotency_key: uuidv4()
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
      window.location.replace('/pay-membership/success/')
    });
  }
});

document.getElementById('stripeButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: form_name,
    description: description,
    zipCode: false,
    billingAddress: true,
    amount: 1500,
    currency: 'EUR',
    allowRememberMe: false,
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
</script>
