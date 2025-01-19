# String Escape Regex

A tiny function for escaping a string to be used as the source in a regex.

## Install

```sh
npm install string-escape-regex
```

## Usage

```ts
import escape from 'string-escape-regex';

// Let's escape a string to be used in a regex

escape ( 'foo()' ); // => 'foo\\(\\)'
```

## License

MIT © Fabio Spampinato
