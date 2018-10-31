var contracts = {
    "54867972": "58-90-77-22-75-5C",
    "31495080": "5A-3D-30-13-8F-15",
    "31452503": "A3-43-AE-41-2E-D7",
    "79238775": "B6-06-F6-C7-D5-04",
    "39531833": "9D-01-4A-A4-CB-91",
    "33992438": "D7-C4-71-4A-47-35",
    "93603004": "0D-D3-6B-05-86-59"
}
var contractsArray = Object.keys(contracts);

//Search Panel

var filterSet = false;

var searchPanel = document.getElementById("search-panel");
var contractID = document.getElementById("contract-id");
autocomplete(contractID, contractsArray);
var macAddress = document.getElementById("mac-address");
var applyFilters = document.getElementById("apply-filters");
var resetIcon = document.getElementById("reset-icon");
var contractIDDisplay = document.getElementById("contract-id-display");
var macAddressDisplay = document.getElementById("mac-address-display");

var contractSelectedKey = function(event) {
    if(event.key == "Enter" && contracts[contractID.value] !== undefined) {
        contractID.blur();
        macAddress.value = contracts[contractID.value];
    }
}
contractID.addEventListener("keydown", contractSelectedKey);

var contractSelected = function() {
    contractID.blur();
    macAddress.value = contracts[contractID.value];    
}
contractID.addEventListener("clicked", contractSelected);

var onFilterApply = function() {
    var macRegex = new RegExp("^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$");
    if(macAddress.value.match(macRegex)) {
        searchPanel.style.display = "none";
        statusPanel.style.display = "block";
        contractIDDisplay.innerText = (contractID.value) ? contractID.value : "Unknown";
        macAddressDisplay.innerText = macAddress.value;
        filterSet = true;
        currentTab = "tables";
        updateTabControls();
    }
}
applyFilters.addEventListener("click", onFilterApply);

//Status Panel

var statusPanel = document.getElementById("status-panel");
var resetFilters = document.getElementById("reset-filters");

var onResetFilters = function() {
    macAddress.value = null;
    contractID.value = null;
    searchPanel.style.display = "block";
    statusPanel.style.display = "none";
    filterSet = false;
    currentTab = null;
    updateTabControls();
}
resetFilters.addEventListener("click", onResetFilters);
resetIcon.addEventListener("click", onResetFilters);

//Datepicker

var days = 1;
var currentDay = new Date();
var previousDay = new Date();
previousDay.setDate(previousDay.getDate() - days);

var displayedDate = document.getElementById("displayed-date");

var formatDate = function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    day = (day < 10) ? "0"+day : day;
    month = (month < 10) ? "0"+month : month;
    return day + "." + month + "." + year;
}

var displayDate = function() {
    var currentDayString = formatDate(currentDay);
    var previousDateString = formatDate(previousDay);
    displayedDate.value = previousDateString + " - " + currentDayString;
}

displayDate();

var recalcDate = function() {
    currentDay = new Date();
    previousDay = new Date(currentDay);
    previousDay.setDate(previousDay.getDate() - days);
    displayDate();
}

var onChangeRange = function(start, end) {
    previousDay = start.toDate();
    currentDay = end.toDate();
}

$('input[name="daterange"]').daterangepicker({locale: { format: 'DD.MM.YYYY' }, opens: "center"}, onChangeRange);

var DateDay = document.getElementById("day-1");
var DateWeek = document.getElementById("day-7");

var onChooseDay = function() {
    if(days == 1) return;
    days = 1;
    DateDay.classList.add("active");
    DateWeek.classList.remove("active");
    recalcDate();
}
DateDay.addEventListener("click", onChooseDay);

var onChooseWeek = function() {
    if(days == 7) return;
    days = 7;
    DateDay.classList.remove("active");
    DateWeek.classList.add("active");
    recalcDate();
}
DateWeek.addEventListener("click", onChooseWeek);

var currentTab = null;

var tablesThumb = document.getElementById("tables-thumb");
var graphsThumb = document.getElementById("graphs-thumb");
var tablesTab = document.getElementById("tables-tab");
var graphsTab = document.getElementById("graphs-tab");

var updateTabControls = function(){
    if(!filterSet) currentTab = null;
    if(currentTab == "tables") {
        tablesTab.style.display = "block";
        tablesThumb.classList.add("active");
    }
    else {
        tablesTab.style.display = "none";
        tablesThumb.classList.remove("active");
    }
    if(currentTab == "graphs") {
        graphsTab.style.display = "block";
        graphsThumb.classList.add("active");
    }
    else {
        graphsTab.style.display = "none";
        graphsThumb.classList.remove("active");
    }
}

var onTablesThumb = function() {
    currentTab = "tables";
    updateTabControls();
}
tablesThumb.addEventListener("click", onTablesThumb);

var onGraphsThumb = function() {
    currentTab = "graphs";
    updateTabControls();
}
graphsThumb.addEventListener("click", onGraphsThumb);

var hgwEnabled = true;

var hgwInfo = document.getElementById("hgw-info");
var hgwInfoToggler = document.getElementById("hgw-info-toggler");
var chevDown = document.getElementById("hi-chev-down");
var chevUp = document.getElementById("hi-chev-up");

var onHgwToggled = function (){
    hgwEnabled = !hgwEnabled;
    var donuts = document.getElementsByClassName('donuts');
    var donutList = document.getElementsByClassName('pie-Chart');
    if(hgwEnabled) {
        for(let i = 0; i < donuts.length; i++) {
            donuts[i].classList.add("col-md-2");
            donuts[i].classList.remove("col-md-3");
        }
        for(let i = 0; i < donutList.length; i++) {
            donutList[i].classList.remove("offset");
        }
        chevDown.style.display = "none";
        chevUp.style.display = "inline";
        setTimeout(function() { hgwInfo.style.display = "block"; } , 500);
    }
    else {
        hgwInfo.style.display = "none";
        chevDown.style.display = "inline";
        chevUp.style.display = "none";
        for(let i = 0; i < donuts.length; i++) {
            donuts[i].classList.add("col-md-3");
            donuts[i].classList.remove("col-md-2");
        }
        for(let i = 0; i < donutList.length; i++) {
            donutList[i].classList.add("offset");
        }
    }
}
hgwInfoToggler.addEventListener("click", onHgwToggled);

Highcharts.chart('chart1', chartData1);
Highcharts.chart('chart2', chartData2);
Highcharts.chart('chart3', chartData3);
Highcharts.chart('chart4', chartData4);

Highcharts.chart('chart5', chartData5);
Highcharts.chart('chart6', chartData6);
Highcharts.chart('chart7', chartData7);
Highcharts.chart('chart8', chartData8);

Highcharts.chart('pie-chart1', pieData1);
Highcharts.chart('pie-chart2', pieData2);
Highcharts.chart('pie-chart3', pieData3);
Highcharts.chart('pie-chart4', pieData4);
Highcharts.chart('pie-chart5', pieData2);
Highcharts.chart('pie-chart6', pieData2);
Highcharts.chart('pie-chart7', pieData2);
Highcharts.chart('pie-chart8', pieData2);