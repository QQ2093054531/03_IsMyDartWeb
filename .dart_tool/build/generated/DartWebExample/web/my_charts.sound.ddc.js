define(['dart_sdk'], (function load__web__my_charts(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var my_charts = Object.create(dart.library);
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    JSArrayOfMapOfString$Object: () => (T.JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(T.MapOfString$Object())))(),
    JSArrayOfJsObject: () => (T.JSArrayOfJsObject = dart.constFn(_interceptors.JSArray$(js.JsObject)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  my_charts.main = function main(args) {
    let dartStatus = html.DivElement.as(html.querySelector("#dart-status"));
    dartStatus[$text] = "Dart is running!";
    let myData = js.JsObject.jsify(T.JSArrayOfMapOfString$Object().of([new (T.IdentityMapOfString$Object()).from(["date", "2018/8/1", "type", "download", "value", 4623]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/1", "type", "register", "value", 2208]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/1", "type", "bill", "value", 182]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/2", "type", "download", "value", 6145]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/2", "type", "register", "value", 3245]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/2", "type", "bill", "value", 562]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/3", "type", "download", "value", 4623]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/3", "type", "register", "value", 2208]), new (T.IdentityMapOfString$Object()).from(["date", "2018/8/3", "type", "bill", "value", 182])]));
    let chart = js.context._get("chart");
    dart.dsend(chart, 'callMethod', ["source", T.JSArrayOfJsObject().of([myData])]);
    dart.dsend(chart, 'callMethod', ["render", []]);
  };
  dart.trackLibraries("web/my_charts", {
    "org-dartlang-app:///web/my_charts.dart": my_charts
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["my_charts.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;iCAGuB;AACV,qBAA2C,mBAA9B,mBAAc;AACF,IAApC,AAAW,UAAD,UAAQ;AAEd,iBAAkB,kBAAM,oCAC1B,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,QAAQ,SAAS,OAC9C,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,QAAQ,SAAS,OAC9C,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,YAAY,SAAS,QAClD,2CAAC,QAAQ,YAAY,QAAQ,QAAQ,SAAS;AAG5C,gBAAQ,AAAO,gBAAC;AACgB,IAA9B,WAAN,KAAK,iBAAY,UAAU,0BAAC,MAAM;AACJ,IAAxB,WAAN,KAAK,iBAAY,UAAU;EAC7B","file":"my_charts.sound.ddc.js"}');
  // Exports:
  return {
    web__my_charts: my_charts
  };
}));

//# sourceMappingURL=my_charts.sound.ddc.js.map
