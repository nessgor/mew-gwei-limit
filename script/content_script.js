$(function () {
    var $gweiLimitInput = $("span.dropdown-gas ul.dropdown-menu input[type='range']");
    $gweiLimitInput.on("focus select change", function () {
        if ($gweiLimitInput.val() == 99 && $gweiLimitInput.attr("max") == 99) {
            if (confirm("Some ICO limited the maximum Gwei to 99\nAre you sure to unleash the limit of Gwei?")) {
                $gweiLimitInput.attr("max", 999);
            }
        }
    });
});
