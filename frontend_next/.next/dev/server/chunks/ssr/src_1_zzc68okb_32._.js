(()=>{"use strict";module.exports = [
"[project]/src/components/Menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/pages-class.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const MENU_LINKS = [
    {
        label: "catalog",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGES"].CATALOG
    },
    {
        label: "cart",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGES"].CART
    },
    {
        label: "profile",
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$pages$2d$class$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGES"].PROFILE
    }
];
function Menu() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-row gap-2 dark:text-primary-text text-light-accent font-semibold text-sm font-secondary",
            children: MENU_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: pathname !== link.href ? "flex items-center w-full h-full px-4 uppercase hover:bg-border-gray/20 hover:text-brand-accent-dark transition delay-100 duration-200 ease-in cursor-pointer" : "flex items-center w-full h-full px-4 uppercase bg-border-gray/20 text-brand-accent-dark shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.03)]",
                        children: link.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this)
                }, link.label, false, {
                    fileName: "[project]/src/components/Menu.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Menu.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Menu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/pages-class.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];})()

//# sourceMappingURL=src_1_zzc68okb_32._.js.map