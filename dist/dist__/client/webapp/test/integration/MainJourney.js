sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/Main"
], function (opaTest) {
    "use strict";
    opaTest("Should see the page", function (Given, When, Then) {
        Given.iStartMyApp();
        Then.onTheMainPage.iShouldSeeTheTitle();
        Then.iTeardownMyApp();
    });
});
//# sourceMappingURL=MainJourney.js.map