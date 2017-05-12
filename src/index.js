import m from 'mithril';

const Portal = {
  rootElement: null,
  content: null,

  oncreate(vnode) {
    let rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
    this.rootElement = rootElement;
    this.content = { view: () => vnode.children };
    m.mount(this.rootElement, this.content);
  },

  onbeforeupdate(vnode) {
    this.content.view = () => vnode.children;
  },

  onremove(vnode) {
    if (document.body.contains(this.rootElement)) {
      m.mount(this.rootElement, null);
      document.body.removeChild(this.rootElement);
    }
  },

  view(vnode) {
    return m.fragment({}, []);
  }
}

export default Portal;