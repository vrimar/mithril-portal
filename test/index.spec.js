import m from 'mithril';
import assert from 'assert';
import Portal from '../src/';

describe('mithril-portal', () => {
	let portal = null;
	let root = { view() { return portal } };

	it('Should append div to body', () => {
		portal = m(Portal);
		m.mount(document.body, root);
		assert.equal(document.body.lastChild, portal.state.rootElement);
		m.mount(document.body, null);
	});

	it('Should render children', () => {
		portal = m(Portal, m('.testing-content'));
		m.mount(document.body, root);
		assert(document.body.querySelector('.testing-content'));
	});

	it('Should update children on redraw', (done) => {
		const container = {
			updated: false,
			view(vnode) { return m(Portal, m(vnode.state.updated ? '.true' : '.false')) }
		}

		m.mount(document.body, container);
		assert(document.body.querySelector('.false'));

		container.updated = true;
		m.redraw();

		setTimeout(() => {
			assert(document.body.querySelector('.true'));
			done();
		}, 65);
	});

	it('Should remove portal div from body on unmount', () => {
		portal = m(Portal, m('.testing-content'));
		m.mount(document.body, root);
		assert(document.body.querySelector('.testing-content'));
		m.mount(document.body, null);
		assert(!document.body.querySelector('.testing-content'));
	});
});