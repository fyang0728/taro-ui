(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"106":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},a=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(4)),l=n(130),c=n(137),u=_interopRequireDefault(n(132));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(503);var p=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"current1":0,"current2":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.default.Component),o(Index,[{"key":"handleClick","value":function handleClick(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},"current"+e,t))}},{"key":"render","value":function render(){var e=this.state,t=e.current1,n=e.current2,o=["标签页1","标签页2","标签页3"];return a.default.createElement(l.View,{"className":"page"},a.default.createElement(u.default,{"title":"Segmented Control 分段器"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"基础用法"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,null,a.default.createElement(c.AtSegmentedControl,{"onClick":this.handleClick.bind(this,1),"current":t,"values":o}),a.default.createElement(l.View,{"className":"tab-content"},"标签 ",t+1," 的内容")))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"自定义颜色、字体大小"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(l.View,null,a.default.createElement(c.AtSegmentedControl,{"onClick":this.handleClick.bind(this,2),"selectedColor":"#FF4949","fontSize":"30","current":n,"values":o}),a.default.createElement(l.View,{"className":"tab-content"},"标签 ",n+1," 的内容")))),a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"禁用"),a.default.createElement(l.View,{"className":"panel__content"},a.default.createElement(c.AtSegmentedControl,{"disabled":!0,"values":["标签页1","标签页2"]})))))}},{"key":"componentDidMount","value":function componentDidMount(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=p},"132":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(4)),i=_interopRequireDefault(n(131)),l=n(130);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(133);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"133":function(e,t,n){},"503":function(e,t,n){}}]);