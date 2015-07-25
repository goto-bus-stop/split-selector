# split-selector

Split a CSS selector group into its individual selectors.

```js
splitSelector('.red, .blue')
  // -> [ '.red', '.blue' ]

splitSelector('a[title="Someday, Somewhere"], strong')
  //-> [ 'a[title="Someday, Somewhere"]', 'strong' ]
```

## License

[MIT](./LICENSE)
