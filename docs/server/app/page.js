(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 5615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2114)), "D:\\Development\\testing\\personal-website-3\\app\\page.js"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5764)), "D:\\Development\\testing\\personal-website-3\\app\\layout.js"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["D:\\Development\\testing\\personal-website-3\\app\\page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8792:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7635))

/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 9458:
/***/ (() => {



/***/ }),

/***/ 7635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(3500);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(9081);
;// CONCATENATED MODULE: ./app/components/Experience.js


function experience(props) {
    let skillsDivList = [];
    for(let i = 0; i < props.skills.length; i++){
        skillsDivList.push(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-fuchsia-400 rounded-full px-3 py-1",
            children: props.skills[i]
        }, i));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "experience-entry",
        className: "flex flex-col sm:flex-row pb-4 gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "experience-date",
                className: "text-xs w-24",
                children: props.date
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "experience-info",
                className: "w-4/5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "experience-position-company",
                        className: "text-lg pb-2",
                        children: [
                            props.position,
                            " - ",
                            props.company
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "experience-desc-skills",
                        className: "text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "experience-description",
                                className: "pb-3",
                                children: props.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "experience-skills",
                                className: "flex flex-wrap gap-2",
                                children: skillsDivList
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Experience = (experience);

;// CONCATENATED MODULE: ./app/components/Project.js


function project(props) {
    let link = "https://www." + props.link;
    let skillsDivList = [];
    for(let i = 0; i < props.skills.length; i++){
        skillsDivList.push(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-fuchsia-400 rounded-full px-3 py-1",
            children: props.skills[i]
        }, i));
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "project-entry",
        className: "flex pb-4 gap-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "project-info",
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "project-title",
                    className: "text-lg pb-2",
                    children: props.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "project-desc-skills",
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "project-description",
                            className: "pb-2",
                            children: props.description
                        }),
                        props.link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex pb-2",
                            children: [
                                "See more at",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pl-1",
                                    children: props.link
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "project-skills",
                            className: "flex flex-wrap gap-2",
                            children: skillsDivList
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Project = (project);

;// CONCATENATED MODULE: ./app/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Home() {
    const [darkmode, setDarkmode] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: darkmode ? "dark" : "",
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "dark:bg-slate-500 dark:text-white",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "two-sided-pane",
                className: "flex justify-center flex-pane",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "main-info-container",
                        className: "max-w-lg lg:w-1/3 lg:sticky lg:top-0 lg:h-fit p-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "basic-info",
                                className: "pb-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "darkmode-name",
                                        className: "flex items-center space-between gap-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                id: "full-name",
                                                className: "text-5xl pb-2",
                                                children: "Petar Vico"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLightbulb */.iih, {
                                                className: "text-2xl",
                                                onClick: ()=>{
                                                    setDarkmode(!darkmode);
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        id: "career-title",
                                        className: "text-xl pb-2",
                                        children: "Software Engineering Professional"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        id: "short-description",
                                        className: "text-md",
                                        children: "I am a skilled software engineer, seeking valuable experience, that is poised to tackle diverse challenges and create innovative solutions.."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "social-links",
                                className: "flex flex-row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://ca.linkedin.com/in/petar-vico-6ba2b6217",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-3xl pr-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaLinkedin */.ltd, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://github.com/pvico12/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-3xl px-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaGithub */.hJX, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:petarvico3@outlook.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-3xl px-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaEnvelope */.SRX, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "personal-sections",
                        className: "max-w-3xl lg:w-2/3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "about-container",
                                className: "p-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl pb-3",
                                        children: "ABOUT"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Complex problem-solver with an analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. Driven student leveraging studies in Computer Science seeking real-world experience as a Software Developer."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "about-container",
                                className: "py-2 px-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl pb-1",
                                        children: "EDUCATION"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-lg",
                                        children: "University of Waterloo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "text-md pb-3",
                                        children: "Honours Bachelor of Computer Science"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "experience-container",
                                className: "p-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl pb-3",
                                        children: "EXPERIENCE"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "experience-list",
                                        className: "flex flex-col space-between gap-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {
                                                date: "JUNE 2023 - NOW",
                                                position: "Full-Stack Engineer",
                                                company: "SerbLink",
                                                description: "Creating and maintaining website built with MongoDB, ExpressJS, NodeJS, and Angular.",
                                                skills: [
                                                    "MongoDB",
                                                    "Angular",
                                                    "NodeJS",
                                                    "ExpressJS",
                                                    "Docker",
                                                    "GitLab"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {
                                                date: "SEPT 2022 - NOW",
                                                position: "Software Engineer in Test",
                                                company: "IMAX",
                                                description: " Created Slack bot to report daily integration test runs with lots of responsiveness. Created script to automate the TestRail reporting process when running test cases. Created several other automation scripts to ease software testing and development throughout the team. Maintained several areas of testing including regression, integration, and validation. Obtained experience working with RestAPIs, MySQL databases, and product deployment. Reworked entire areas of testing for better automativity, documentation, and thoroughness. Fast-pased work environent applying agile methodologies using technologies like GitHub and JIRA.",
                                                skills: [
                                                    "Python",
                                                    "TestRail API",
                                                    "Slack API"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {
                                                date: "MAY 2023 - JUNE 2023",
                                                position: "Software Engineer in Test",
                                                company: "Siemens",
                                                description: " Created android emulator in Java to speed up acceptance testing by up to 2500%. Company-wide emulator impact as it was packaged and distributed to other teams. Created tools for cloud deployment of emulators. Automated test cases from the ground for an entire new product yet to be released. Used a BDD (Behaviour Driven Development) apporoach with the help of Gherkin to maximize test coverage and accuracy. Maintained several areas of automated testing in Python including acceptance, validation, sanity, and performance.",
                                                skills: [
                                                    "Python",
                                                    "Java",
                                                    "Gherkin"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "projects-container",
                                className: "p-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl pb-3",
                                        children: "PROJECTS"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "projects-list",
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                                                title: "Watopoly",
                                                description: "Terminal based Monopoly game supporting 2-8 players.",
                                                skills: [
                                                    "C++",
                                                    "Bash"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                                                title: "Personal Website",
                                                description: "My personal website outlining my different software development experience through different work experiences and projects.",
                                                skills: [
                                                    "NextJS",
                                                    "ReactJS",
                                                    "Tailwind CSS"
                                                ],
                                                link: "petarvico.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                                                title: "Tena's Treats Wesbite",
                                                description: "A website for a customized sweet treats local business.",
                                                skills: [
                                                    "Angular"
                                                ],
                                                link: "tenastreats.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Project, {
                                                title: "JV P&C Solutions Website",
                                                description: "A website for an electrical engineering company focused in relay protection, maintenance, and control.",
                                                skills: [
                                                    "ReactJS"
                                                ],
                                                link: "jvpcs.com"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4010);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Petar Vico",
    description: "Petar Vico's Personal Website"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 2114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Development\testing\personal-website-3\app\page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,15], () => (__webpack_exec__(5615)));
module.exports = __webpack_exports__;

})();