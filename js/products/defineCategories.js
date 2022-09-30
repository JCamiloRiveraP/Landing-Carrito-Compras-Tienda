/* jshint undef: true, unused: true */
/* global define: false */
define([
	'products/categories/modulos',

], function(){
	"use strict";

	var list = [];
	for(var i = 0; i<arguments.length; i++){
		list.push(arguments[i]);
	}

	return list;
});