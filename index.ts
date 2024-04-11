// Do not write code directly here, instead use the `src` folder!

// What you should do here is re-exports all the things you want your user to access, ex:
// export type { HelloWorldResult } from "./src/types.ts"

export { SumOfTwoValues } from "./src/main.ts"
export { default as Hello } from './src/Hello.astro';
export { default as Header } from './src/Header.astro';

import Component from './src/Component.astro';
export default Component;