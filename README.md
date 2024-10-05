# TailWind CSS Guides

This repository includes some simple but important Tailwind and CSS studies.
On Chrome, remember to click `F12` to open the `dev console` and check the `html` rendered with `tailwind properties`.

Check the [`tailwind documentation`](https://tailwindcss.com/docs), it's very well done.

If you already understand CSS it's a quick jump into start using tailwind to cut time in the dev ops.

This repository still with a "dinamically lesson loading" problem in "after-deploy" because I couldn't find a way to make the deployed code find the Lessons automatically.
Probably I'm going to load manually the lessons.
But, if you want to check the project running "well", clone this repository and in dev mode it should work fine! `npm run dev`

## Display Flex - Grid
I started with `parent-elements` with `flex` and `grid` styles with `buttons` as `child-elements` and with `div -> buttons` to check the differences.

- `justify-items`, `justify-content`, `justify-self` and its behaviours
- `align-items`, `align-content`, `align-self` and its behaviours

## Layout Patterns
- There's a simple layout pattern used in [Tailwind Documentation Page](https://tailwindcss.com/docs) that I replied in this mini-lesson trying to simplify and show dinamic code on screen.
- This patterns consists in divide the content in 3 columns (left bar, content and documentation in the right), but in very-small screens just the two first colums appear stacked (the third one is hidden).