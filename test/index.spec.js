global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')())

import m from 'mithril';
import mq from 'mithril-query';
import assert from 'assert';
import Portal from '../src/';

describe('mithril-portal', () => {

  beforeEach(() => document.body.innerHTML = '')

  it('Should append div to body', () => {
    const output = mq(Portal);
    assert.equal(document.body.lastChild, output.vnode.tag.rootElement);
  })

  it('Should render children', () => {
    const output = mq(Portal, m('h1', 'Children'));
    assert(document.body.lastChild.querySelector('h1'));
  })

  // it('Should update children on redraw', () => {
  // 	const output = mq(Portal);
  // 	output.vnode.children = m('h2', 'Updated children');
  // 	output.redraw();
  // 	assert(document.body.lastChild.querySelector('h2'));
  // })

  it('Should remove portal div from body on unmount', () => {
    const output = mq(Portal);
    output.onremove();
    assert.equal(document.body.childNodes.length, 0);
  })

})