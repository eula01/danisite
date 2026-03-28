## e16z.com

## Usage

develop
```
yarn install
yarn run dev
```
build
```
yarn install
yarn run build
yarn run start
```

## Misc
- [MIT license](https://opensource.org/licenses/MIT)
- This site was forked from [Andrew Healey](https://healeycodes.com/articles)!

// no clue why i wrote the following but its probz no longer accurate
## refactoring notes

siteconfig:
- added linkedin config

meta:
- generally removed lots of things: titles, subtitles, dates, images, small bits of text
- lower cased mostly everything aside from my name
- changed site font to apple-system etc etc
- changed the secondary color to zima blue!
- changed the names of things, i.e. 'Articles' ——> 'writing', 'Projects' ——> 'code' (less syllables == good)
- removed everything to do with XSS
- removed everything to do with buttondown

index:
- removed most of the homepage, kept only the recent writings list
- wrapped the entire site into a two-panel vertical grid, so nav can go on the left

nav:
- moved nav to the left
- added linkedin link

postList:
- reformat date from text to yyy-mm-dd
- removed subtitle and tags

tags:
- cleaned up tags (minimalist++)

other:
- added react-popper, see it in action on the second bullet point on /about/ (you might have to wait for it to load a little)
- fixed runtime exception when you have less than 2 tags

minor details:
- i like putting this unicode char: (& # x2197 ;) (remove whitespaces) on most major links

todos:
- fix the _tiny tiny tiny_ bit of content shift on `about` page
- set the 'edit_url' thing
