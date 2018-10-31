var chartData1 = {
    chart: {
      type: 'spline',
      height: 220,
      scrollablePlotArea: {
        minWidth: 200,
        scrollPositionX: 1
      }
    },
    title: {
      text: ""
    },
     credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },

    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
     
    },
   
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 4
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: 'A',
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 12, 4.4, 4.0, 3.8, 5.0, 12, 9.2, 9.6, 9.5, 6.3,
        9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 4.3, 9.4, 8.9, 10.6,15.5, 11.1,
        10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]
  
    }, {
      name: 'B',
      data: [
        0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
        0.3, 0.1, 0.3, 2.4, 0.3, 0.2, 0.3, 0.2, 0.4, 1.0, 7.9, 0.3,
       4.7, 1.1, 1.8, 3.2, 1.4, 1.2, 0.9, 0.8, 0.9, 2.2, 5.4, 4.2,
        0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
        1.5
      ]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }

};

var chartData2 = {
    chart: {
      type: 'spline',
      height: 220,
      scrollablePlotArea: {
        minWidth: 200,
        scrollPositionX: 1
      }
    },
    title: {
      text: ""
    },
     credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },

    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
     
    },
   
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 4
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: 'A',
	  color: '#20FC8F',
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 12, 4.4, 4.0, 3.8, 5.0, 12, 9.2, 9.6, 9.5, 6.3,
        9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 4.3, 9.4, 8.9, 10.6,15.5, 11.1,
        10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]
  
    }, {
      name: 'B',
	  color:'#FFA100',
      data: [
        0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
        0.3, 0.1, 0.3, 2.4, 0.3, 0.2, 0.3, 0.2, 0.4, 1.0, 7.9, 0.3,
       4.7, 1.1, 1.8, 3.2, 1.4, 1.2, 0.9, 0.8, 0.9, 2.2, 5.4, 4.2,
        0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
        1.5
      ]
    },
	{
      name: 'C',
	  color:'#FF5B58',
      data: [
        1.2, 2.1, 1.1, 3.1, 2.3, 0.2, 0.3, 2.1, 0.7, 4.3, 0.2, 5.2,
        0.3, 5.1, 6.3, 2.4, 3.3, 1.2, 0.3, 0.2, 0.4, 1.0, 7.9, 0.3,
       4.7, 1.1, 1.8, 3.2, 1.4, 1.2, 0.9, 0.8, 0.9, 2.2, 5.4, 4.2,
        5.3, 7.3, 9.0,10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }

};

