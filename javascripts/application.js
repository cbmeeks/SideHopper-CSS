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
		var left = $(self).position().left;
		var right = $(self).position().right;

		hideMenu(); // clear any previous menu hover states

		menu = $("#" + self.getAttribute("data-menu"));
		$(menu).css({"left":left, "right":right});
		$(menu).live("mouseover", showMenu);
		$(menu).live("mouseout", hideMenu);
		showMenu();
	});
	
	$dropdown.click(function() {
		showMenu();
		return false;
	});
	
	$(menu).mouseover(function() {showMenu();});
	$(menu).mouseout(function() {hideMenu();});
	
});