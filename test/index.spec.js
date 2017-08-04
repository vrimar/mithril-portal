import m from 'mithril';
import assert from 'assert';
import Portal from '../src/';

describe('mithril-portal', () => {
	it('Should render children', () => {
		const container = {
			view(vnode) { return m(Portal, m('.testing-content')) }
		}
		m.mount(document.body, container);
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
		const container = {
			view(vnode) { return m(Portal, m('.testing-content')) }
		}
		m.mount(document.body, container);
		assert(document.body.querySelector('.testing-content'));
		m.mount(document.body, null);
		assert(!document.body.querySelector('.testing-content'));
	});
});