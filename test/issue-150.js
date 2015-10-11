require(__dirname).test({
  xml: '<r>&#x0; &#x0000; &#60; &#x3c; &#00060; &#x0003c;</r>',
  strict: true,
  expect: [
    ['opentag', {'name':'r', attributes:{}, isSelfClosing: false}],
    ['text', '\0 \0 < < < <'],
    ['closetag', 'r']
  ]
});
