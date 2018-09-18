"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
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
        mithril_1.default.mount(this.rootElement, this.content);
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
            mithril_1.default.mount(this.rootElement, null);
            container.removeChild(this.rootElement);
        }
    };
    Portal.prototype.view = function () {
        return mithril_1.default.fragment({}, '');
    };
    return Portal;
}());
exports.default = Portal;
//# sourceMappingURL=index.js.map