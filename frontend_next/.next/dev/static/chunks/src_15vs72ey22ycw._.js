(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/pages-class.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MENU_LINKS = [
    {
        label: "catalog",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGES"].CATALOG
    },
    {
        label: "cart",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGES"].CART
    },
    {
        label: "profile",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGES"].PROFILE
    }
];
function Menu() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "f943c5adf8ad4ef5f1c226cfcb953bbf8ff237f40783a3e4972601502b639f7c") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f943c5adf8ad4ef5f1c226cfcb953bbf8ff237f40783a3e4972601502b639f7c";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = MENU_LINKS.map({
            "Menu[MENU_LINKS.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: pathname !== link.href ? "flex items-center w-full h-full px-4 uppercase hover:bg-border-gray/20 hover:text-brand-accent-dark transition delay-100 duration-200 ease-in cursor-pointer" : "flex items-center w-full h-full px-4 uppercase bg-border-gray/20 text-brand-accent-dark shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.03)]",
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 29,
                        columnNumber: 79
                    }, this)
                }, link.label, false, {
                    fileName: "[project]/src/components/Menu.tsx",
                    lineNumber: 29,
                    columnNumber: 41
                }, this)
        }["Menu[MENU_LINKS.map()]"]);
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-row gap-2 dark:text-primary-text text-light-accent font-semibold text-sm font-secondary",
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 38,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Menu.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(Menu, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/pages-class.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGES",
    ()=>PAGES
]);
class PagesConfig {
    get HOME() {
        return `/`;
    }
    get CATALOG() {
        return `/catalog`;
    }
    ITEM(id) {
        return `/catalog/${id}`;
    }
    get CART() {
        return `/cart`;
    }
    get PROFILE() {
        return `/profile`;
    }
    get ADMIN() {
        return `/admin`;
    }
}
const PAGES = new PagesConfig();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_15vs72ey22ycw._.js.map