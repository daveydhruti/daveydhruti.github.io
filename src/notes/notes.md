---
layout: notes.njk
title: Notes
templateEngineOverride: njk,md
---

<section class="notes-list">
  {% for note in collections.notes %}
  <article class="note-item">
    <h2><a href="{{ note.url }}">{{ note.data.title }}</a></h2>
    <p class="note-date">{{ note.date | formatDate }}</p>
    {% if note.data.tags %}
    <p class="note-tags">
      {% for tag in note.data.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </p>
    {% endif %}
  </article>
  {% endfor %}
</section>
