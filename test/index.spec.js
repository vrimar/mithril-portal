import m from 'mithril';
import mq from 'mithril-query';
import assert from 'assert';
import Portal from '../src/';

describe('mithril-portal', () => {
  let portal = null;
  let root = { view() { return portal } };

  afterEach(() => m.mount(document.body, null));

  it('Should append div to body', () => {
    portal = m(Portal);
    m.mount(document.body, root);
    assert.equal(document.body.lastChild, portal.state.rootElement);
  });

  it('Should render children', () => {
    portal = m(Portal, m('h1', 'Children'));
    m.mount(document.body, root);
    assert(document.body.lastChild.querySelector('h1'));
  });

  it('Should update children on redraw', (done) => {
    const container = {
      updated: false,
      view: ({ state }) => m(Portal, state.updated ? 'true' : 'false')
    }

    m.mount(document.body, container);
    container.updated = true;
    m.redraw();

    setTimeout(() => {
      const a = document.body.lastChild.textContent;
      assert.equal(document.body.lastChild.textContent, 'true');
      done();
    }, 20);
  });

  it('Should remove portal div from body on unmount', () => {
    portal = m(Portal, m('h1', 'Children'));
    m.mount(document.body, root);
    m.mount(document.body, null);
    assert.equal(document.body.childNodes.length, 0);
  });
});