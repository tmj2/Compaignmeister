type KeyTypes<T> = {
  [K in keyof T]-?: K extends string
    ? string
    : K extends number
    ? number
    : K extends symbol
    ? symbol
    : never;
}[keyof T];

/**
 * Fix unexpected behavior of Typescript's `keyof` operator
 * @see https://github.com/microsoft/TypeScript/issues/23724
 */
export type KeyOfType<T, KeyType extends PropertyKey = KeyTypes<T>> = Extract<keyof T, KeyType>;
