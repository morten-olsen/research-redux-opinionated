## API

So the first thing we need to do is to learn the problem we have to solve, else it would be really hard to find a solution. So in our case the issue that we need to solve is that we have to bind our API to the redux store, create actions for the API and then bind our redux state to our components, and we need to do this as reusable, maintainable and with as little code as possible.

So according to our framing of the issue we have one thing which we can not change, which is the API, so this would be a good place to anchor our solution around.

The API we will be working with is a somewhat restful API, which gives us some standard behaviour to use:

Endpoints are bundled into a repository, with a get for searching, a get with ID to fetch a specific item, a post to create new entries, a delete with an ID to remove an item and a put with an ID to update an item

All responses are wrapped inside a response wrapper, which has a result property and some links

All entities has links, which is a dictionary where key is the name of an action which relates to the entity and its value being the API endpoint.

So now that we know what problem we are trying to solve, we can move on to the actual code.
