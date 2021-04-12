sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "com/myorg/bpListUI5/model/models"], function (UIComponent, Device, models) {
    "use strict";
    return UIComponent.extend("com.myorg.bpListUI5.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});
//# sourceMappingURL=Component.js.map