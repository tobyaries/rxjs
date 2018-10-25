function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

export default helloWorldGenerator;