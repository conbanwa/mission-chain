import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
wx.setStorage({
  key:"key",
  data:"value"
})
wx.getStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
  }
})
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    // color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    title: {
      text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        // roam: true,
        label: {
          normal: {
            show: true,
          }
        },
        // edgeSymbol: ['circle', 'arrow'],
        // edgeSymbolSize: [4, 10],
        // edgeLabel: {
        //   normal: {
        //     textStyle: {
        //       fontSize: 20
        //     }
        //   }
        // },
        data: [{
          name: '节点1',
          x: 300,
          y: 300,
	symbol:`path://M33231 48046 c2 -2 126 -56 274 -119 583 -249 926 -408 1450 -672
  889 -449 1659 -896 2480 -1441 464 -307 499 -332 483 -352 -7 -9 -140 -169
  -295 -354 -156 -185 -284 -341 -285 -347 -2 -5 80 -63 182 -128 2365 -1516
  4456 -3466 6140 -5727 2499 -3356 4040 -7288 4490 -11456 100 -930 135 -1697
  127 -2738 -6 -685 -11 -833 -47 -1382 -327 -4876 -2190 -9505 -5344 -13278
  -679 -812 -1461 -1624 -2246 -2333 -1608 -1449 -3332 -2622 -5270 -3583 -2659
  -1320 -5542 -2114 -8510 -2346 -736 -57 -1266 -74 -2100 -67 -636 5 -780 10
  -1285 42 -1987 126 -3974 512 -5860 1140 -187 62 -385 129 -440 150 -630 233
  -932 352 -1305 510 -2092 889 -4051 2084 -5790 3534 -650 541 -1141 996 -1799
  1666 -995 1014 -1978 2237 -2778 3458 -2471 3771 -3778 8140 -3784 12649 -1
  429 -3 477 -17 483 -9 3 -13 3 -10 -1 4 -3 1 -19 -8 -35 -8 -16 -12 -29 -9
  -29 3 0 -4 -9 -15 -20 -12 -12 -18 -25 -15 -30 4 -6 1 -10 -6 -10 -7 0 -10 -3
  -7 -6 4 -3 0 -13 -8 -22 -46 -52 -90 -126 -374 -618 -171 -296 -322 -552 -334
  -569 -13 -16 -90 -145 -171 -285 l-147 -255 7 -130 c47 -939 180 -2053 361
  -3010 177 -942 432 -1905 681 -2575 36 -96 112 -314 170 -485 1119 -3315 2803
  -6166 5061 -8570 73 -77 132 -144 132 -149 0 -6 -11 -22 -25 -36 l-26 -27 148
  -159 c1066 -1147 2268 -2212 3548 -3141 2912 -2113 6238 -3548 9775 -4217
  2056 -389 4223 -514 6320 -366 2871 203 5702 917 8305 2093 4710 2128 8628
  5693 11194 10185 527 922 1037 1975 1436 2967 996 2473 1576 5079 1730 7765
  30 528 38 908 32 1600 -6 818 -31 1348 -98 2065 -598 6482 -3711 12376 -8739
  16546 -2107 1748 -4501 3134 -7124 4125 -233 88 -266 100 -255 90z`,
          itemStyle: {
            color: '#37A2DA',
            borderColor  : '#000',
            borderWidth: 10
          }
        }, {
          name: '',
          x: 800,
          y: 300,
          symbol:`path://M230 2123 c-41 -15 -40 0 -40 -973 0 -831 2 -938 16 -958 l15 -22
          948 0 c906 0 949 1 964 18 16 17 17 98 17 964 0 867 -1 947 -17 959 -13 12
          -175 14 -952 16 -515 1 -943 -1 -951 -4z m1375 -313 c9 -17 13 -40 10 -51 -5
          -16 -3 -20 12 -17 13 2 17 -3 16 -19 -2 -14 4 -24 17 -28 11 -4 20 -15 20 -26
          0 -17 -8 -19 -85 -19 -47 0 -85 -4 -85 -9 0 -6 -35 -33 -77 -62 -90 -60 -123
          -88 -123 -105 0 -22 61 -64 169 -115 149 -70 324 -159 345 -175 11 -7 16 -20
          13 -29 -8 -18 -83 -21 -155 -5 -26 6 -67 15 -92 19 -25 5 -113 26 -196 47
          l-151 37 -36 -39 -36 -39 -25 25 c-24 23 -25 27 -12 52 l15 28 -71 21 c-50 15
          -74 17 -81 10 -6 -6 -23 -11 -38 -11 -15 0 -31 -4 -34 -10 -3 -5 -19 -10 -36
          -10 -24 0 -29 -4 -29 -25 0 -14 -4 -25 -9 -25 -10 0 -21 24 -21 48 0 9 -11 27
          -24 41 -13 15 -28 40 -33 56 -8 23 -15 29 -32 27 -43 -7 -66 34 -36 64 25 25
          17 37 -53 84 -70 46 -142 113 -142 130 0 35 80 22 302 -50 84 -27 156 -50 159
          -50 3 0 23 14 44 30 42 33 89 40 99 14 5 -13 9 -14 21 -4 8 7 15 18 15 24 0 7
          9 22 19 33 13 13 21 39 23 69 2 30 8 49 17 52 11 4 13 -6 7 -53 l-6 -57 47 6
          c100 14 111 18 116 37 4 15 14 19 46 19 36 0 47 6 84 45 52 54 80 58 102 15z`,
          symbolRotate:180,
          itemStyle: {
            color: '#37A2DA',
            borderColor  : '#234',
            borderWidth: 3
          }
        }, {
          name: '节点3',
          x: 550,
          y: 100,
          symbol:'https://logos-download.com/wp-content/uploads/2016/02/Mercedes_Benz_logo_gradient.png',
          value:'日',
          label:{
            // fontStyle: 'italic',
            // fontWeight: 'normal',
            // color: '#000',
            // fontSize: 12,
            // textBorderColor: 'transparent',
              formatter: '\n{a|{b}}\n{b|{c}}',
            rich: {
              a: {
                  color: 'red',
                  lineHeight: 10
              },
              b: {color: 'blue',
                  height: 40,
                  align:'right',
                  fontStyle: 'italic',
                  borderColor: 'blue',
                  borderRadius: 6
              },
              x: {
                  fontSize: 18,
                  fontFamily: 'Microsoft YaHei',
                  borderColor: '#449933',
                  borderRadius: 4
              }
          }
          }
        }, {
          name: '节点4',
          x: 550,
          y: 500,
          symbol:'https://logos-download.com/wp-content/uploads/2016/02/Mercedes_Benz_logo_gradient.png',
        }],
        // links: [],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 4,
              curveness: 0.2
            }
          }
        }, {
          source: '节点2',
          target: '节点1',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: { curveness: 0.2 }
          }
        }, {
          source: '节点1',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点4'
        }, {
          source: '节点1',
          target: '节点4'
        }],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
