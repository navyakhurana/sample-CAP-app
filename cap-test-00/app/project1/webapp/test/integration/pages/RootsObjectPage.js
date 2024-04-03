sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cap.test.project1',
            componentId: 'RootsObjectPage',
            contextPath: '/Roots'
        },
        CustomPageDefinitions
    );
});