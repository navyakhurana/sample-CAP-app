sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/test/project1/test/integration/FirstJourney',
		'cap/test/project1/test/integration/pages/RootsList',
		'cap/test/project1/test/integration/pages/RootsObjectPage',
		'cap/test/project1/test/integration/pages/OtherRootsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RootsList, RootsObjectPage, OtherRootsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/test/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRootsList: RootsList,
					onTheRootsObjectPage: RootsObjectPage,
					onTheOtherRootsObjectPage: OtherRootsObjectPage
                }
            },
            opaJourney.run
        );
    }
);