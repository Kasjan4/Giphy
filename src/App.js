"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/normalize.css");
require("./styles/animations.css");
require("./styles/style.css");
require("./styles/mediaqueries.css");
var Navigation_1 = __importDefault(require("./components/Navigation"));
var Home_1 = __importDefault(require("./components/Home"));
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement(Navigation_1.default, null),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }))));
};
exports.default = App;
