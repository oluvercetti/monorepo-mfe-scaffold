"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var index_exports = {};
__export(index_exports, {
    AdminCard: function() {
        return AdminCard;
    },
    AdminCardGrid: function() {
        return AdminCardGrid;
    },
    AdminHeader: function() {
        return AdminHeader;
    },
    AdminSectionHeader: function() {
        return AdminSectionHeader;
    },
    AlertIcon: function() {
        return AlertIcon;
    },
    AssetManagementIcon: function() {
        return AssetManagementIcon;
    },
    BrandIcon: function() {
        return BrandIcon;
    },
    Breadcrumb: function() {
        return Breadcrumb;
    },
    BusinessObjectIcon: function() {
        return BusinessObjectIcon;
    },
    Button: function() {
        return Button;
    },
    CustomDataTable: function() {
        return CustomDataTable;
    },
    Dialog: function() {
        return Dialog;
    },
    DialogClose: function() {
        return DialogClose;
    },
    DialogContent: function() {
        return DialogContent;
    },
    DialogDescription: function() {
        return DialogDescription;
    },
    DialogFooter: function() {
        return DialogFooter;
    },
    DialogHeader: function() {
        return DialogHeader;
    },
    DialogOverlay: function() {
        return DialogOverlay;
    },
    DialogPortal: function() {
        return DialogPortal;
    },
    DialogTitle: function() {
        return DialogTitle;
    },
    DialogTrigger: function() {
        return DialogTrigger;
    },
    DropdownMenu: function() {
        return DropdownMenu;
    },
    DropdownMenuCheckboxItem: function() {
        return DropdownMenuCheckboxItem;
    },
    DropdownMenuContent: function() {
        return DropdownMenuContent;
    },
    DropdownMenuGroup: function() {
        return DropdownMenuGroup;
    },
    DropdownMenuItem: function() {
        return DropdownMenuItem;
    },
    DropdownMenuLabel: function() {
        return DropdownMenuLabel;
    },
    DropdownMenuPortal: function() {
        return DropdownMenuPortal;
    },
    DropdownMenuRadioGroup: function() {
        return DropdownMenuRadioGroup;
    },
    DropdownMenuRadioItem: function() {
        return DropdownMenuRadioItem;
    },
    DropdownMenuSeparator: function() {
        return DropdownMenuSeparator;
    },
    DropdownMenuShortcut: function() {
        return DropdownMenuShortcut;
    },
    DropdownMenuSub: function() {
        return DropdownMenuSub;
    },
    DropdownMenuSubContent: function() {
        return DropdownMenuSubContent;
    },
    DropdownMenuSubTrigger: function() {
        return DropdownMenuSubTrigger;
    },
    DropdownMenuTrigger: function() {
        return DropdownMenuTrigger;
    },
    EmailIcon: function() {
        return EmailIcon;
    },
    EntitiesIcon: function() {
        return EntitiesIcon;
    },
    HelpIcon: function() {
        return HelpIcon;
    },
    ModulesIcon: function() {
        return ModulesIcon;
    },
    ReusableListIcon: function() {
        return ReusableListIcon;
    },
    RolesIcon: function() {
        return RolesIcon;
    },
    SectionDivider: function() {
        return SectionDivider;
    },
    ServiceCategoryIcon: function() {
        return ServiceCategoryIcon;
    },
    ServiceIcon: function() {
        return ServiceIcon;
    },
    Tabs: function() {
        return Tabs;
    },
    TabsContent: function() {
        return TabsContent;
    },
    TabsList: function() {
        return TabsList;
    },
    TabsTrigger: function() {
        return TabsTrigger;
    },
    TeamsIcon: function() {
        return TeamsIcon;
    },
    UsersIcon: function() {
        return UsersIcon;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    cn: function() {
        return cn;
    }
});
module.exports = __toCommonJS(index_exports);
// src/react-shim.js
var React = __toESM(require("react"));
// src/icons/icon-path.ts
var iconPaths = {
    "arrow-left": "/assets/svgs/arrow-left.svg",
    "undo": "/assets/svgs/undo.svg",
    "redo": "/assets/svgs/redo.svg",
    "align-left": "/assets/svgs/align-left.svg",
    "align-center": "/assets/svgs/align-center.svg",
    "align-right": "/assets/svgs/align-right.svg",
    "info-circle": "/assets/svgs/info-circle.svg",
    "tick-circle": "/assets/svgs/tick-circle.svg",
    "add": "/assets/svgs/add.svg",
    "close": "/assets/svgs/close.svg"
};
// src/icons/icon.tsx
var import_image = __toESM(require("next/image"));
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/icons/icon.tsx
var Icon = function(param) {
    var name = param.name, _param_width = param.width, width = _param_width === void 0 ? 24 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 24 : _param_height, className = param.className, _param_alt = param.alt, alt = _param_alt === void 0 ? "".concat(name, " icon") : _param_alt;
    var path = iconPaths[name];
    if (!path) {
        console.warn('Icon "'.concat(name, '" not found'));
        return null;
    }
    return /* @__PURE__ */ React.createElement(import_image.default, {
        src: path,
        width: width,
        height: height,
        alt: alt,
        className: cn("inline-block", className)
    });
};
// src/components/ui/breadcrumb.tsx
var import_link = __toESM(require("next/link"));
var Breadcrumb = function(param) {
    var items = param.items, className = param.className;
    var _items_;
    var currentPath = (_items_ = items[items.length - 1]) === null || _items_ === void 0 ? void 0 : _items_.href;
    return /* @__PURE__ */ React.createElement("nav", {
        className: cn("flex items-center py-2 ", className)
    }, /* @__PURE__ */ React.createElement(import_link.default, {
        href: items[0].href,
        className: "cursor-pointer flex items-center"
    }, /* @__PURE__ */ React.createElement(Icon, {
        name: "arrow-left",
        width: 14,
        height: 14,
        className: "mx-2 hover-text-black"
    })), items.map(function(item, index) {
        var isCurrent = item.href === currentPath;
        return /* @__PURE__ */ React.createElement("div", {
            key: index,
            className: "flex items-center"
        }, /* @__PURE__ */ React.createElement(import_link.default, {
            href: item.href,
            className: "text-[10px] leading-none hover:text-black  ".concat(isCurrent ? "text-textPrimary font-bold" : "text-textSecondary font-normal")
        }, item.label), index < items.length - 1 && /* @__PURE__ */ React.createElement("span", {
            className: "mx-2 text-black"
        }, "/"));
    }));
};
// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var React2 = __toESM(require("react"));
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary-600 text-primary-foreground hover:bg-primary-500",
            destructive: "bg-error-600 text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-primary-2-700 text-secondary-foreground hover:bg-primary-2-500",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React2.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, _param_isLoading = _param.isLoading, isLoading = _param_isLoading === void 0 ? false : _param_isLoading, leftIcon = _param.leftIcon, rightIcon = _param.rightIcon, children = _param.children, disabled = _param.disabled, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild",
        "isLoading",
        "leftIcon",
        "rightIcon",
        "children",
        "disabled"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React2.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref,
        disabled: isLoading || disabled
    }, props), isLoading && /* @__PURE__ */ React2.createElement(import_lucide_react.Loader2, {
        className: "animate-spin"
    }), !isLoading && leftIcon, children, !isLoading && rightIcon);
});
Button.displayName = "Button";
// src/components/ui/custom/data-table/data-table.tsx
var import_react_table = require("@tanstack/react-table");
var import_lucide_react6 = require("lucide-react");
var import_react3 = require("react");
// src/lib/date-utils.ts
function formatDate(date) {
    if (!date) return "";
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
}
function formatMonthYear(date) {
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return "".concat(months[date.getMonth()], " ").concat(date.getFullYear());
}
function getWeekdayNames() {
    return [
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
    ];
}
function isToday(date) {
    var today = /* @__PURE__ */ new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}
