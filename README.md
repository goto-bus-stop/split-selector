# split-selector

Split a CSS selector group into its individual selectors.

[![NPM](https://nodei.co/npm/split-selector.png?compact=true)](https://nodei.co/npm/split-selector)

## Usage

```js
splitSelector('.red, .blue')
  // -> [ '.red', '.blue' ]

splitSelector('a[title="Someday, Somewhere"], strong')
  //-> [ 'a[title="Someday, Somewhere"]', 'strong' ]
```

## License

[MIT](./LICENSE)
