---
title: "Signature Generator"
excerpt: "A tool to help to create standard-compliant signatures for BETA members."
sitemap: false
share: false
comments: true
permalink: /signature-generator/
---

The following tool is ment for BETA members to generate a standard-compliant email signature.

<style>
form {
  background-color: #f2f3f3;
  padding: 1em;
}
form legend {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
  color: #494e52;
  border: 0;
  white-space: normal;
  border-bottom: 0;
}
input {
  border: #f2f3f3;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.125);
}
</style>

{% raw %}
<div id="app">
  <form>
    <fieldset>
      <legend>Generate Signature:</legend>
      Forum username: <input size="30" type="text" v-model="username"><br>
      Phone: <input size="30" type="text" v-model="phone"><br>
      <!-- Email: <input size="30" type="text"><br> -->
    </fieldset>
    <a class="btn btn--info" v-on:click="generateSignature">Generate Signature</a>
  </form>
  <h2>Result</h2>
  <p>
    Please copy'n'paste the following text in your email signature. <br>
    Guides:
    <a href="https://support.google.com/mail/answer/8395" target="=_blank">Gmail</a>,
    <a href="https://support.mozilla.org/en-US/kb/signatures" target="=_blank">Thunderbird</a>,
    <a href="https://support.office.com/en-us/article/Change-an-email-signature-86597769-E4DF-4320-B219-39D6E1A9E87B" target="=_blank">Outlook</a>
  </p>
  <textarea rows="5" cols="80">{{ signature }}</textarea>
  <h2>Preview</h2>
  <pre>{{ signature }}</pre>
</div>
{% endraw %}

## Frequently Asked Questions

My title/name is wrong. What should I do?
:   The name and the title are imported from the forum. Please send a PM to [r.riemann](https://forum.beta-europe.org/u/r.riemann) to have it corrected.

What is the meaning of `-- ` (dash-dash-space)?
:   Good mail applications will remove the signature from replies and this character combination on a single line indicates the beginning of the signature.

How do the images work?
:    The images are emojicons and part of the font. They should work on all modern devices. If they do not work, most people will be clever enough to dinginguish between mail address and phone number.

My question is not covered here. What should I do?
:   If you have troubles, please ask for advice in the comment section here.

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      signature: '',
      username: 'j.doe',
      phone: '+49 12 12 12',
    },
    mounted: function () {
      this.$nextTick(function () {
        if(window.location.hash) {
          this.username = window.location.hash.substring(1);
          this.generateSignature();
        }
      })
    },
    methods: {
      generateSignature: function() {
        axios.get('https://forum.beta-europe.org/users/'+this.username+'.json')
        .then((response) => {
          console.log("hey");
          // this.signature = JSON.stringify(response.data, null, 2);
          var name = response.data.user.name;
          var title = response.data.user.title;
          var twitter = "@"+response.data.user.user_fields["1"];
          var linkedIn = response.data.user.user_fields["3"];
          var facebook = response.data.user.user_fields["4"];
          this.signature = `-- 
BETA e.V., ${title}
🌐 http://www.beta-europe.org
📧 ${this.username}@beta-europe.org
📞 ${this.phone}`
        })
        .catch((error) => {
          console.log(error.response.status);
          this.signature = "Error: "+error.response.statusText;
        });
      }
    }
  });
  window.addEventListener('load', function () {
  });
</script>
