# sierpinski-carpet-cli
Print the [Sierpinski Carpet](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_carpet) to the console!

![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-banner.png)

[![npm version](https://img.shields.io/npm/v/sierpinski-carpet-cli)](https://www.npmjs.com/package/sierpinski-carpet-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/sierpinski-carpet-cli)](https://bundlephobia.com/package/sierpinski-carpet-cli)
[![downloads](https://img.shields.io/npm/dy/sierpinski-carpet-cli)](https://www.npmjs.com/package/sierpinski-carpet-cli)
[![license](https://img.shields.io/npm/l/sierpinski-carpet-cli)](https://github.com/spirometaxas/sierpinski-carpet-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx sierpinski-carpet-cli <n>
$ npx sierpinski-carpet-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global sierpinski-carpet-cli
$ sierpinski-carpet-cli <n>
$ sierpinski-carpet-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install sierpinski-carpet-cli
```
then:
```
const sierpinski = require('sierpinski-carpet-cli');
console.log(sierpinski.create(<n>);
console.log(sierpinski.create(<n>, { 
    size: <number>, 
    inverse: <boolean>, 
    character: <character> 
}));
```
The config params are optional. 

## Options
### Recursive Step  
```
$ sierpinski-carpet-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ sierpinski-carpet-cli 2
```
![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-2.png)

```
$ sierpinski-carpet-cli 3
```
![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-3.png)

### Size
```
$ sierpinski-carpet-cli <n> [size]
```
The optional `[size]` param allows the Sierpinski Carpet to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Sierpinski Carpet of `<n>` recursive steps the size of a Sierpinski Carpet with `[size]` recursive steps.  

#### Example:
```
$ sierpinski-carpet-cli 2 3
```
![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-2-3.png)

### Inverse
```
$ sierpinski-carpet-cli <n> --inverse
```
The optional `--inverse` param (or shorthand `-i`) will draw the inverse squares.  

#### Example:
```
$ sierpinski-carpet-cli 3 --inverse
```
![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-3-inverse.png)

### Custom Characters
```
$ sierpinski-carpet-cli <n> --character=<character>
```
The optional `--character=<character>` param will draw sqaures using the provided character.  (Please provide only 1 character)  

#### Example:
```
$ sierpinski-carpet-cli 2 3 --character=*
```
![What sierpinski-carpet-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-carpet-cli/main/img/sierpinski-carpet-2-3-character.png)

By default, squares are drawn using ANSI inverse codes: `\u001b[7m`.  To instead draw using unicode block characters, add the `--blocks` param (or shorthand `-b`).
```
$ sierpinski-carpet-cli <n> --blocks
```
(May look better/worse on certain terminals)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/sierpinski-carpet-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)
