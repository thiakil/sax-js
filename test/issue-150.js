require(__dirname).test({
  xml: '<r>&#x0;</r>',
  strict: true,
  expect: [
    ['opentag', {'name':'r', attributes:{}, isSelfClosing: false}],
    ['text', '\0'],
    ['closetag', 'r']
  ]
});
