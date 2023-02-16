
/* HELPERS */

const unescapedRe = /[\\^$.*+?()[\]{}|]/g;

/* MAIN */

const escape = ( str: string ): string => {

  return str.replace ( unescapedRe, char => `\\${char}` );

};

/* EXPORT */

export default escape;
