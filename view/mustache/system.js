import can from 'can/view/mustache/mustache';

export function translate(load) {
	return "define(['can/view/mustache/mustache'],function(can){"+
		"return can.view.preloadStringRenderer('"+load.metadata.pluginArgument+"',"+
			'can.Mustache(function(scope,options) { ' + new can.Mustache({
				text: load.source,
				name: load.name
			}).template.out + ' })'
		
		+")"+
	"})";
};
