# PROMISSES

---

## Interesting methods

<br/>

**Promisse.all()** -> returns all promisses if all of this are resolved. Case an of them be rejected, the error is returned and anyone value is geted.

**Promisse.allSettled()** -> return all promisses, even anyone of them be rejected. Thus, we can filter all promisses that are resolved and ignore the reject, or any handling that you want.

**Promise.reject()** -> return a promisse that is handling like reject. Can be other promises or values.

**Promise.resolve()** -> return a promisse that is handling like resolve. Can be other promises or values.

**Promise.race(iterable)** -> receive a iterable item and return the first of them that be rejected or resolved.

**Promise.any(iterable)** -> receive a iterable item and return the first of them that be resolved. If all be rejected, throws a agreggate error, which extents **Error** e contains an array of rejection values.

if a iterable be a empty array, is resolved synchronously and a reject reason of agreggate error will be an empty array.
