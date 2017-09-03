const storage = {
  set: function(obj) {
    /* 格式: {key1: value1, key2: {k: v}} */
    if (!obj) {
      console.warn('object invalid');
      return;
    }

    for (var key in obj) {
      let value = obj[key];

      if (!key) {
        console.warn('key invalid');
        return;
      }

      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }

      if (obj.hasOwnProperty(key) && typeof value !== 'function') {
        localStorage.setItem(key, value);
      }
    }
  },

  get: function(key) {
    let result = {};

    try {
      result = localStorage.getItem(key);
      if (result && result[0] === "{") {
        result = JSON.parse(result);
      }
    } catch(e) {
      console.warn('not found value');
      console.error(e);
    }

    return result;
  },

  del: function(key) {
    try {
      localStorage.removeItem(key);
    } catch(e) {
      console.warn('can not remove item');
      console.error(e);
    }
  },

  append: function(key, target) {
    let source = this.get(key);

    if (typeof source !== 'object' || source === null) {
      source = {};
    }

    return this.set({ [key]: Object.assign(target, source)});
  }
};

export { storage };
