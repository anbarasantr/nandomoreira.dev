---
layout: snippets
path: '/snippets/javascript/shuffle-array.js'
title: 'shuffle-array.js'
category: ['javascript']
---

<div class="language-filename">shuffle-array.js</div>

```javascript
const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

// Exports.
module.exports = shuffleArray
```
