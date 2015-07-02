import DS from 'ember-data';

var cookie = DS.Model.extend({
	name: DS.attr('string'),
	date: DS.attr('string'),
});

cookie.reopenClass({
	FIXTURES: [
		{id: 1, name: 'Oreo', date: moment().toDate()},
		{id: 2, name: 'Obleas', date: moment().toDate()},
		{id: 3, name: 'Cerealitas', date: moment().toDate()},
	]
});

export default cookie;