function getDaysInMonth(year, month) {
    var days = [];
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    for(var i = 1; i <= daysInMonth; i++){
        days.push(new Date(year, month, i));
    }
    return days;
}
function getPreviousMonthDays(year, month, firstDayOfWeek) {
    var days = [];
    var firstDayOfMonth = new Date(year, month, 1).getDay();
    var daysToFill = (firstDayOfMonth - firstDayOfWeek + 7) % 7;
    var previousMonth = month === 0 ? 11 : month - 1;
    var previousMonthYear = month === 0 ? year - 1 : year;
    var previousMonthDays = new Date(previousMonthYear, previousMonth + 1, 0).getDate();
    for(var i = previousMonthDays - daysToFill + 1; i <= previousMonthDays; i++){
        days.push(new Date(previousMonthYear, previousMonth, i));
    }
    return days;
}
function getNextMonthDays(year, month, lastDayOfWeek) {
    var days = [];
    var lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    var daysToFill = (7 - lastDayOfMonth + lastDayOfWeek) % 7;
    var nextMonth = month === 11 ? 0 : month + 1;
    var nextMonthYear = month === 11 ? year + 1 : year;
    for(var i = 1; i <= daysToFill; i++){
        days.push(new Date(nextMonthYear, nextMonth, i));
    }
    return days;
}
// src/components/ui/calendar.tsx
var import_lucide_react2 = require("lucide-react");
var import_react = require("react");
function Calendar(param) {
    var _param_mode = param.mode, mode = _param_mode === void 0 ? "single" : _param_mode, selected = param.selected, onSelect = param.onSelect, className = param.className, _param_initialFocus = param.initialFocus, initialFocus = _param_initialFocus === void 0 ? false : _param_initialFocus, _param_showOutsideDays = param.showOutsideDays, showOutsideDays = _param_showOutsideDays === void 0 ? true : _param_showOutsideDays;
    var selectedDate = _instanceof(selected, Date) ? selected : /* @__PURE__ */ new Date();
    var _ref = _sliced_to_array((0, import_react.useState)(selectedDate), 2), viewDate = _ref[0], setViewDate = _ref[1];
    var weekDays = getWeekdayNames();
    var month = viewDate.getMonth();
    var year = viewDate.getFullYear();
    var daysInMonth = getDaysInMonth(year, month);
    var previousMonthDays = getPreviousMonthDays(year, month, 1);
    var nextMonthDays = getNextMonthDays(year, month, 0);
    var allDays = _to_consumable_array(previousMonthDays).concat(_to_consumable_array(daysInMonth), _to_consumable_array(nextMonthDays));
    var weeks = [];
    for(var i = 0; i < allDays.length; i += 7){
        weeks.push(allDays.slice(i, i + 7));
    }
    var handlePrevMonth = function() {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };
    var handleNextMonth = function() {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };
    var handleDayClick = function(day) {
        if (onSelect) {
            onSelect(day);
        }
    };
    var isSelectedDate = function(day) {
        if (!selected) return false;
        if (_instanceof(selected, Date)) {
            return day.getDate() === selected.getDate() && day.getMonth() === selected.getMonth() && day.getFullYear() === selected.getFullYear();
        }
        return false;
    };
    var isOutsideDay = function(day) {
        return day.getMonth() !== month;
    };
    return /* @__PURE__ */ React.createElement("div", {
        className: cn("p-3", className)
    }, /* @__PURE__ */ React.createElement("div", {
        className: "relative flex items-center justify-center pt-1"
    }, /* @__PURE__ */ React.createElement("button", {
        onClick: handlePrevMonth,
        className: cn(buttonVariants({
            variant: "outline"
        }), "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100")
    }, /* @__PURE__ */ React.createElement(import_lucide_react2.ChevronLeft, {
        className: "h-4 w-4"
    })), /* @__PURE__ */ React.createElement("div", {
        className: "text-sm font-medium"
    }, formatMonthYear(viewDate)), /* @__PURE__ */ React.createElement("button", {
        onClick: handleNextMonth,
        className: cn(buttonVariants({
            variant: "outline"
        }), "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100")
    }, /* @__PURE__ */ React.createElement(import_lucide_react2.ChevronRight, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React.createElement("div", {
        className: "space-y-4"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "mt-2 flex w-full"
    }, weekDays.map(function(day, i) {
        return /* @__PURE__ */ React.createElement("div", {
            key: i,
            className: "text-muted-foreground w-9 rounded-md text-center text-[0.8rem] font-normal"
        }, day);
    })), weeks.map(function(week, weekIndex) {
        return /* @__PURE__ */ React.createElement("div", {
            key: weekIndex,
            className: "flex w-full"
        }, week.map(function(day, dayIndex) {
            return /* @__PURE__ */ React.createElement("div", {
                key: dayIndex,
                className: "relative h-9 w-9 p-0 text-center text-sm"
            }, /* @__PURE__ */ React.createElement("button", {
                onClick: function() {
                    return handleDayClick(day);
                },
                className: cn(buttonVariants({
                    variant: "ghost"
                }), "h-9 w-9 p-0 font-normal", isSelectedDate(day) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground", isToday(day) && "bg-accent text-accent-foreground", isOutsideDay(day) && !showOutsideDays && "invisible", isOutsideDay(day) && showOutsideDays && "text-muted-foreground opacity-50")
            }, day.getDate()));
        }));
    })));
}
Calendar.displayName = "Calendar";
// src/components/ui/checkbox.tsx
var React3 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react3 = require("lucide-react");
var Checkbox = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(CheckboxPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props), /* @__PURE__ */ React3.createElement(CheckboxPrimitive.Indicator, {
        className: cn("flex items-center justify-center text-current")
    }, /* @__PURE__ */ React3.createElement(import_lucide_react3.Check, {
        className: "h-4 w-4"
    })));
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
// src/components/ui/input.tsx
var React4 = __toESM(require("react"));
var Input = React4.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ React4.createElement("input", _object_spread({
        type: type,
        className: cn("border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// src/components/ui/popover.tsx
var React5 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React5.forwardRef(function(_param, ref) {
    var className = _param.className, _param_align = _param.align, align = _param_align === void 0 ? "center" : _param_align, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "align",
        "sideOffset"
    ]);
    return /* @__PURE__ */ React5.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React5.createElement(PopoverPrimitive.Content, _object_spread({
        ref: ref,
        align: align,
        sideOffset: sideOffset,
        className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border p-4 shadow-md outline-none", className)
    }, props)));
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
// src/components/ui/select.tsx
var React6 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react4 = require("lucide-react");
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React6.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.Trigger, _object_spread({
        ref: ref,
        className: cn("border-input bg-background ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), children, /* @__PURE__ */ React6.createElement(SelectPrimitive.Icon, {
        asChild: true
    }, /* @__PURE__ */ React6.createElement(import_lucide_react4.ChevronDown, {
        className: "h-4 w-4 opacity-50"
    })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.ScrollUpButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React6.createElement(import_lucide_react4.ChevronUp, {
        className: "h-4 w-4"
    }));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.ScrollDownButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React6.createElement(import_lucide_react4.ChevronDown, {
        className: "h-4 w-4"
    }));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React6.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React6.createElement(SelectPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /* @__PURE__ */ React6.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React6.createElement(SelectPrimitive.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children), /* @__PURE__ */ React6.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React6.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React6.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React6.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React6.createElement(import_lucide_react4.Check, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React6.createElement(SelectPrimitive.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React6.createElement(SelectPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("bg-muted -mx-1 my-1 h-px", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
// src/components/ui/table.tsx
var React7 = __toESM(require("react"));
var Table = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("div", {
        className: "relative w-full overflow-auto"
    }, /* @__PURE__ */ React7.createElement("table", _object_spread({
        ref: ref,
        className: cn("w-full caption-bottom text-sm", className)
    }, props)));
});
Table.displayName = "Table";
var TableHeader = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("thead", _object_spread({
        ref: ref,
        className: cn("[&_tr]:border-b", className)
    }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("tbody", _object_spread({
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className)
    }, props));
});
TableBody.displayName = "TableBody";
var TableFooter = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("tfoot", _object_spread({
        ref: ref,
        className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)
    }, props));
});
TableFooter.displayName = "TableFooter";
var TableRow = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("tr", _object_spread({
        ref: ref,
        className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)
    }, props));
});
TableRow.displayName = "TableRow";
var TableHead = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("th", _object_spread({
        ref: ref,
        className: cn("text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0", className)
    }, props));
});
TableHead.displayName = "TableHead";
var TableCell = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("td", _object_spread({
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)
    }, props));
});
TableCell.displayName = "TableCell";
var TableCaption = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7.createElement("caption", _object_spread({
        ref: ref,
        className: cn("text-muted-foreground mt-4 text-sm", className)
    }, props));
});
TableCaption.displayName = "TableCaption";
// src/components/ui/custom/data-table/multi-select-filter.tsx
var import_lucide_react5 = require("lucide-react");
var import_react2 = require("react");
var defaultCategories = [
    {
        id: "module",
        label: "Module",
        selected: true
    },
    {
        id: "status",
        label: "Status",
        selected: false
    },
    {
        id: "date",
        label: "Date Created",
        selected: true
    },
    {
        id: "category",
        label: "Category",
        selected: false
    }
];
var defaultOptions = [
    // Module options
    {
        id: "incident",
        label: "Incident",
        selected: true,
        categoryId: "module"
    },
    {
        id: "request",
        label: "Request",
        selected: true,
        categoryId: "module"
    },
    {
        id: "problem",
        label: "Problem",
        selected: true,
        categoryId: "module"
    },
    {
        id: "change",
        label: "Change",
        selected: true,
        categoryId: "module"
    },
    // Status options
    {
        id: "open",
        label: "Open",
        selected: false,
        categoryId: "status"
    },
    {
        id: "in-progress",
        label: "In Progress",
        selected: false,
        categoryId: "status"
    },
    {
        id: "resolved",
        label: "Resolved",
        selected: false,
        categoryId: "status"
    },
    {
        id: "closed",
        label: "Closed",
        selected: false,
        categoryId: "status"
    },
    // Date Created options
    {
        id: "today",
        label: "Today",
        selected: false,
        categoryId: "date"
    },
    {
        id: "yesterday",
        label: "Yesterday",
        selected: false,
        categoryId: "date"
    },
    {
        id: "last-week",
        label: "Last Week",
        selected: false,
        categoryId: "date"
    },
    {
        id: "last-month",
        label: "Last Month",
        selected: false,
        categoryId: "date"
    },
    // Category options
    {
        id: "hardware",
        label: "Hardware",
        selected: false,
        categoryId: "category"
    },
    {
        id: "software",
        label: "Software",
        selected: false,
        categoryId: "category"
    },
    {
        id: "network",
        label: "Network",
        selected: false,
        categoryId: "category"
    },
    {
        id: "security",
        label: "Security",
        selected: false,
        categoryId: "category"
    }
];
var MultiselectFilter = function(param) {
    var initialCategories = param.initialCategories, initialOptions = param.initialOptions, onFilter = param.onFilter, onCancel = param.onCancel, onSave = param.onSave;
    var _ref = _sliced_to_array((0, import_react2.useState)(""), 2), searchQuery = _ref[0], setSearchQuery = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(""), 2), activeCategory = _ref1[0], setActiveCategory = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react2.useState)([]), 2), categories = _ref2[0], setCategories = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react2.useState)([]), 2), options = _ref3[0], setOptions = _ref3[1];
    (0, import_react2.useEffect)(function() {
        var _;
        setCategories(initialCategories || _to_consumable_array(defaultCategories));
        setOptions(initialOptions || _to_consumable_array(defaultOptions));
        var firstSelected = (initialCategories || defaultCategories).find(function(c) {
            return c.selected;
        });
        setActiveCategory((firstSelected === null || firstSelected === void 0 ? void 0 : firstSelected.id) || ((_ = (initialCategories || defaultCategories)[0]) === null || _ === void 0 ? void 0 : _.id) || "");
    }, [
        initialCategories,
        initialOptions
    ]);
    var handleCategoryClick = function(categoryId) {
        setActiveCategory(categoryId);
    };
    var handleCategoryToggle = function(categoryId, checked) {
        setCategories(categories.map(function(category) {
            return _object_spread_props(_object_spread({}, category), {
                selected: category.id === categoryId ? checked : category.selected
            });
        }));
        if (!checked) {
            setOptions(options.map(function(option) {
                return _object_spread_props(_object_spread({}, option), {
                    selected: option.categoryId === categoryId ? false : option.selected
                });
            }));
        }
        if (checked) {
            setActiveCategory(categoryId);
        }
        if (onFilter) {
            var updatedCategories = categories.map(function(category) {
                return category.id === categoryId ? _object_spread_props(_object_spread({}, category), {
                    selected: checked
                }) : category;
            });
            var updatedOptions = !checked ? options.map(function(option) {
                return option.categoryId === categoryId ? _object_spread_props(_object_spread({}, option), {
                    selected: false
                }) : option;
            }) : options;
            onFilter(updatedCategories, updatedOptions);
        }
    };
    var handleOptionToggle = function(optionId, checked) {
        var option = options.find(function(o) {
            return o.id === optionId;
        });
        var categoryId = (option === null || option === void 0 ? void 0 : option.categoryId) || "";
        var updatedOptions = options.map(function(option2) {
            return _object_spread_props(_object_spread({}, option2), {
                selected: option2.id === optionId ? checked : option2.selected
            });
        });
        setOptions(updatedOptions);
        var updatedCategories = _to_consumable_array(categories);
        if (checked) {
            var parentCategory = categories.find(function(c) {
                return c.id === categoryId;
            });
            if (parentCategory && !parentCategory.selected) {
                updatedCategories = categories.map(function(category) {
                    return _object_spread_props(_object_spread({}, category), {
                        selected: category.id === categoryId ? true : category.selected
                    });
                });
                setCategories(updatedCategories);
            }
        }
        if (onFilter) {
            onFilter(updatedCategories, updatedOptions);
        }
    };
    var clearAll = function() {
        var clearedCategories = categories.map(function(category) {
            return _object_spread_props(_object_spread({}, category), {
                selected: false
            });
        });
        var clearedOptions = options.map(function(option) {
            return _object_spread_props(_object_spread({}, option), {
                selected: false
            });
        });
        setCategories(clearedCategories);
        setOptions(clearedOptions);
        if (onFilter) {
            onFilter(clearedCategories, clearedOptions);
        }
    };
    var getActiveOptions = function() {
        return options.filter(function(option) {
            return option.categoryId === activeCategory;
        }).filter(function(option) {
            return option.label.toLowerCase().includes(searchQuery.toLowerCase());
        });
    };
    var getSelectedCategories = function() {
        return categories.filter(function(category) {
            var hasSelectedOptions = options.some(function(option) {
                return option.categoryId === category.id && option.selected;
            });
            return category.selected && hasSelectedOptions;
        });
    };
    var getSelectedCategoryLabels = function() {
        return getSelectedCategories().map(function(category) {
            return category.label;
        });
    };
    var hasSelectedItems = categories.some(function(category) {
        return category.selected;
    }) || options.some(function(option) {
        return option.selected;
    });
    var handleSave = function() {
        if (onSave) {
            onSave(categories, options);
        }
    };
    var handleCancel = function() {
        if (onCancel) {
            onCancel();
        }
    };
    var renderActiveOptions = function() {
        var _categories_find;
        var activeOptions = getActiveOptions();
        return /* @__PURE__ */ React.createElement("div", {
            className: "w-2/3 border-l border-[#ebebeb] pl-6"
        }, /* @__PURE__ */ React.createElement("h3", {
            className: "mb-4 text-lg font-medium text-[#333333]"
        }, (_categories_find = categories.find(function(c) {
            return c.id === activeCategory;
        })) === null || _categories_find === void 0 ? void 0 : _categories_find.label, " Options"), /* @__PURE__ */ React.createElement("div", {
            className: "space-y-3"
        }, activeOptions.length > 0 ? activeOptions.map(function(option) {
            return /* @__PURE__ */ React.createElement("div", {
                key: option.id,
                className: "flex items-center"
            }, /* @__PURE__ */ React.createElement(Checkbox, {
                id: "option-".concat(option.id),
                checked: option.selected,
                onCheckedChange: function(checked) {
                    return handleOptionToggle(option.id, checked);
                },
                className: "h-6 w-6 rounded border-[#d9d9d9] data-[state=checked]:bg-[#1659e6] data-[state=checked]:text-white"
            }), /* @__PURE__ */ React.createElement("label", {
                htmlFor: "option-".concat(option.id),
                className: "ml-3 cursor-pointer text-lg text-[#333333]"
            }, option.label));
        }) : /* @__PURE__ */ React.createElement("p", {
            className: "text-gray-500"
        }, "No options match your search.")));
    };
    return /* @__PURE__ */ React.createElement("div", {
        className: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center justify-between border-b border-[#ebebeb] p-6"
    }, /* @__PURE__ */ React.createElement("h2", {
        className: "text-2xl font-bold text-[#333333]"
    }, "Filter By"), /* @__PURE__ */ React.createElement(Button, {
        onClick: clearAll,
        disabled: !hasSelectedItems,
        variant: "ghost",
        className: "font-medium text-[#1659e6] hover:bg-blue-50 hover:text-[#1659e6]"
    }, "Clear All", /* @__PURE__ */ React.createElement(import_lucide_react5.X, {
        className: "ml-2 h-5 w-5"
    }))), /* @__PURE__ */ React.createElement("div", {
        className: "p-6"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "relative mb-6"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "pointer-events-none absolute inset-y-0 left-3 flex items-center"
    }, /* @__PURE__ */ React.createElement(import_lucide_react5.Search, {
        className: "h-5 w-5 text-[#808080]"
    })), /* @__PURE__ */ React.createElement(Input, {
        placeholder: "Search options...",
        className: "h-auto rounded-lg border border-[#d9d9d9] bg-[#fcfcfd] py-6 pl-10 pr-4 focus-visible:ring-[#1659e6]",
        value: searchQuery,
        onChange: function(e) {
            return setSearchQuery(e.target.value);
        }
    })), categories.length > 0 && /* @__PURE__ */ React.createElement("div", {
        className: "flex"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "w-1/3 pr-4"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "space-y-1"
    }, categories.map(function(category) {
        return /* @__PURE__ */ React.createElement("div", {
            key: category.id,
            className: "cursor-pointer rounded-md px-4 py-3 transition-colors ".concat(activeCategory === category.id ? "bg-[#1659e6] font-medium text-white" : "text-[#333333] hover:bg-[#f5f5f5]"),
            onClick: function() {
                handleCategoryClick(category.id);
                if (!category.selected) {
                    handleCategoryToggle(category.id, true);
                }
            }
        }, /* @__PURE__ */ React.createElement("span", {
            className: "text-lg"
        }, category.label));
    }))), renderActiveOptions())), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center justify-between border-t border-[#ebebeb] p-6"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "text-lg"
    }, hasSelectedItems && /* @__PURE__ */ React.createElement("span", null, "Filtering By:", " ", /* @__PURE__ */ React.createElement("span", {
        className: "font-medium text-[#1659e6]"
    }, getSelectedCategoryLabels().join(", ")))), /* @__PURE__ */ React.createElement("div", {
        className: "flex gap-4"
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        className: "h-auto px-8 py-6 font-medium",
        onClick: handleCancel
    }, "Cancel"), /* @__PURE__ */ React.createElement(Button, {
        className: "h-auto bg-[#1659e6] px-8 py-6 font-medium hover:bg-[#103fa3]",
        onClick: handleSave
    }, "Save"))));
};
var multi_select_filter_default = MultiselectFilter;
// src/components/ui/custom/data-table/data-table.tsx
function CustomDataTable(param) {
    var data = param.data, columns = param.columns, _param_searchPlaceholder = param.searchPlaceholder, searchPlaceholder = _param_searchPlaceholder === void 0 ? "Search..." : _param_searchPlaceholder, _param_initialPageSize = param.initialPageSize, initialPageSize = _param_initialPageSize === void 0 ? 10 : _param_initialPageSize, onExport = param.onExport, _param_bulk = param.bulk, bulk = _param_bulk === void 0 ? false : _param_bulk, actionButton = param.actionButton, _param_showHeader = param.showHeader, showHeader = _param_showHeader === void 0 ? true : _param_showHeader;
    var _ref = _sliced_to_array((0, import_react3.useState)(""), 2), globalFilter = _ref[0], setGlobalFilter = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react3.useState)({}), 2), rowSelection = _ref1[0], setRowSelection = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react3.useState)({}), 2), columnVisibility = _ref2[0], setColumnVisibility = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react3.useState)(/* @__PURE__ */ new Date()), 2), date = _ref3[0], setDate = _ref3[1];
    var filterCategories = (0, import_react3.useMemo)(function() {
        return columns.filter(function(col) {
            return col.id !== "select" && col.id !== "actions";
        }).map(function(col) {
            var _col_id, _col_id1;
            return {
                id: (_col_id = col.id) !== null && _col_id !== void 0 ? _col_id : "",
                label: typeof col.header === "string" ? col.header : (_col_id1 = col.id) !== null && _col_id1 !== void 0 ? _col_id1 : "",
                selected: false
            };
        });
    }, [
        columns
    ]);
    var filterOptions = [];
    var selectionColumn = {
        id: "select",
        header: function() {
            return null;
        },
        // Empty header as requested
        cell: function(param) {
            var row = param.row;
            return /* @__PURE__ */ React.createElement(Checkbox, {
                checked: row.getIsSelected(),
                onCheckedChange: function(value) {
                    return row.toggleSelected(!!value);
                },
                "aria-label": "Select row",
                className: "data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
            });
        },
        enableSorting: false,
        enableHiding: false
    };
    var allColumns = (0, import_react3.useMemo)(function() {
        return bulk ? [
            selectionColumn
        ].concat(_to_consumable_array(columns)) : columns;
    }, [
        columns,
        bulk
    ]);
    var table = (0, import_react_table.useReactTable)({
        data: data,
        columns: allColumns,
        state: {
            globalFilter: globalFilter,
            rowSelection: rowSelection,
            columnVisibility: columnVisibility
        },
        enableRowSelection: bulk,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
        getPaginationRowModel: (0, import_react_table.getPaginationRowModel)(),
        getFilteredRowModel: (0, import_react_table.getFilteredRowModel)(),
        initialState: {
            pagination: {
                pageSize: initialPageSize
            }
        }
    });
    var handleFilterChange = function(categories, options) {
        console.log("Filter changed:", {
            categories: categories,
            options: options
        });
    };
    return /* @__PURE__ */ React.createElement("div", {
        className: "w-full overflow-hidden rounded-lg border bg-white"
    }, showHeader && /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-6"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-wrap items-center gap-3"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "relative w-[280px]"
    }, /* @__PURE__ */ React.createElement(import_lucide_react6.Search, {
        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400"
    }), /* @__PURE__ */ React.createElement(Input, {
        placeholder: searchPlaceholder,
        className: "w-full border-gray-300 pl-9 focus-visible:ring-blue-500",
        value: globalFilter,
        onChange: function(e) {
            return setGlobalFilter(e.target.value);
        }
    })), /* @__PURE__ */ React.createElement(Popover, null, /* @__PURE__ */ React.createElement(PopoverTrigger, {
        asChild: true
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        className: "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }, formatDate(date) || "Select date", /* @__PURE__ */ React.createElement(import_lucide_react6.Calendar, {
        className: "ml-2 h-4 w-4"
    }))), /* @__PURE__ */ React.createElement(PopoverContent, {
        className: "w-auto p-0",
        align: "end"
    }, /* @__PURE__ */ React.createElement(Calendar, {
        mode: "single",
        selected: date,
        onSelect: setDate,
        initialFocus: true
    }))), /* @__PURE__ */ React.createElement(Popover, null, /* @__PURE__ */ React.createElement(PopoverTrigger, {
        asChild: true
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        className: "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }, "More Filters", /* @__PURE__ */ React.createElement(import_lucide_react6.ChevronDown, {
        className: "ml-2 h-4 w-4"
    }))), /* @__PURE__ */ React.createElement(PopoverContent, {
        className: "w-auto p-0",
        align: "end"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "w-[500px]"
    }, /* @__PURE__ */ React.createElement(multi_select_filter_default, {
        initialCategories: filterCategories,
        initialOptions: filterOptions,
        onFilter: handleFilterChange
    }))))), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-3"
    }, onExport && /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        className: "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",
        onClick: onExport
    }, /* @__PURE__ */ React.createElement(import_lucide_react6.Download, {
        className: "mr-2 h-4 w-4"
    }), "Export"), actionButton)), /* @__PURE__ */ React.createElement("div", {
        className: "overflow-x-auto border-b border-t"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "inline-block min-w-full align-middle"
    }, /* @__PURE__ */ React.createElement(Table, {
        className: "min-w-full"
    }, /* @__PURE__ */ React.createElement(TableHeader, {
        className: "bg-blue-600 text-white"
    }, table.getHeaderGroups().map(function(headerGroup) {
        return /* @__PURE__ */ React.createElement(TableRow, {
            key: headerGroup.id
        }, headerGroup.headers.map(function(header) {
            return /* @__PURE__ */ React.createElement(TableHead, {
                key: header.id,
                className: "whitespace-nowrap font-medium text-white"
            }, header.isPlaceholder ? null : /* @__PURE__ */ React.createElement("div", null, (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext())));
        }));
    })), /* @__PURE__ */ React.createElement(TableBody, null, table.getRowModel().rows.length > 0 ? table.getRowModel().rows.map(function(row) {
        return /* @__PURE__ */ React.createElement(TableRow, {
            key: row.id,
            className: "hover:bg-gray-50 ".concat(row.getIsSelected() ? "bg-blue-50" : "")
        }, row.getVisibleCells().map(function(cell) {
            return /* @__PURE__ */ React.createElement(TableCell, {
                key: cell.id,
                className: "whitespace-nowrap"
            }, (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()));
        }));
    }) : /* @__PURE__ */ React.createElement(TableRow, null, /* @__PURE__ */ React.createElement(TableCell, {
        colSpan: allColumns.length,
        className: "h-24 text-center"
    }, "No results found.")))))), /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-wrap items-center justify-between gap-4 border-t p-4"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Page Size"), /* @__PURE__ */ React.createElement(Select, {
        value: table.getState().pagination.pageSize.toString(),
        onValueChange: function(value) {
            table.setPageSize(Number(value));
        }
    }, /* @__PURE__ */ React.createElement(SelectTrigger, {
        className: "w-20"
    }, /* @__PURE__ */ React.createElement(SelectValue, {
        placeholder: table.getState().pagination.pageSize.toString()
    })), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, {
        value: "10"
    }, "10"), /* @__PURE__ */ React.createElement(SelectItem, {
        value: "25"
    }, "25"), /* @__PURE__ */ React.createElement(SelectItem, {
        value: "50"
    }, "50"), /* @__PURE__ */ React.createElement(SelectItem, {
        value: "100"
    }, "100")))), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-1"
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        size: "icon",
        className: "h-8 w-8",
        onClick: function() {
            return table.previousPage();
        },
        disabled: !table.getCanPreviousPage()
    }, /* @__PURE__ */ React.createElement(import_lucide_react6.ChevronLeft, {
        className: "h-4 w-4"
    })), Array.from({
        length: table.getPageCount()
    }, function(_, i) {
        return i + 1;
    }).filter(function(page) {
        var currentPage = table.getState().pagination.pageIndex + 1;
        return page === 1 || page === table.getPageCount() || page >= currentPage - 2 && page <= currentPage + 2;
    }).map(function(page) {
        return /* @__PURE__ */ React.createElement(Button, {
            key: page,
            variant: page === table.getState().pagination.pageIndex + 1 ? "default" : "outline",
            size: "icon",
            className: "h-8 w-8 ".concat(page === table.getState().pagination.pageIndex + 1 ? "bg-blue-600" : ""),
            onClick: function() {
                return table.setPageIndex(page - 1);
            }
        }, page);
    }), /* @__PURE__ */ React.createElement(Button, {
        variant: "outline",
        size: "icon",
        className: "h-8 w-8",
        onClick: function() {
            return table.nextPage();
        },
        disabled: !table.getCanNextPage()
    }, /* @__PURE__ */ React.createElement(import_lucide_react6.ChevronRight, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Page ", table.getState().pagination.pageIndex + 1, " of ", table.getPageCount()), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement("span", {
        className: "text-sm text-gray-500"
    }, "Go to page"), /* @__PURE__ */ React.createElement(Input, {
        className: "h-8 w-16",
        value: (table.getState().pagination.pageIndex + 1).toString().padStart(2, "0"),
        onChange: function(e) {
            var value = Number.parseInt(e.target.value);
            if (!isNaN(value) && value > 0 && value <= table.getPageCount()) {
                table.setPageIndex(value - 1);
            }
        }
    })))));
}
// src/components/ui/dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react7 = require("lucide-react");
var React8 = __toESM(require("react"));
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React8.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React8.createElement(DialogPrimitive.Overlay, _object_spread({
        ref: ref,
        className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", className)
    }, props));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React8.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React8.createElement(DialogPortal, null, /* @__PURE__ */ React8.createElement(DialogOverlay, null), /* @__PURE__ */ React8.createElement(DialogPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg", className)
    }, props), children, /* @__PURE__ */ React8.createElement(DialogPrimitive.Close, {
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
    }, /* @__PURE__ */ React8.createElement(import_lucide_react7.XCircle, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React8.createElement("span", {
        className: "sr-only"
    }, "Close"))));
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React8.createElement("div", _object_spread({
        className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className)
    }, props));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React8.createElement("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React8.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React8.createElement(DialogPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props));
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React8.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React8.createElement(DialogPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-muted-foreground text-sm", className)
    }, props));
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
// src/components/ui/dropdown-menu.tsx
var React9 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react8 = require("lucide-react");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React9.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.SubTrigger, _object_spread({
        ref: ref,
        className: cn("focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
    }, props), children, /* @__PURE__ */ React9.createElement(import_lucide_react8.ChevronRight, {
        className: "ml-auto"
    }));
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.SubContent, _object_spread({
        ref: ref,
        className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-dropdown-menu-content-transform-origin] overflow-hidden rounded-md border p-1 shadow-lg", className)
    }, props));
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Content, _object_spread({
        ref: ref,
        sideOffset: sideOffset,
        className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] origin-[--radix-dropdown-menu-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md", className)
    }, props)));
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
    }, props));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.CheckboxItem, _object_spread({
        ref: ref,
        className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked
    }, props), /* @__PURE__ */ React9.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(import_lucide_react8.Check, {
        className: "h-4 w-4"
    }))), children);
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.RadioItem, _object_spread({
        ref: ref,
        className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React9.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(import_lucide_react8.Circle, {
        className: "h-2 w-2 fill-current"
    }))), children);
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React9.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("bg-muted -mx-1 my-1 h-px", className)
    }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
