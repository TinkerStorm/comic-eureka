---
layout: page
title: Collection Documentation
---
{% include docs/header.html path="page" level=2 link="https://jekyllrb.com/docs/variables/#page-variables" %}

*Inherited from the Jekyll documentation.*

The `page` object is a collection of metadata that is specific to the current page. This object is available in all pages and layouts.

---

*Provided by this instance (`page.*`).*

{% include docs/header.html path="collection" level=2 link="https://jekyllrb.com/docs/collections/#collections" %}

*Inherited from the Jekyll documentation.*

A collection is a group of documents that are treated as a single unit. For example, you might have a collection of blog posts, or a collection of products on your e-commerce site. Each collection is defined in the `_config.yml` file, and each document in the collection is a file in the corresponding directory.

{% include docs/header.html path="collection.docs" type="Document[]" link="https://jekyllrb.com/docs/collections/#documents" %}

{% include docs/header.html path="collection.files" type="StaticFile[]" link="https://jekyllrb.com/docs/static-files/" %}
---

*Provided by this instance (`collection.*`).*

- `title`: `string` - The title of the collection.
  > Should only exist in the `_config.yml` file if it has pages with any `collections/*` layout.
- `styles`, `script` and `metadata` - See [Content Injection](/docs/injection/).

Inherited from Jekyll. This is a list of all files within the collection.

{% include docs/header.html path="collection-index" type="Collection" %}

The collection from Jekyll's `site.collections` array. This is filled by the context injection on all pages *if `page.collection` is available*.

{% include docs/header.html path="collection-root" type="Page?" %}

The root page of the collection. This is filled by the context injection on all pages *if `page.collection` is available*.

{% include docs/header.html path="collection-root.authors" type="Record<string, Author>" level=3 %}

A list of authors for the collection. Each serves as a base reference for the chapters within the collection. The 'name' given to each author is used to reference the author in the chapter entries.

| Field        | Type     | Description                      |
|--------------|----------|----------------------------------|
| **`name`**   | `string` | The name of the author.          |
| **`url`**    | `string` | The URL to the author's profile. |
| **`avatar`** | `string` | The URL to the author's avatar.  |

```yaml
# Collection metadata
collections:
  my-collection: # ./collections/_my-collection
    authors:
      author-1: # ./collections/_my-collection/authors/author-1.md
        name: Author 1
        url: https://example.com
        avatar: https://example.com/avatar.png
      author-2: # ./collections/_my-collection/authors/author-2.md
        name: Author 2
        url: https://example.com
        avatar: https://example.com/avatar.png
```