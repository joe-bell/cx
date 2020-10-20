export interface CreateCxShortcuts {
  [key: string]: string | string[];
}

const flat = (arr: any[]): any[] =>
  arr.reduce((acc, cv) => acc.concat(Array.isArray(cv) ? flat(cv) : cv), []);

export const createCx = <T extends CreateCxShortcuts>(shortcuts: T) => {
  return (...classNames: (keyof typeof shortcuts | ({} & string))[]): string =>
    flat(
      classNames.map(className =>
        shortcuts.hasOwnProperty(className) ? shortcuts[className] : className
      )
    )
      .filter(Boolean)
      .join(" ");
};
