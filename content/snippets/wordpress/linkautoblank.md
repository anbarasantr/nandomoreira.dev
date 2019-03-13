---
layout: snippets
path: '/snippets/wordpress/linkautoblank.php'
title: 'linkAutoblank()'
category: ['wordpress']
---

Função que adicionar o atributo `target="_blank"` em todos os links do conteúdo de um post ou página.

<div class="language-filename">functions.php</div>

```php
function linkAutoblank( $text ) {
    return = str_replace('<a', '<a target="_blank"', $text);
}

add_filter('the_content', 'linkAutoblank');
```
