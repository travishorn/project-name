# Project Name

Tools for working with project names.

## Installation

```bash
npm install @travishorn/project-name
```

## Usage

### CLI

The only command available is `generate`, which will log a random project name to the console.

```sh
project-name generate
# A random, two-word project name will be logged to the console.
# Example: "Talented Support"
```

### API

The only function available is `generate`, which will return a random project name.

```javascript
import { generate } from "@travishorn/project-name";

console.log(await generate());
// A random, two-word project name will be logged to the console.
// Example: "Talented Support"
```

## Modifying the Word List

Words are stored in `src/adjectives.txt` and `src/nouns.txt`. You can modify the lists by editing these files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

If you modify the code, make sure to update the tests and documentation accordingly.

After modifying the code, make sure to run...

- `npm run format` to ensure consistency across the codebase.
- `npm run lint` to ensure there are no linting errors.
- `npm run test` to ensure all the tests pass.

## License

The MIT License (MIT)

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
