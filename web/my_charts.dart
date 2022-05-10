import 'dart:html';
import 'dart:js';

void main(List<String> args) {
  DivElement dartStatus = querySelector('#dart-status') as DivElement;
  dartStatus.text = 'Dart is running!';

  var myData = JsObject.jsify([
    {'date': '2018/8/1', 'type': 'download', 'value': 4623},
    {'date': '2018/8/1', 'type': 'register', 'value': 2208},
    {'date': '2018/8/1', 'type': 'bill', 'value': 182},
    {'date': '2018/8/2', 'type': 'download', 'value': 6145},
    {'date': '2018/8/2', 'type': 'register', 'value': 3245},
    {'date': '2018/8/2', 'type': 'bill', 'value': 562},
    {'date': '2018/8/3', 'type': 'download', 'value': 4623},
    {'date': '2018/8/3', 'type': 'register', 'value': 2208},
    {'date': '2018/8/3', 'type': 'bill', 'value': 182},
  ]);

  var chart = context['chart'];
  chart.callMethod('source', [myData]);
  chart.callMethod('render', []);
}
