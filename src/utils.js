module.exports = {
  /**
   * Tries to find the specified element. If it fails, an error is thrown.
   * 
   * @param {DOMElement|string} el - An element or a selector.
   * 
   * @return {DOMElement}
   */
  mustFindElement(el, tagName) {
    const error = new Error('You must define a target element.');

    if (!el) {
      throw error;
    }

    if (typeof el === 'string') {
      el = document.querySelector(el);
      if (!el) {
        throw error;
      }
    }

    if (el.tagName.toLowerCase() !== tagName.toLowerCase()) {
      throw new Error(`The target element must be <${tagName}>.`);
    }

    // Yeah, we just assume an element was given...
    return el;
  },

  /**
   * Insert a text in the middle of the given string.
   * 
   * @param {String} string
   * @param {Number} index
   * @param {String} fragment
   * 
   * @return {String}
   */
  insertBetween(string, index, fragment) {
    const before = string.slice(0, index);
    const after = string.slice(index);
    return before + fragment + after;
  },

  /**
   * Remove a class of an element.
   * 
   * @param {DOMElement} $el
   * @param {String} className
   * 
   * @return {Void}
   */
  removeClass($el, className) {
    const classes = $el.className.split(' ');
    let finalValue = '';

    for (const c of classes) {
      if (c !== className) {
        finalValue += ` ${c}`;
      }
    }

    $el.className = finalValue.trim();
  },

  /**
   * Add a class to an element.
   * 
   * @param {DOMElement} $el
   * @param {String} className
   * 
   * @return {Void}
   */
  addClass($el, className) {
    const classes = $el.className.split(' ');
    if (!(~classes.indexOf(className))) {
      $el.className += ` ${className}`;
    }
    $el.className = $el.className.trim();
  },

  /**
   * Converts a DOM node list to array.
   * 
   * @param {DOMNodeList}
   * 
   * @return {Array}
   */
  toArray(children) {
    const slice = [].slice;
    return slice.call(children);
  },

  /**
   * Check if the needle is found in haystack.
   * 
   * @param {Mixed} needle
   * @param {Array} haystack
   * 
   * @return {Boolean}
   */
  inArray(needle, haystack) {
    return !!~haystack.indexOf(needle);
  },

  /**
   * Repeat a string.
   * 
   * @param {String} str
   * @param {Number} count
   * 
   * @return {String}
   */
  repeat(str, count) {
    let result = '';
    const double = str + str;
    const isOdd = (count % 2) !== 0;
    const length = Math.floor(count / 2);
    let i = 0;
    for (; i < length; i++) {
      result += double;
    }

    if (isOdd) {
      result += str;
    }

    return result;
  },

  /**
   * Remove part of a string.
   * 
   * >> removeFragment("0123456", 1, 3);
   * << "03456"
   * 
   * So, when start 1 and end 3, "0123456"
   *                               ^^
   *                             Removed
   */
  removeFragment(str, start, end) {
    return str.slice(0, start) +  str.slice(end);
  },

  /**
   * Convert a list to a character regex.
   * 
   * @param {Array} list
   * 
   * @return {RegExp}
   */
  listToCharacterRegex(list) {
    const chars = list.map(char => `\\${char}`).join('');
    return new RegExp(`^[${chars}]$`);
  }
};