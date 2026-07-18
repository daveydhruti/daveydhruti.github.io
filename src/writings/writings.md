---
layout: writings.njk
title: Writings
templateEngineOverride: njk,md
---

<section class="writings-list">
  {% for writing in collections.writings %}
  <article class="writing-item">
    <h2><a href="{{ writing.url }}">{{ writing.data.title }}</a></h2>
    <p class="writing-date">{{ writing.date | formatDate }}</p>
    {% if writing.data.tags %}
    <div class="writing-tags">
      {% for tag in writing.data.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</section>
