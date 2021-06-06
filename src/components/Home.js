"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var react_router_dom_1 = require("react-router-dom");
var Fade_1 = __importDefault(require("react-reveal/Fade"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Home = function () {
    // Icons
    var loop = react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSearch, size: "2x" });
    var angleRight = react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faAngleRight, size: "1x" });
    // Absolute file path option for images, GitHub pages needs this
    var imagePath = process.env.NODE_ENV === 'development' ? './img/' : './src/img/';
    // The gifs return from API stored in this object
    var _a = react_1.useState({}), gifs = _a[0], setGifs = _a[1];
    // Search term and current input to manage search API call
    var _b = react_1.useState(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = react_1.useState(''), searchInput = _c[0], setSearchInput = _c[1];
    // Toggle between trending and search, used for API call
    var _d = react_1.useState('trending'), mode = _d[0], setMode = _d[1];
    // Current pagination index for API call, jumps 21 results each time when handleMoreGifs() is fired
    var _e = react_1.useState(0), page = _e[0], setPage = _e[1];
    // Loader is displayed between API call and response
    var _f = react_1.useState(false), loaded = _f[0], setLoaded = _f[1];
    // Keep track of the gifs loading state in a boolean array, only display a certain image when it is fully loaded.
    var _g = react_1.useState([]), imageLoading = _g[0], setImageLoading = _g[1];
    react_1.useEffect(function () {
        try {
            axios_1.default.get("https://api.giphy.com/v1/gifs/" + mode + "?api_key=6vSx4w8I68CeIv4A0q1QycYQOEZkZdZN&q=" + searchTerm + "&limit=21&offset=" + page)
                .then(function (resp) {
                if (page === 0) {
                    setGifs(resp.data);
                    setLoaded(true);
                }
                else if (page > 0) {
                    var updatedGifs_1 = __assign({}, gifs);
                    var newGifs = resp.data.data;
                    newGifs.forEach(function (gif) { return updatedGifs_1.data.push(gif); });
                    setGifs(updatedGifs_1);
                    setLoaded(true);
                    // Ensuring new gifs are at the correct viewpoint when the gifs state is updated
                    setTimeout(function () {
                        smoothScroll('#currentGif', 100);
                    }, 1000);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }, [page, searchTerm]);
    // Form handler
    function handleSearch(event) {
        event.preventDefault();
        if (searchInput.length < 1)
            return;
        setLoaded(false);
        setMode('search');
        setImageLoading([]);
        setPage(0);
        setSearchTerm(searchInput);
    }
    // Get 21 more results, useEffect and axios triggered when pagination index is changed
    function handleMoreGifs() {
        setLoaded(false);
        setPage(page + 21);
    }
    // Confirm a certain image is loaded, and then display it by updating the boolean array to true at its index
    function loadImage(index) {
        var updatedIndex = __spreadArray([], imageLoading);
        updatedIndex[index] = true;
        setImageLoading(updatedIndex);
    }
    function smoothScroll(target, duration) {
        var element = document.querySelector(target);
        var targetPosition = Math.round(element.getBoundingClientRect().top - 80);
        var startPosition = Math.round(window.pageYOffset);
        var distance = targetPosition - startPosition;
        var startTime = null;
        function animation(currentTime) {
            if (startTime === null)
                startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration)
                requestAnimationFrame(animation);
        }
        ;
        function ease(t, b, c, d) {
            return c * t / d + b;
        }
        ;
        requestAnimationFrame(animation);
    }
    return (react_1.default.createElement("main", null,
        react_1.default.createElement("form", { id: "search-bar", onSubmit: handleSearch },
            react_1.default.createElement("input", { id: "search-input", value: searchInput, type: "text", placeholder: "Search all the GIF's and Stickers", onChange: function (e) { return setSearchInput(e.currentTarget.value); } }),
            react_1.default.createElement("button", { type: "submit", name: "Submit search", "aria-label": "submit", id: "submit" }, loop)),
        react_1.default.createElement("div", { className: "promo-container" },
            react_1.default.createElement("img", { id: "promo", src: imagePath + "promo.gif", alt: "promo" })),
        react_1.default.createElement("div", { className: "trending" },
            react_1.default.createElement("div", { className: "trending-header" },
                mode === 'trending' ? react_1.default.createElement("div", { className: "trending-title" },
                    react_1.default.createElement("svg", { width: "25", height: "20", viewBox: "0 0 25 20", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("defs", null,
                            react_1.default.createElement("linearGradient", { x1: "5.615%", y1: "77.472%", x2: "100%", y2: "26.124%", id: "trending" },
                                react_1.default.createElement("stop", { stopColor: "#3191FF", offset: "0%" }),
                                react_1.default.createElement("stop", { stopColor: "#0CF", offset: "100%" }))),
                        react_1.default.createElement("path", { d: "M25.333 4.635l-6.45-.032a.47.47 0 00-.471.468l.004 1.575.008.085a.47.47 0 00.462.383h2.94l-7.544 8.101-3.878-3.125a1.119 1.119 0 00-1.631-.009l-7.584 7.73a1 1 0 00-.002 1.4l.288.295a1 1 0 001.431 0L9.652 14.6l3.782 3.042.093.1c.442.442.964.541 1.498.145l8.43-8.998v3.103c0 .25.197.456.446.468l1.407.069a.47.47 0 00.491-.446V5.104a.47.47 0 00-.466-.469z", fill: "url(#trending)", fillRule: "nonzero", transform: "rotate(-5 -21.505 23.157)" })),
                    react_1.default.createElement("h4", null, "Trending")) :
                    react_1.default.createElement("h2", { className: "search-term-heading" },
                        searchTerm,
                        " ",
                        Object.keys(gifs).length > 0 ? react_1.default.createElement("span", null,
                            gifs.pagination.total_count,
                            " GIF's") : null),
                react_1.default.createElement("div", { className: "trending-link" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                        "All the GIFS's ",
                        angleRight))),
            loaded ? react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "grid-container" }, gifs.data.map(function (gif, index) {
                    return react_1.default.createElement(Fade_1.default, { up: true, key: index, spy: imageLoading[index], distance: "40px", delay: index % 2 === 0 ? 100 : 300, ssrReveal: true, duration: 350 },
                        react_1.default.createElement("div", { id: index === gifs.data.length - 21 ? 'currentGif' : undefined },
                            react_1.default.createElement("img", { src: gif.images.downsized.url, style: imageLoading[index] ? { opacity: '1' } : { opacity: '0' }, width: gif.images.downsized.width, height: gif.images.downsized.height, alt: gif.title, onLoad: function () { return loadImage(index); } })));
                })),
                react_1.default.createElement("div", { className: "load-more-container" }, gifs.pagination.total_count > 0 ? react_1.default.createElement("button", { style: imageLoading[imageLoading.length - 1] ? { opacity: '1' } : { opacity: '0' }, name: "Load more", onClick: handleMoreGifs }, "Load more") :
                    react_1.default.createElement("p", null,
                        "No GIFs found for ",
                        searchTerm,
                        react_1.default.createElement("br", null),
                        "Try searching for Stickers instead?"))) :
                // Custom loader for the API call 
                react_1.default.createElement("div", { className: "loader-container" },
                    react_1.default.createElement("div", { className: "custom-loader" },
                        react_1.default.createElement("div", null),
                        react_1.default.createElement("div", null),
                        react_1.default.createElement("div", null)))),
        react_1.default.createElement("footer", null,
            react_1.default.createElement("a", { href: "https://support.giphy.com/hc/en-us/articles/360032872931", rel: "noreferrer" }, "Privacy"),
            react_1.default.createElement("a", { href: "https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-Terms-of-Service", rel: "noreferrer" }, "Terms"))));
};
exports.default = Home;
