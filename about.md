---
layout: page
title: About me
permalink: /about/
---

<img src="{{ site.url }}/assets/me.jpg" alt="Me" style="width:25%;">


Research Scientist at Apple Machine Learning Research, adjunct professor at Universitat Autonoma de Barcelona and ELLIS member. My main research interest is on machine learning methods that generalize with fewer labeled data, closer to how humans learn. Previously, I was a research lead at ServiceNow Research and a Research Scientist at Element AI. I did a PhD on Deep Learning and Computer Vision at CVC-UAB. Before, I finished the Master of Artificial Intelligence at KU Leuven. I would like AI to solve the most important problems of humanity.
{: .text-justify}

### Contact me

<div style="display: flex; align-items: center; gap: 15px;">
  <a href="#" id="about-email" title="Email me" style="color: inherit; text-decoration: none;">
    <i class="fa fa-envelope fa-lg"></i>
  </a>
  <a href="https://github.com/prlz77" target="_blank" title="GitHub" style="color: inherit; text-decoration: none;">
    <i class="fa fa-github fa-lg"></i>
  </a>
</div>

<script>
  (function() {
    var rawEmail = '{{ site.data.cv.mail }}';
    var email = rawEmail.replace(/\[\s*at\s*\]/g, '@').replace(/\[\s*dot\s*\]/g, '.').replace(/\s/g, '');
    var emailLink = document.getElementById('about-email');
    emailLink.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        this.innerHTML = email;
        this.href = 'mailto:' + email;
        window.location.href = 'mailto:' + email;
      }
    });
  })();
</script>


[github]: https://github.com/prlz77
