var userEngine = require('../../data/users');
var caseEngine = require('../../data/cases');
var helpers    = require('../helpers');

function viewCaseSummary(req, res) {

	var c = helpers.getCase(req.session.cases, req.params.id);

	var pageObject = {
		success: req.session.success,
		casebar: helpers.getCaseBarObject(c.id),
		casenav: helpers.getCaseNavObject(c.id),
		detailsRows: [],
		panelRows: []
	};

	// Case details
	pageObject.detailsRows.push([{ html: 'Parties' }, {html: helpers.getPartiesLine(c.id)}]);
	pageObject.detailsRows.push([{ html: 'Case number' }, {html: c.id}]);
	pageObject.detailsRows.push([{ html: 'Case type' }, {html: c.benefit}]);
	pageObject.detailsRows.push([{ html: 'Tribunal centre' }, {html: c.tribunalCentre}]);
	pageObject.detailsRows.push([{ html: 'Additional requirements' }, {html: c.requirements}]);

	res.render('app/case/continuous-online-resolution/summary', pageObject);

}

exports.viewCaseSummary = viewCaseSummary;