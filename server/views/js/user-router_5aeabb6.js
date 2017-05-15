/**
 * Created by apple on 17/4/19.
 *
 * 前台应用路由
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('node_modules/react/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('node_modules/react-dom/index');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('node_modules/react-router/lib/index');

var _redux = require('node_modules/redux/lib/index');

var _reactRedux = require('node_modules/react-redux/lib/index');

var _reduxThunk = require('node_modules/redux-thunk/lib/index');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');

var _reducersUserIndex = require('src/js/reducers/user/index');

var _reducersUserIndex2 = _interopRequireDefault(_reducersUserIndex);

var _containersUser = require('src/js/containers/user/index');

var _containersUser2 = _interopRequireDefault(_containersUser);

var _containersUserHome = require('src/js/containers/user/home');

var _containersUserHome2 = _interopRequireDefault(_containersUserHome);

var _containersUserList = require('src/js/containers/user/list');

var _containersUserList2 = _interopRequireDefault(_containersUserList);

var _containersUserPage = require('src/js/containers/user/page');

var _containersUserPage2 = _interopRequireDefault(_containersUserPage);

var store = (0, _redux.createStore)(_reducersUserIndex2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

var historys = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2['default'].createElement(
        _reactRouter.Router,
        { history: historys },
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/', component: _containersUser2['default'] },
            _react2['default'].createElement(_reactRouter.IndexRoute, { component: _containersUserHome2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'list/:id', component: _containersUserList2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'page/:id', component: _containersUserPage2['default'] })
        )
    )
), document.getElementById("myBlog"));
//# sourceMappingURL=/js/user-router.js.map
