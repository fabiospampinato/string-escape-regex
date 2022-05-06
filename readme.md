# String Escape Regex

A tiny function for escaping a string to be used as the source in a regex.

## Install

```sh
npm install --save string-escape-regex
```

## Usage

```ts
import escape from 'string-escape-regex';

escape ( 'foo()' ); // => 'foo\\(\\)'
```

## License

MIT © Fabio Spampinato
