const readingListCtrl = require( "./readingListCtrl" );

module.exports = app => {
	app.post( "/api/reading-list", readingListCtrl.addBookToList );
	app.get( "/api/reading-list", readingListCtrl.getList );
};
