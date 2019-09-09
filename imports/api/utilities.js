/** UTILITIES **
 * 
 */

// by bryc https://stackoverflow.com/a/52171480/1927589 
export const hash = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1>>>16, 2246822507)
       ^ Math.imul(h2 ^ h2>>>13, 3266489909);
    h2 = Math.imul(h2 ^ h2>>>16, 2246822507)
       ^ Math.imul(h1 ^ h1>>>13, 3266489909);

    return 4294967296 * (2097151 & h2) + (h1>>>0);
};



/**
 * Removes one or more items from an array, if they match the value
 * of the passed item, or if `item` is a function which return true
 * when it is fed an item from the array.
 *
 * @param   {string}   array      Any array
 * @param   {any}      item       Any value. If this is a function, it
 *                                will be applied to each value in
 *                                array in turn, until a match is 
 *                                found
 * @param   {boolean}  removeAll  If removeAll is truthy, all matching
 *                                items will be removed. If not, only
 *                                the item with the lowest index
 *                                number will be removed.
 * 
 * @return  {number}              Returns the number of items removed
 */
export const removeFrom = (array, item, removeAll) => {
  let index
  let found, success = 0

  do {
    if (typeof item === "function") {
      index = array.findIndex(item)
    } else {
      index = array.indexOf(item)
    }

    found = !(index < 0)
    if (found) {
      array.splice(index, 1)
      success += 1
    }
  } while (removeAll && found)

  return success
}



// https://stackoverflow.com/a/37580979/1927589
export const permute = (permutation) => {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}



function recursiveFind(object, string, path) {
  var found = false

  var keys = Object.keys(object)
  var total = keys.length
  for ( let ii = 0; ii < total; ii += 1 ) {
    var key = keys[ii]
    var value = object[key]
    var type = typeof value

    switch (type) {
      case "number":
      case "boolean":
      case "function":
      case "undefined":
      break

      case "string":
        if (value.indexOf(string) < 0) {
          // Not found yet
        } else {
          path.unshift(key)
          found = true
          return true
        }
      break

      case "object":
        if (value) {
          found = recursiveFind(value, string, path)
          if (found) {
            path.unshift(key)
            return true
          }
        }
      break

      default:
        console.log(type)
    }

  }

  return found
}