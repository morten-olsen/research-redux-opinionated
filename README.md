## Introduction



## Structure

The project are split into a few root level folders, where only a few are relevant for this article

Be aware that each project has it's own `webpack` config where both `./helpers`, `./shared` and the project specific folder (`./traditional`/`standardised`) are all project roots, so `import 'componets/some-component'` could resolve into any of these folders

### Supporting folders

* `./helpers`: This contains the abstraction layer we will introduce throughout this article (201 lines)

* `./shared`: The code which are not a part of this scope, such as the UI and the API middleware (241 lines)

### Projects

* `./traditional`: The classic way of writing actions and reducers (399 lines)

* `./standardised` The new way using standardisation of our API logic (91 lines)



## API

So the first thing we need to do is to learn the problem we have to solve, else it would be really hard to find a solution. So in our case the issue that we need to solve is that we have to bind our API to the redux store, create actions for the API and then bind our redux state to our components, and we need to do this as reusable, maintainable and with as little code as possible.

So according to our framing of the issue we have one thing which we can not change, which is the API, so this would be a good place to anchor our solution around.

The API we will be working with is a somewhat restful API, which gives us some standard behaviour to use:

Endpoints are bundled into a repository, with a get for searching, a get with ID to fetch a specific item, a post to create new entries, a delete with an ID to remove an item and a put with an ID to update an item

All responses are wrapped inside a response wrapper, which has a result property and some links

All entities has links, which is a dictionary where key is the name of an action which relates to the entity and its value being the API endpoint.

So now that we know what problem we are trying to solve, we can move on to the actual code.



## Middleware

So in order to be able to query the API we need a middleware. I will not get into details about this as this is not really something we will opinionate, but the format we define for working with the API will become relevant later.



## Actions

Now we can get into some actual standardisation. The API as we looked upon before has a predefined schema, so our actions should reflect that. What we could do here was to create a “repository creator”, which would create an object containing all the actions we know is going to be available to use.



## Reducers

So we have now established a standard for how a large part of our data will be queued and passed to the reducer, so let's see if we can't use this knowledge to make reducers easy to write.
Usually reducers are written as switch statements, but the issue with this approach is that it makes reuse very heard to achieve without a large amount of boilerplating in every reducer. Instead, objects can be used to much of the same effect as the switch statements, but can easily be extended using the spread operator.

- demo

Now that we have an easy way to extend our reducers and we know how data is received in most scenarios we can create some reusable functions for building our reducers. The two that I will create for this example is “details” and “list”, for when when working with a single result and when working with a list of results.

- demo

As can be seen from the examples, creating reducers for most of the standard operations are now a matter of a few lines. Since we are using the object approach, this is also easy to extend with additional methods which can not be standardized

-demo



## Entity container



## List container



## Conclusion