// src/components/ui/tabs.tsx
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var React10 = __toESM(require("react"));
var Tabs = TabsPrimitive.Root;
var TabsList = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10.createElement(TabsPrimitive.List, _object_spread({
        ref: ref,
        className: cn("bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1", className)
    }, props));
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10.createElement(TabsPrimitive.Trigger, _object_spread({
        ref: ref,
        className: cn("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm", className)
    }, props));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React10.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React10.createElement(TabsPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", className)
    }, props));
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
// src/components/admin-settings/admin-card.tsx
var import_link2 = __toESM(require("next/link"));
var import_react4 = __toESM(require("react"));
var AdminCard = function(param) {
    var title = param.title, description = param.description, icon = param.icon, href = param.href;
    return /* @__PURE__ */ import_react4.default.createElement(import_link2.default, {
        href: href,
        className: "block cursor-pointer rounded-lg border bg-white p-6 shadow-sm transition hover:bg-[#f3f3f397] hover:shadow-none hover:border-transparent"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "flex flex-col gap-2"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "mb-2"
    }, icon), /* @__PURE__ */ import_react4.default.createElement("h3", {
        className: "font-bold"
    }, title), /* @__PURE__ */ import_react4.default.createElement("p", {
        className: "text-sm text-gray-500"
    }, description)));
};
// src/components/admin-settings/admin-card-grid.tsx
var import_react5 = __toESM(require("react"));
var AdminCardGrid = function(param) {
    var children = param.children;
    return /* @__PURE__ */ import_react5.default.createElement("div", {
        className: "mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
    }, children);
};
// src/components/admin-settings/admin-header.tsx
var import_lucide_react9 = require("lucide-react");
var AdminHeader = function() {
    return /* @__PURE__ */ React.createElement("div", {
        className: "mb-2 flex w-full items-center justify-between"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-4"
    }, /* @__PURE__ */ React.createElement("h1", {
        className: "text-lg font-semibold"
    }, "Admin Settings"), /* @__PURE__ */ React.createElement("select", {
        className: "rounded border px-3 py-2 text-sm min-w-[184px]"
    }, /* @__PURE__ */ React.createElement("option", {
        value: "1"
    }, "All Entities"))), /* @__PURE__ */ React.createElement("div", {
        className: "relative flex basis-[10%] items-center"
    }, /* @__PURE__ */ React.createElement("i", {
        className: "absolute left-1 top-1/2 ml-1 -translate-y-1/2 transform"
    }, /* @__PURE__ */ React.createElement(import_lucide_react9.SearchIcon, {
        className: "text-textSecondary h-4 w-4"
    })), /* @__PURE__ */ React.createElement("input", {
        type: "search",
        placeholder: "Search",
        className: "min-w-[348px] border border-[#F5F5F5] bg-[#FCFCFD] py-2 pl-8 text-[14px] leading-[18px] text-black placeholder:text-black"
    })));
};
// src/components/admin-settings/admin-section-header.tsx
var AdminSectionHeader = function(param) {
    var number = param.number, title = param.title, description = param.description;
    return /* @__PURE__ */ React.createElement("div", {
        className: "mb-4 mt-8 flex flex-col gap-1"
    }, /* @__PURE__ */ React.createElement("h2", {
        className: "font-bold"
    }, number, ". ", title), /* @__PURE__ */ React.createElement("p", {
        className: "text-sm text-gray-500"
    }, description));
};
// src/components/admin-settings/section-divider.tsx
var SectionDivider = function() {
    return /* @__PURE__ */ React.createElement("hr", {
        className: "my-8 border-t border-[#EBEBEB]"
    });
};
// src/components/icons/admin-icons.tsx
var import_lucide_react10 = require("lucide-react");
var BrandIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Palette, {
        className: "h-5 w-5 text-blue-600"
    });
};
var EntitiesIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.LayoutGrid, {
        className: "h-5 w-5 text-blue-600"
    });
};
var ReusableListIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.ListChecks, {
        className: "h-5 w-5 text-blue-600"
    });
};
var UsersIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Users, {
        className: "h-5 w-5 text-blue-600"
    });
};
var RolesIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.FileSpreadsheet, {
        className: "h-5 w-5 text-blue-600"
    });
};
var TeamsIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Users, {
        className: "h-5 w-5 text-blue-600"
    });
};
var ModulesIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.FileBox, {
        className: "h-5 w-5 text-blue-600"
    });
};
var ServiceCategoryIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Tags, {
        className: "h-5 w-5 text-blue-600"
    });
};
var ServiceIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Tags, {
        className: "h-5 w-5 text-blue-600"
    });
};
var BusinessObjectIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.CircleDollarSign, {
        className: "h-5 w-5 text-blue-600"
    });
};
var AssetManagementIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.FileBox, {
        className: "h-5 w-5 text-blue-600"
    });
};
var AlertIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Bell, {
        className: "h-5 w-5 fill-blue-600 text-blue-600"
    });
};
var EmailIcon = function() {
    return /* @__PURE__ */ React.createElement(import_lucide_react10.Mail, {
        className: "h-5 w-5 fill-blue-600 text-white"
    });
};
// src/components/svg/help-icon.tsx
var HelpIcon = function() {
    return /* @__PURE__ */ React.createElement("svg", {
        width: "42",
        height: "43",
        viewBox: "0 0 42 43",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
        d: "M0 23C0 11.9543 8.95431 3 20 3C31.0457 3 40 11.9543 40 23C40 34.0457 31.0457 43 20 43C8.95431 43 0 34.0457 0 23Z",
        fill: "#1659E6"
    }), /* @__PURE__ */ React.createElement("g", {
        clipPath: "url(#clip0_20870_77283)"
    }, /* @__PURE__ */ React.createElement("path", {
        d: "M25.137 24.3525C25.1398 24.8042 24.8577 25.2087 24.4329 25.3621L20.9474 26.6501L19.6635 30.1383C19.3774 30.9154 18.3573 31.0915 17.8273 30.4551C17.7487 30.3607 17.6868 30.2536 17.6444 30.1383L16.3523 26.6501L12.8641 25.3662C12.087 25.0801 11.9109 24.06 12.5473 23.53C12.6417 23.4514 12.7488 23.3895 12.8641 23.347L16.3523 22.055L17.6362 18.5668C17.9223 17.7897 18.9424 17.6136 19.4724 18.2499C19.5511 18.3443 19.6129 18.4515 19.6554 18.5668L20.9474 22.055L24.4356 23.3389C24.8608 23.4937 25.1419 23.9001 25.137 24.3525ZM21.3528 17.8654H22.434V18.9466C22.434 19.3627 22.8845 19.6228 23.2449 19.4148C23.4122 19.3182 23.5152 19.1397 23.5152 18.9466V17.8654H24.5964C25.0126 17.8654 25.2727 17.4149 25.0646 17.0545C24.968 16.8872 24.7895 16.7842 24.5964 16.7842H23.5152V15.703C23.5152 15.2869 23.0647 15.0268 22.7043 15.2349C22.5371 15.3314 22.434 15.5099 22.434 15.703V16.7842H21.3528C20.9367 16.7842 20.6766 17.2347 20.8847 17.5951C20.9812 17.7624 21.1597 17.8654 21.3528 17.8654ZM27.2994 20.0278H26.7588V19.4872C26.7588 19.071 26.3083 18.8109 25.9479 19.019C25.7806 19.1156 25.6776 19.2941 25.6776 19.4872V20.0278H25.137C24.7209 20.0278 24.4608 20.4782 24.6688 20.8387C24.7654 21.0059 24.9439 21.109 25.137 21.109H25.6776V21.6496C25.6776 22.0657 26.1281 22.3258 26.4885 22.1177C26.6558 22.0212 26.7588 21.8427 26.7588 21.6496V21.109H27.2994C27.7155 21.109 27.9756 20.6585 27.7676 20.2981C27.671 20.1308 27.4925 20.0278 27.2994 20.0278Z",
        fill: "white"
    })), /* @__PURE__ */ React.createElement("rect", {
        x: "26.5",
        y: "0.5",
        width: "15",
        height: "15",
        rx: "7.5",
        fill: "#E43A39"
    }), /* @__PURE__ */ React.createElement("rect", {
        x: "26.5",
        y: "0.5",
        width: "15",
        height: "15",
        rx: "7.5",
        stroke: "white"
    }), /* @__PURE__ */ React.createElement("path", {
        d: "M34.7884 5.18182V11H34.0838V5.92045H34.0497L32.6293 6.86364V6.14773L34.0838 5.18182H34.7884Z",
        fill: "white"
    }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
        id: "clip0_20870_77283"
    }, /* @__PURE__ */ React.createElement("rect", {
        width: "16",
        height: "16",
        fill: "white",
        transform: "translate(12 15)"
    }))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AdminCard: AdminCard,
    AdminCardGrid: AdminCardGrid,
    AdminHeader: AdminHeader,
    AdminSectionHeader: AdminSectionHeader,
    AlertIcon: AlertIcon,
    AssetManagementIcon: AssetManagementIcon,
    BrandIcon: BrandIcon,
    Breadcrumb: Breadcrumb,
    BusinessObjectIcon: BusinessObjectIcon,
    Button: Button,
    CustomDataTable: CustomDataTable,
    Dialog: Dialog,
    DialogClose: DialogClose,
    DialogContent: DialogContent,
    DialogDescription: DialogDescription,
    DialogFooter: DialogFooter,
    DialogHeader: DialogHeader,
    DialogOverlay: DialogOverlay,
    DialogPortal: DialogPortal,
    DialogTitle: DialogTitle,
    DialogTrigger: DialogTrigger,
    DropdownMenu: DropdownMenu,
    DropdownMenuCheckboxItem: DropdownMenuCheckboxItem,
    DropdownMenuContent: DropdownMenuContent,
    DropdownMenuGroup: DropdownMenuGroup,
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuLabel: DropdownMenuLabel,
    DropdownMenuPortal: DropdownMenuPortal,
    DropdownMenuRadioGroup: DropdownMenuRadioGroup,
    DropdownMenuRadioItem: DropdownMenuRadioItem,
    DropdownMenuSeparator: DropdownMenuSeparator,
    DropdownMenuShortcut: DropdownMenuShortcut,
    DropdownMenuSub: DropdownMenuSub,
    DropdownMenuSubContent: DropdownMenuSubContent,
    DropdownMenuSubTrigger: DropdownMenuSubTrigger,
    DropdownMenuTrigger: DropdownMenuTrigger,
    EmailIcon: EmailIcon,
    EntitiesIcon: EntitiesIcon,
    HelpIcon: HelpIcon,
    ModulesIcon: ModulesIcon,
    ReusableListIcon: ReusableListIcon,
    RolesIcon: RolesIcon,
    SectionDivider: SectionDivider,
    ServiceCategoryIcon: ServiceCategoryIcon,
    ServiceIcon: ServiceIcon,
    Tabs: Tabs,
    TabsContent: TabsContent,
    TabsList: TabsList,
    TabsTrigger: TabsTrigger,
    TeamsIcon: TeamsIcon,
    UsersIcon: UsersIcon,
    buttonVariants: buttonVariants,
    cn: cn
});
