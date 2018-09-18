import m from 'mithril';
export interface IPortalAttrs {
    /** Callback invoked when the component is mounted */
    onContentMount?: (rootElement: HTMLElement) => void;
    /** Optional HTML element to mount to */
    container?: HTMLElement;
}
export default class Portal implements m.ClassComponent<IPortalAttrs> {
    private rootElement;
    private content;
    oncreate({ attrs, children }: m.CVnode<IPortalAttrs>): void;
    onbeforeupdate({ children }: m.CVnode<IPortalAttrs>): boolean;
    onremove({ attrs }: m.CVnode<IPortalAttrs>): void;
    view(): m.Vnode<any, any>;
}
