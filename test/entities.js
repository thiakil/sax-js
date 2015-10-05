require(__dirname).test({
  xml: '<r>&rfloor; ' +
       '&spades; &copy; &rarr; &amp; ' +
        '&lt; < <  <   < &gt; &real; &weierp; &euro;</r>',
  expect: [
    ['opentag', {'name':'R', attributes:{}, isSelfClosing: false}],
    ['text', '⌋ ♠ © → & < < <  <   < > ℜ ℘ €'],
    ['closetag', 'R']
  ]
});

require(__dirname).test({
  xml: '<!DOCTYPE doc [' +
'<!ELEMENT doc (#PCDATA)>' +
'<!ENTITY e SYSTEM "001.ent">' +
']>' +
'<doc>&e;</doc>',
  expect: [
    ['doctype', ' doc [<!ELEMENT doc (#PCDATA)><!ENTITY e SYSTEM "001.ent">]'],
    ['opentag', {'name':'doc', attributes:{}, isSelfClosing: false}],
    ['text', '001.ent'],
    ['closetag', 'doc']
  ]
});