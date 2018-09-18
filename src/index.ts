import m from 'mithril';

export interface IPortalAttrs {
  /** Callback invoked when the component is mounted */
  onContentMount?: (rootElement: HTMLElement) => void;

  /** Optional HTML element to mount to */
  container?: HTMLElement;
}

export default class Portal implements m.ClassComponent<IPortalAttrs> {
  private rootElement: HTMLElement;
  private content: m.Component<any, any>;

  public oncreate({ attrs, children }: m.CVnode<IPortalAttrs>) {
    const rootElement = document.createElement('div');
    const container = attrs.container || document.body;
    container.appendChild(rootElement);
    this.rootElement = rootElement;

    this.content = { view: () => children };
    m.mount(this.rootElement, this.content);

    if (typeof attrs.onContentMount === 'function') {
      attrs.onContentMount(rootElement);
    }
  }

  public onbeforeupdate({ children }: m.CVnode<IPortalAttrs>) {
    if (!this.content) return false;
    this.content.view = () => children;
  }

  public onremove({ attrs }: m.CVnode<IPortalAttrs>) {
    const container = attrs.container || document.body;

    if (container.contains(this.rootElement)) {
      m.mount(this.rootElement, null);
      container.removeChild(this.rootElement);
    }
  }

  public view() {
    return m.fragment({}, '');
  }
}
