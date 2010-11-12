$(document).ready(function() {

	var $dropdown = $(".dropdown");
	var menu;
	
	function showMenu() {
		$(menu).show();
	}

	function hideMenu() {
		$(menu).hide();
	}
	
	$dropdown.hover(function() {
		var self = this;
		var toolbar = $(self).parent().parent();	// climb up tree to toolbar parent
		var left = $(toolbar).position().left + $(self).position().left;


		hideMenu(); // clear any previous menu hover states

		menu = $("#" + self.getAttribute("data-menu"));
		$(menu).css({ "left":left });
		$(menu).live("mouseover", showMenu);
		$(menu).live("mouseout", hideMenu);
		showMenu();
	});
		
	$(menu).mouseover(function() {showMenu();});
	$(menu).mouseout(function() {hideMenu();});
	
});