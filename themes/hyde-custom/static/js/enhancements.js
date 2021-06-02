var filterType = "";

function updateGridFilter(newFilter) {
    filterType = newFilter;
    if (filterType == "software") {
        $("#software-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#hardware-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#educational-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#professional-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");


        $("#filterable-grid").removeClass("grid-show-all");
        $("#filterable-grid").addClass("grid-show-software");
        $("#filterable-grid").removeClass("grid-show-hardware");
        $("#filterable-grid").removeClass("grid-show-educational");
        $("#filterable-grid").removeClass("grid-show-professional");
        $("#clear-experience-filter").show();
    } else if (filterType == "hardware") {
        $("#software-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#hardware-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#educational-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#professional-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");

        $("#filterable-grid").removeClass("grid-show-all");
        $("#filterable-grid").removeClass("grid-show-software");
        $("#filterable-grid").addClass("grid-show-hardware");
        $("#filterable-grid").removeClass("grid-show-educational");
        $("#filterable-grid").removeClass("grid-show-professional");
        $("#clear-experience-filter").show();
    } else if (filterType == "educational") {
        $("#software-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#hardware-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#educational-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#professional-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");

        $("#filterable-grid").removeClass("grid-show-all");
        $("#filterable-grid").removeClass("grid-show-software");
        $("#filterable-grid").removeClass("grid-show-hardware");
        $("#filterable-grid").addClass("grid-show-educational");
        $("#filterable-grid").removeClass("grid-show-professional");
        $("#clear-experience-filter").show();
    } else if (filterType == "professional") {
        $("#software-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#hardware-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#educational-experience-filter").removeClass("grid-filter-enabled").addClass("grid-filter-disabled");
        $("#professional-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");

        $("#filterable-grid").removeClass("grid-show-all");
        $("#filterable-grid").removeClass("grid-show-software");
        $("#filterable-grid").removeClass("grid-show-hardware");
        $("#filterable-grid").removeClass("grid-show-educational");
        $("#filterable-grid").addClass("grid-show-professional");
        $("#clear-experience-filter").show();
    } else {
        $("#software-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#hardware-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#educational-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");
        $("#professional-experience-filter").removeClass("grid-filter-disabled").addClass("grid-filter-enabled");

        $("#filterable-grid").addClass("grid-show-all");
        $("#filterable-grid").removeClass("grid-show-software");
        $("#filterable-grid").removeClass("grid-show-hardware");
        $("#filterable-grid").removeClass("grid-show-educational");
        $("#filterable-grid").removeClass("grid-show-professional");

        $("#clear-experience-filter").hide();
    }
}

$(function() {
    updateGridFilter("");

    $("#clear-experience-filter").click(function() {
        updateGridFilter("");
    })
    
    $("#software-experience-filter").click(function() {
        if (filterType == "software") {
            updateGridFilter("");
        } else {
            updateGridFilter("software");
        }
    });
    $("#hardware-experience-filter").click(function() {
        if (filterType == "hardware") {
            updateGridFilter("");
        } else {
            updateGridFilter("hardware");
        }
    });
    $("#educational-experience-filter").click(function() {
        if (filterType == "educational") {
            updateGridFilter("");
        } else {
            updateGridFilter("educational");
        }
    });
    $("#professional-experience-filter").click(function() {
        if (filterType == "professional") {
            updateGridFilter("");
        } else {
            updateGridFilter("professional");
        }
    });
});