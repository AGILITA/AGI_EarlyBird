sap.ui.define(["com/myorg/bpListUI5/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.myorg.bpListUI5.controller.MainView", {
         _oBPData: [
            {
            "businessPartner": "9980000000",
            "customer": "",
            "supplier": "",
            "academicTitle": "",
            "authorizationGroup": "",
            "businessPartnerCategory": "1",
            "businessPartnerFullName": " XAGISUP",
            "businessPartnerGrouping": "BPEE",
            "businessPartnerName": " XAGISUP",
            "businessPartnerUuid": "fa163e63-04c7-1ed9-b4f5-acc3211c2319",
            "correspondenceLanguage": "DE",
            "createdByUser": "SAP_CUST_INI",
            "creationDate": "2019-09-10T00:00:00.000Z",
            "creationTime": {
            "hours": 9,
            "minutes": 28,
            "seconds": 50
            },
            "firstName": "",
            "formOfAddress": "",
            "industry": "",
            "internationalLocationNumber1": "0",
            "internationalLocationNumber2": "0",
            "isFemale": false,
            "isMale": false,
            "isNaturalPerson": "",
            "isSexUnknown": true,
            "genderCodeName": "",
            "language": "",
            "lastChangeDate": "2019-09-10T00:00:00.000Z",
            "lastChangeTime": {
            "hours": 9,
            "minutes": 41,
            "seconds": 28
            },
            "lastChangedByUser": "SAP_CUST_INI",
            "lastName": "XAGISUP",
            "legalForm": "",
            "organizationBpName1": "",
            "organizationBpName2": "",
            "organizationBpName3": "",
            "organizationBpName4": "",
            "organizationFoundationDate": null,
            "organizationLiquidationDate": null,
            "searchTerm1": "",
            "searchTerm2": "",
            "additionalLastName": "",
            "birthDate": null,
            "businessPartnerBirthDateStatus": "",
            "businessPartnerBirthplaceName": "",
            "businessPartnerIsBlocked": false,
            "businessPartnerType": "",
            "eTag": "SAP_CUST_INI20190910094128",
            "groupBusinessPartnerName1": "",
            "groupBusinessPartnerName2": "",
            "independentAddressId": "",
            "internationalLocationNumber3": "0",
            "middleName": "",
            "nameCountry": "",
            "nameFormat": "",
            "personFullName": "XAGISUP",
            "personNumber": "22794",
            "isMarkedForArchiving": false,
            "businessPartnerIdByExtSystem": "",
            "tradingPartner": "",
            "toBuPaIdentification": [],
            "toBuPaIndustry": [],
            "toBusinessPartnerAddress": [],
            "toBusinessPartnerBank": [],
            "toBusinessPartnerContact": [],
            "toBusinessPartnerRole": [],
            "toBusinessPartnerTax": [],
            "toCustomer": null,
            "toSupplier": null
            },
            {
                "businessPartner": "9980000101",
                "customer": "",
                "supplier": "",
                "academicTitle": "",
                "authorizationGroup": "",
                "businessPartnerCategory": "1",
                "businessPartnerFullName": "test7 test7",
                "businessPartnerGrouping": "BPEE",
                "businessPartnerName": "test7 test7",
                "businessPartnerUuid": "fa163e63-04c7-1eda-86d2-4a023423d65d",
                "correspondenceLanguage": "",
                "createdByUser": "SAP_SYSTEM",
                "creationDate": "2019-12-09T00:00:00.000Z",
                "creationTime": {
                "hours": 14,
                "minutes": 43,
                "seconds": 49
                },
                "firstName": "test7",
                "formOfAddress": "",
                "industry": "",
                "internationalLocationNumber1": "0",
                "internationalLocationNumber2": "0",
                "isFemale": false,
                "isMale": true,
                "isNaturalPerson": "",
                "isSexUnknown": false,
                "genderCodeName": "2",
                "language": "",
                "lastChangeDate": "2019-12-10T00:00:00.000Z",
                "lastChangeTime": {
                "hours": 10,
                "minutes": 11,
                "seconds": 15
                },
                "lastChangedByUser": "SAP_SYSTEM",
                "lastName": "test7",
                "legalForm": "",
                "organizationBpName1": "",
                "organizationBpName2": "",
                "organizationBpName3": "",
                "organizationBpName4": "",
                "organizationFoundationDate": null,
                "organizationLiquidationDate": null,
                "searchTerm1": "TEST7",
                "searchTerm2": "TEST7",
                "additionalLastName": "",
                "birthDate": "1800-01-01T00:00:00.000Z",
                "businessPartnerBirthDateStatus": "K",
                "businessPartnerBirthplaceName": "",
                "businessPartnerIsBlocked": false,
                "businessPartnerType": "",
                "eTag": "SAP_SYSTEM20191210101115",
                "groupBusinessPartnerName1": "",
                "groupBusinessPartnerName2": "",
                "independentAddressId": "",
                "internationalLocationNumber3": "0",
                "middleName": "",
                "nameCountry": "",
                "nameFormat": "",
                "personFullName": "test7 test7",
                "personNumber": "23495",
                "isMarkedForArchiving": false,
                "businessPartnerIdByExtSystem": "",
                "tradingPartner": "",
                "toBuPaIdentification": [],
                "toBuPaIndustry": [],
                "toBusinessPartnerAddress": [],
                "toBusinessPartnerBank": [],
                "toBusinessPartnerContact": [],
                "toBusinessPartnerRole": [],
                "toBusinessPartnerTax": [],
                "toCustomer": null,
                "toSupplier": null
                }],
        onInit() {
            this.getView().addEventDelegate({
                onAfterShow: this.onAfterShow,
              }, this);

        },
        
        onAfterRendering(){
            var that = this;
            console.log("hallo");
            var oJSONModel = new sap.ui.model.json.JSONModel();
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'business-partners',
                dataType: 'json',
                async: true,
                success: (data) => {
                    oJSONModel.setData(data);
                    that.getView().setModel(oJSONModel);
                },
                error: (err) => {
                  console.log(err);
                },
              });
        }
    });
});

