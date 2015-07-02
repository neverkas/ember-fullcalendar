import Ember from 'ember';

export default Ember.Component.extend({

  store: null,
  modelName: null,
  showFullCallendar: false,
  showCustomCalendar: false,
  showListCalendar: false,
  controllerContent: null,

  didInsertElement: function(){
  	this.set('controllerContent', Ember.ArrayController.create({
  		content: null,
  	}));  	

    this.findModel(this.get('modelName'));
  },

  findModel: function(model){
  	var controller 	= this.get('controllerContent');
  	var results = this.store.find(model);
	controller.set('content', results);

	var _self = this;

  	results.then(function(xhr){
 	 	_self.showCalendar(xhr.content);
  	});
  },

  list: function(){
  	var data = this.get('controllerContent.content');
  	//return this.parseData(data);
  }.observes('controllerContent', 'controllerContent.content', 'controllerContent.content.@each'),

  parseData: function(data){
  	return $.map(data, function(item){ return {title:item._data.name, date: item._data.date} })
  },

  showCalendar: function(data){
  	var events = this.parseData(data);

    $('#calendar').fullCalendar({
    	events: events,
    	//events: this.get('list'),
    });
  }
});
