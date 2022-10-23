---
layout: page
title: Home
metadata:
  title: "Home"
styles:
  body:
    background: >-
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1) 25%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.1) 75%,
        transparent
      )
script: |
  console.log('Hello from the home page!')
---

{% for collection in site.collections %}
{% unless collection.title %}{% continue %}{% endunless %}
- [{{ collection.title }}](/{{ collection.relative_directory | slice: 1, collection.relative_directory.size }})
{% endfor %}