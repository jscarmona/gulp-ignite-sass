# gulp-ignite-sass

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-sass.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-sass)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-sass.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-sass.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-sass
```

## example

```js
import { task, watch } from 'gulp-ignite';
import sass from 'gulp-sass';

task('styles', sass, { src: './src/app.scss' });
watch('styles:watch', './src/**/*.scss', ['styles']);
```

## usage

Run sass compiling on src files.

```bash
$ gulp styles
```

##### options
- `src` - The source files that should be sassified. (**Default:** `['./client/app/app.scss']`)
- `dest` - The destination of the compiled css. (**Default:** `'./public/css'`)
- `options`
  - `sourcemap` - Enable or Disable sourcemaps. (**Default:** `false`)
  - `style` - Style in which to output css (expanded|nested|compact|compressed). (**Default:** `'expanded'`)
- `autoprefixer` - Options to pass through to autoprefixer. See [autoprefixer](https://github.com/postcss/autoprefixer#options) for available options
  - `browsers` - Browser versions to support. (**Default:** `['last 2 versions']`)
- `exitOnFail` - Whether or not to exit on fail. (**Default:** `true`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
