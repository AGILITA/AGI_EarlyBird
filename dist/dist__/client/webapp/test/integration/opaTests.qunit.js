QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require(["com/myorg/bpListUI5/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
//# sourceMappingURL=opaTests.qunit.js.map