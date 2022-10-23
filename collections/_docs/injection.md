---
layout: page
title: Content Injection
---

Despite the term "injection", this is not intended as a security vulnerability. This is a feature that allows you to inject content into your pages and collections. Most of the injection features are shared between pages; collections and site-wide - but there are some difference in how they may be used in context.

## API

### `styles`

> As `string`, accepted on `page` and `collection` namespaces.

This is a group of CSS rulesets that will be injected into the `<head>` of the page. It is possible to define standard CSS, make use of CSS variables and define media queries or animations.

<!--*This was originally a much more complex syntax closer to the representation of [SASS markup](https://sass-lang.com/)... but using yaml as your framework (therefore without any form of native inheritance).*-->

```yaml
# Page metadata
styles:
  body:
    background: >-
      linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)
```

{% include docs/header.html path="<namespace>.script" type="string" %}

<div class="alert alert-success">

Accepted on <code>page</code> and <code>collection</code> namespaces.

</div>

This is a string of JavaScript that will be injected into the `<head>` of the page.

```yaml
# Page metadata
script: |
  console.log('Hello from the home page!')

# Collection metadata
collections:
  my-collection: # ./collections/_my-collection
    script: |
      console.log("Hello from the collection.")
```

{% include docs/header.html path="<namespace>.metadata" type="Record<string, ${string}>" %}

*As `object`, accepted on `page`, `collection` and `site` namespaces (in that order).*

Injects key-value pairs of metadata tags into the `<head>` of the page. This is a simple key-value pair of strings.

<div class="alert alert-danger" role="alert"><h4>Danger</h4>
  <p>
    This field has a cascade effect, which will search each namespace and then merge the results together. 
  </p><p>
    This means that you can define a <code>metadata</code> field on the <code>site</code> namespace, and then override it on the <code>page</code> or <code>collection</code> namespace.
  </p>
  <hr>
  <p>
    <code>viewport</code> is a hard-coded exclusion, other than that you're free to define any metadata tag you want.
  </p>
</div>

```yaml
# Page metadata
metadata: # <meta name="{key}" content="{value}">
  title: "Home"
  description: "This is the home page"

# Collection metadata
collections:
  my-collection: # ./collections/_my-collection
    metadata: # <meta name="{key}" content="{value}">
      title: "My Collection"
      description: "This is my collection"

# Site metadata
metadata: # <meta name="{key}" content="{value}">
  title: "My Site"
  description: "This is my site"
```