
/* HELPERS */

const escapes = {
  '\\': '\\\\',
  '^': '\\^',
  '$': '\\$',
  '.': '\\.',
  '*': '\\*',
  '+': '\\+',
  '?': '\\?',
  '(': '\\(',
  ')': '\\)',
  '[': '\\[',
  ']': '\\]',
  '{': '\\{',
  '}': '\\}',
  '|': '\\|'
};

const unescapedRe = /[\\^$.*+?()[\]{}|]/g;

/* MAIN */

const escape = ( str: string ): string => {

  if ( str.length === 1 ) return escapes[str] || str;

  return str.replace ( unescapedRe, char => `\\${char}` );

};

/* EXPORT */

export default escape;
