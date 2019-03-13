---
layout: snippets
path: '/snippets/javascript/is-email.js'
title: 'is-email.js'
category: ['javascript']
---

Verifica se uma string é um endereço de email válido.

<div class="language-filename">is-email.js</div>

```javascript
// Email address matcher.
var matcher = /.+\@.+\..+/

/**
 * Loosely validate an email address.
 *
 * @param {string} string
 * @return {boolean}
 */

const isEmail = string => matcher.test(string)

// Exports.
module.exports = isEmail
```
