## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"
  integrity="sha384-KnPvYPx1poT554tHDV1nuYV9sOkh4cZPBvLZQlXgJmoRQZPdgQNwL50/xq9kynp9"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/languages/go.min.js"
  integrity="sha384-orYKHAs3chK3oDMQLy5ywrzoY8z9zvzfmNIjmVxKXioAUtwDhP+xf6THWYSI/43Y"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-amdMjFrQeV1IlGyVyYRGeUBxPp1NVz7WG5xs0heAwCiAZLj0ISxeJwiOTeom9RfS /es/languages/css.js
sha384-rLeEizUP6J+98gF7EZ4ngav3h+slU5SqCVDahqOoYBEdjzhWQ3g6XldnqR9BSlBR /es/languages/css.min.js
sha384-mxaIAuwA1l6te9LMbWwt9PNtaoRiwRk1/345TMC2UQtNTi1kjbhizCrSxaHAegHF /es/languages/javascript.js
sha384-r8C5XKdITWu1xHcHMIfmqgbWZTa0w/MPyAykL+WctwUoeTsEHBo5+jSSoHQ+qFy6 /es/languages/javascript.min.js
sha384-lt0gg86v1uEAI7/c2402dN+9T2iQXopS6OJ8P1jHo1uOZu1zIV5sX8vmlOLGozq0 /es/languages/json.js
sha384-UJwfLbfKiYs+crNOV1xJL6wDet7JiH/Kav6qZ9c+cOjar4piP1X0VQqwVE3RJt+z /es/languages/json.min.js
sha384-KIISJ1MIG4sJ5EmeehDSTxWDQLEV3xogIXFtI39eXo4DjSvbAIm6s6m0Ckw5OsxB /es/languages/scss.js
sha384-qTIHQ6M1cS8rvFci6dL2FprsPEsvR7KlWL271KM5K76FwC6VVGHaDL0HP4/YDzQA /es/languages/scss.min.js
sha384-+G97Y66qjmfAEeNK5AYrOqbLn/hBNX41qhtyiVW7z3Zq/1llyjGJr3gHmNi+AVKN /languages/css.js
sha384-FvHR2wIZNmDX0TgSuoOhAZRl6R5yRi26wu2/MVXDm1ZFCGJUvotj2RrvVLGC4y88 /languages/css.min.js
sha384-5vRFHgNazcqNV/wYjVV73vv/mmcguTGfUhutWTMzUdixVclmxoe32uu3C1i5U+b3 /languages/javascript.js
sha384-luOC72UPK+5vw8AmdAZNVaFIY8IN7MayLzqcVcnUdCCVug/rAyhze5dpWklUZW8b /languages/javascript.min.js
sha384-xRs5pKapNPranWV1tpWwbWD8FN6u6gwlBXWwW+3wcfgCrXtc+VuTjt6Ff2MZTUoZ /languages/json.js
sha384-BuKQB2q4LIWSYzKqO0qkAQOdYLvqUmSmzUtLZDkTHy5po4tY7DSEcu/r5555QON2 /languages/json.min.js
sha384-Pw/HuYa78ix1/THPAU1fbp4nN2tOT7inj88wIU0Y2HyhnwV6jigMIBNhzr+SLCVW /languages/scss.js
sha384-o1Gduq31NS1KqRP7OOK2ahBW/7+2WK3PxfaOnJoN12i6wpxzz0mc66xl+3IriZtw /languages/scss.min.js
sha384-Wqrx/ioUZPNbY79BV/8JALZcB0bJ1odrV7pBjWzE9vg5IqFR/Rlo304aLkl8/X7z /highlight.js
sha384-UzVs/uM/8+izU+Pt9HQhgK1EQd6tQnejfso1wFnkm/V0FCFsDlQYaeeMMgAkAVXZ /highlight.min.js
```

