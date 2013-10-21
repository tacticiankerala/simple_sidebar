describe("Sidebar", function(){
	var scope, controller, compile;
	beforeEach( module('directive.sidebar', 'directive/sidebar/sidebar.tpl.html', 'ui.state') );
	beforeEach(inject(function($rootScope, $controller, $compile){
		scope = $rootScope.$new();
		controller = $controller;
		compile = $compile;
	}));
	it("should render the sidebar items", function(){
		scope.sidebarOptions = {
			data: [{
				name: "Create Function",
				link: "/functions/create"
			}]
		};
		var html = compile("<div sidebar options='sidebarOptions'> </div>")(scope);
		scope.$apply();
		expect($.trim(html.find('li.item .name').eq(0).text())).toBe(scope.sidebarOptions.data[0].name);
		expect(html.find('li.item .name').eq(0).attr('href')).toBe('/#' + scope.sidebarOptions.data[0].link);
	});

	it("should hide sidebar in given urls", inject(function($state, $location){
		spyOn($location, 'path').andReturn('/login');
		scope.sidebarOptions = {
			data: [{
				name: "Create Function",
				link: "/functions/create"
			}],
			hide: ['/login']
		};
		var html = compile("<div sidebar options='sidebarOptions'> </div>")(scope);
		scope.$apply();
		expect(html.css('display')).toBe('none');
	}));
});