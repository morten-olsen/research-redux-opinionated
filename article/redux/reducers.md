## Reducers

So we have now established a standard for how a large part of our data will be queued and passed to the reducer, so let's see if we can't use this knowledge to make reducers easy to write.
Usually reducers are written as switch statements, but the issue with this approach is that it makes reuse very heard to achieve without a large amount of boilerplating in every reducer. Instead, objects can be used to much of the same effect as the switch statements, but can easily be extended using the spread operator.

- demo

Now that we have an easy way to extend our reducers and we know how data is received in most scenarios we can create some reusable functions for building our reducers. The two that I will create for this example is “details” and “list”, for when when working with a single result and when working with a list of results.

- demo

As can be seen from the examples, creating reducers for most of the standard operations are now a matter of a few lines. Since we are using the object approach, this is also easy to extend with additional methods which can not be standardized

-demo
