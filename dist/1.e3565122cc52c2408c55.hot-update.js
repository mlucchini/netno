webpackHotUpdate(1,{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      console.log('MAIN this:', this);
	      // if (this.props.onRender) {
	      //   this.props.onRender();
	      // }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          'NAV will be in this bloc',
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Yo h1'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Hello world'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'well' },
	            'well here'
	          ),
	          'NAV will be in this bloc'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	;
	
	// React.propTypes = {
	//   onRender: React.PropTypes.func.isRequired,
	//   children: React.PropTypes.element.isRequired
	// };
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=1.e3565122cc52c2408c55.hot-update.js.map