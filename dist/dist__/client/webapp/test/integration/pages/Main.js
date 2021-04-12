sap.ui.require([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";
    var sViewName = "com.myorg.bpListUI5.view.MainView";
    Opa5.createPageObjects({
        onTheMainPage: {
            viewName: sViewName,
            actions: {
                iPressTheButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        actions: new Press(),
                        errorMessage: "App does not have a button"
                    });
                }
            },
            assertions: {
                iShouldSeeTheTitle: function () {
                    return this.waitFor({
                        controlType: "sap.m.Title",
                        properties: {
                            text: "com.myorg.bpListUI5"
                        },
                        success: function () {
                            Opa5.assert.ok(true, "The page shows the correct title");
                        },
                        errorMessage: "App does not show the expected title com.myorg.bpListUI5"
                    });
                }
            }
        }
    });
});
//# sourceMappingURL=Main.js.map