import m from 'mithril';
var Portal = /** @class */ (function () {
    function Portal() {
    }
    Portal.prototype.oncreate = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var rootElement = document.createElement('div');
        var container = attrs.container || document.body;
        container.appendChild(rootElement);
        this.rootElement = rootElement;
        this.content = { view: function () { return children; } };
        m.mount(this.rootElement, this.content);
        if (typeof attrs.onContentMount === 'function') {
            attrs.onContentMount(rootElement);
        }
    };
    Portal.prototype.onbeforeupdate = function (_a) {
        var children = _a.children;
        if (!this.content)
            return false;
        this.content.view = function () { return children; };
    };
    Portal.prototype.onremove = function (_a) {
        var attrs = _a.attrs;
        var container = attrs.container || document.body;
        if (container.contains(this.rootElement)) {
            m.mount(this.rootElement, null);
            container.removeChild(this.rootElement);
        }
    };
    Portal.prototype.view = function () {
        return m.fragment({}, '');
    };
    return Portal;
}());
export default Portal;
//# sourceMappingURL=index.js.map