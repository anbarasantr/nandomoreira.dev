---
layout: snippets
path: '/snippets/wordpress/onmailerror.php'
title: 'onMailError()'
category: ['wordpress']
---

Teste erros na função wp_mail() no WordPress usando hooks.

<div class="language-filename">functions.php</div>

```php
function onMailError( $wp_error ) {
    echo '<pre>' . print_r($wp_error , true ) . '</pre>';
}

add_action( 'wp_mail_failed', 'onMailError', 10, 1 );
```