var chartData3 ={
	chart: {
    type: 'areaspline',
	height: 220,
  },
  title: {
    text: ""
  },
  credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },
  xAxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    plotBands: [{ // visualize the weekend
      from: 4.5,
      to: 6.5,
      color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    title: {
      text: 'Units'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },

  plotOptions: {
    areaspline: {
      fillOpacity: 0.6
      
    },
    
  },
  series: [{
    name: 'A',
    data: [3, 27, 3, 25, 4, 20, 12],
    color:'#20FC8F'
  }, {
    name: 'B',
    data: [11, 3, 14, 3, 23, 5, 14],
    color:'#FFA100'
  },
          {
    name: 'C',
    data: [5, 17, 4, 18, 3, 26, 1],
    color: '#FF5B58'
  }]

};

var chartData4 ={
	chart: {
    type: 'areaspline',
	height: 220,
  },
  title: {
    text: ""
  },
  credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },
  xAxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    plotBands: [{ // visualize the weekend
      from: 4.5,
      to: 6.5,
      color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    title: {
      text: 'Units'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },

  plotOptions: {
    areaspline: {
      fillOpacity: 0.0
      
    },
    
  },
  series: [{
    name: 'A',
    data: [3, 27, 3, 25, 4, 20, 12],
    color:'#20FC8F'
  }, {
    name: 'B',
    data: [11, 3, 14, 3, 23, 5, 14],
    color:'#FFA100'
  },
          {
    name: 'C',
    data: [5, 17, 4, 18, 3, 26, 1],
    color: '#FF5B58'
  }]

};

var chartData5 = {
	 chart: {
    type: 'column',
	height: 220
  },
  title: {
    text: 'HGw RSS'
  },
  
 xAxis: {
    categories: ['2013', '2014', '2015', '2016', '2017'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
   
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },
  series: [{
    name: 'A',
    data: [107, 31, 635, 303, 2000]
  }, {
    name: 'B',
    data: [133, 3560, 947, 508, 1600]
  }, {
    name: 'C',
    data: [814, 841, 3714, 727, 700]
  }, {
    name: 'D',
    data: [1216, 1001, 4436, 738, 400]
  }, {
    name: 'B',
    data: [133, 1560, 947, 408, 600]
  }, {
    name: 'C',
    data: [814, 2410, 3714, 727, 3100]
  }]
};

var chartData6 = {
	 chart: {
    type: 'column',
	height: 220
  },
  title: {
   text: ""
  },
  
 xAxis: {
    categories: ['2013', '2014', '2015', '2016', '2017'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
   
    labels: {
      overflow: 'justify'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },
  series: [{
    name: 'A',
    data: [1070, 310, 635, 303, 2000],
	color: '#91F8FF'
  }, {
    name: 'B',
    data: [1330, 3560, 947, 4080, 1600],
	color: '#0088BC'
  }, {
    name: 'C',
    data: [814, 841, 3714, 727, 700],
	color: '#056598'
  }, {
    name: 'D',
    data: [1216, 1001, 4436, 738, 4000],
	color: '#00C1E2'
  }]
};

var chartData7 = {
    chart: {
      type: 'spline',
      height: 220,
      scrollablePlotArea: {
        minWidth: 200,
        scrollPositionX: 1
      }
    },
    title: {
      text: ""
    },
     credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },

    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
     
    },
   
    plotOptions: {
	  areaspline: {
      fillOpacity: 0.6
      
      },
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 4
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: 'A',
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 12, 4.4, 4.0, 3.8, 5.0, 12, 9.2, 9.6, 9.5, 6.3,
        9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 4.3, 9.4, 8.9, 10.6,15.5, 11.1,
        10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]
  
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }

};

var chartData8 = {
    chart: {
      type: 'areaspline',
      height: 220,
      scrollablePlotArea: {
        minWidth: 200,
        scrollPositionX: 1
      }
    },
    title: {
      text: ""
    },
     credits: {
        text: 'Total Data Transfered: 17.3 Gb',
		href: ''
    },

    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
     
    },
   
    plotOptions: {
	  areaspline: {
      fillOpacity: 0.6
      
      },
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 4
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: 'A',
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 12, 4.4, 4.0, 3.8, 5.0, 12, 9.2, 9.6, 9.5, 6.3,
        9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 4.3, 9.4, 8.9, 10.6,15.5, 11.1,
        10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]
  
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }

};

var pieData1 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
		height: 90
		
    },
	credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
			size: 85,
            cursor: 'pointer',
            colors: ['#20FC8F','#D3D3D3'],
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Connected',
        colorByPoint: true,
        data: [{
            name: 'Connected',
            y: 48,
            selected: true
        },
        {
            name: 'Disconnected',
            y: 52,
            selected: true
        }]
    }],
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      backgroundColor: '#FFFFFF'
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
};

var pieData2 = {
	
	  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
		height: 90
    },
	credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
 
    plotOptions: {
        pie: {
            allowPointSelect: true,
			size: 85,
            cursor: 'pointer',
            colors: ['#20FC8F','#FFA100','#FF5B58'],
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Pie2',
        colorByPoint: true,
        data: [{
            name: 'Low',
            y: 48,
            selected: true
        },
        {
            name: 'Medium',
            y: 32,
            selected: true
        },
{
            name: 'High',
            y: 20,
            selected: true
        }]
    }],
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      backgroundColor: '#FFFFFF'
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
};

var pieData3 = {
	
	  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
		height: 90
    },
	credits: {
       enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
 
    plotOptions: {
        pie: {
            allowPointSelect: true,
			size: 85,
            cursor: 'pointer',
            colors: ['#8EF8FF','#00C2E2'],
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Pie3',
        colorByPoint: true,
        data: [{
            name: 'Auto: Yes',
            y: 52,
            selected: true
        },
        {
            name: 'Auto: No',
            y: 48,
            selected: true
        }]
    }],
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      backgroundColor: '#FFFFFF'
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
};

var pieData4 = {
    events: {
      beforePrint: function() {
        this.exportSVGElements[0].hide()
      },
      afterPrint: function() {
        this.exportSVGElements[0].show()
      }
    },
	  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
		height: 90
    },
	credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
 
    plotOptions: {
        pie: {
            allowPointSelect: true,
			size: 85,
            cursor: 'pointer',
            colors: ['#00C2E2','#D3D3D3'],
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Pie4',
        colorByPoint: true,
        data: [{
            name: 'Sticky %',
            y: 48,
            selected: true
        },
        {
            name: '',
            y: 52,
            selected: true
        }]
    }],
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      backgroundColor: '#FFFFFF'
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
};



