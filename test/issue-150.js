require(__dirname).test({
  xml: '<r>&#x0;</r>',
  expect: [
    ['opentag', {'name':'R', attributes:{}, isSelfClosing: false}],
    ['text', '\0'],
    ['closetag', 'R']
  ]
});
