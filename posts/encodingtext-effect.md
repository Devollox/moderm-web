---
title: Encoding Text Effects
description: Text scrolling effect.
slug: encodingtext-effect
date: May 27, 2024
---

How could you change the look of the site, when I started creating the `Computer` page, I decided to change something, add some interest to this site. I decided to make an encoding effect.

```javascript
import { useLayoutEffect } from 'react'

const Encoding =  (intervalId, id) => {
  useLayoutEffect(() => {
    const targetText = document.getElementById(`${id}`);
    if (targetText !== null) {
      const targetString = targetText.textContent;
      const alphabet = " abcdefghijklmnopqrstuvwxyz";
      const interval = intervalId;

      function getRandomChar() {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      function animateText() {
        let currentString = Array(targetString.length).fill("");
        let index = 0;

        const intervalId = setInterval(() => {
          for (let i = 0; i < currentString.length; i++) {
            if (i < index) {
              currentString[i] = targetString[i];
            } else {
              currentString[i] = getRandomChar();
            }
          }

          targetText.textContent = currentString.join("");

          if (index >= targetString.length) {
            clearInterval(intervalId);
          } else {
            index++;
          }
        }, interval);
      }

      animateText()
    }
  })
}

export default Encoding
```
On the pages and in the headers you can already notice this effect working. All that remains is to figure out how to make it work asynchronously. To me it looks simply cool and pleasing to the eye.
