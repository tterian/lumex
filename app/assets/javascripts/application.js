// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require lumx
//= require velocity
//= require_tree .

var listerApp = angular.module('listerApp', ['lumx']);

var cars = [
	{
		make: "BMW",
		model: "5 series Gran Turismo",
		year: "2014",
		price: 60200,
		description: "Fast got even faster",
		soldOut: false,
		images: [
			"assets/bmw/5-series/bmw_01_cropped.jpg",
			"assets/bmw/5-series/bmw_02_cropped.jpg",
			"assets/bmw/5-series/bmw_03_cropped.jpg"
		]
	},
	{
		make: "Audi",
		model: "A6",
		year: "2015",
		price: 44800,
		description: "For luxury lovers",
		soldOut: false,
		images: [
			"assets/audi_01.jpg",
			"assets/audi_02.jpg",
			"assets/audi_03.jpg"
		]
	}];

listerApp.controller('CarsController', function(){
	this.cars = cars;
});
