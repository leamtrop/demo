class utils {
  constructor(options) {
    this.name = options.name;
  }

  someFunction(args) {
    console.log(this.name);
    console.log('someFunction');
    return args;
  }

  otherFunction(args = {}) {
    return args;
  }
}

export { utils };
