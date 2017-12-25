## Structure

The project are split into a few root level folders, where only a few are relevant for this article

Be aware that each project has it's own `webpack` config where both `./helpers`, `./shared` and the project specific folder (`./traditional`/`standardised`) are all project roots, so `import 'componets/some-component'` could resolve into any of these folders

### Supporting folders

* `./helpers`: This contains the abstraction layer we will introduce throughout this article (201 lines)

* `./shared`: The code which are not a part of this scope, such as the UI and the API middleware (241 lines)

### Projects

* `./traditional`: The classic way of writing actions and reducers (399 lines)

* `./standardised` The new way using standardisation of our API logic (91 lines)
