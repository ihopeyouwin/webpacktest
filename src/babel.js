const babelFunc = async () => {
  return 'working';
}

babelFunc().then(console.log)

class Util {
  static id = Date.now()
}

console.log(Util.id)