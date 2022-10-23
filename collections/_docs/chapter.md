---
layout: page
title: Chapter Documentation
#styles:
#  "@keyframes slide":
#    "0%":
#      transform: translateX(0)
#    "100%":
#      transform: translateX(100%)
#  h2:
#    animation: slide 1s ease-in-out
#    animation-iteration-count: infinite
#    animation-direction: alternate
#    animation-duration: 3s
---

## `page.*`

The `page` object is a collection of metadata that is specific to the current page. This object is available in all pages and layouts.

- `page.next`, `page.previous`: Page (circular)

### `page.authors`

> `string[]`

A list of authors for the chapter. Each serves as a base reference for the entries within the chapter. The 'name' given to each author is used to reference the author from the collection of the chapter.

```yaml
# Chapter metadata
title: Chapter 1
authors: # collection.authors.*
  - Author 1
  - Author 2
```

<h3 id="page.collection"><code>page.collection</code>: <code>string</code></h3>

### `page.collection`: `string`

{% include docs/header.html path="page.collection" type="string" %}

This is filled in automatically by Jekyll, but is only provided as a string for reference to it's actual collection object.

> See [Collections](./collection) for more information.

{% raw %}
```liquid
{% assign collection = site.collections | find: "label", page.collection %}
```
{% endraw %}