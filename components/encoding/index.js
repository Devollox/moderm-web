import { useEffect, useLayoutEffect } from 'react'

const Encoding =  (intervalId, id) => {
  useEffect(() => {
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
