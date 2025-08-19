export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _com_sap_edm_sampleservice_v4 = context.executeAction('/EarlyBird_MDKSample/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_com_sap_edm_sampleservice_v4]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/EarlyBird_MDKSample/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}