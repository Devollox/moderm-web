---
title: Next.js Theme
description: Switch theme next.js 14.0
slug: nextjs-theme
date: April 29, 2024
---

To change the theme on this site, I went through many libraries. First I wrote this script:

```javascript
import React, { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
```

But... This is not what I expected, on the old site where `React` was used, this code worked 100% and I expected the
same thing, but as we know `Next,js` is a northern framework, and it works very poorly with `HTML` and that’s why I went
to look for libraries.

I found `Next-Theme`. The code, of course, was really incomprehensible, and I began to study it. I needed to link it to
the CMDK.

```javascript
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
```

This is the only component that binds the `data-theme`, gives it some name, and we add the address itself to the css.

```css
[data-theme='light'] {
    --bg: #fff;
    --fg: #000;
    --gray: #888;
    --light-gray: #dedede;
    --lighter-gray: #f5f5f5;
    --lightest-gray: #fafafa;
    --article-color: #212121;
    --gray-bg: #00000;
    --kbd-bg: #fffff;
    --header-bg: rgba(255, 255, 255, 0.8);
    --gray-alpha: rgba(19, 20, 21, 0.5);
    --selection: rgba(0, 0, 0, 0.99);

    --token: #666;
    --comment: #999;
    --keyword: #000;
    --name: #333;
    --highlight: #eaeaea;
}
```

After studying the library, I made the following code, which I linked to a button in the CMDK.

```javascript
const ThemeItems = () => {
  const { theme: activeTheme, themes, setTheme } = useTheme()
  const { setOpen } = useCommandData()

  return themes.map(theme => {
    if (theme === activeTheme) return null
    return (
      <Item
        value={theme}
        key={`theme-${theme}`}
        callback={() => {
          setTheme(theme)
          setOpen(false)
        }}
      >
        {theme}
      </Item>
    )
  })
}

...
<Item
  value="Themes"
  icon={<Sparkles />}
  keybind="t"
  closeOnCallback={false}
/>
...
```

The code works, I have no complaints, so to speak, there were problems with displaying the default theme, but this was
quickly fixed.