import { jsx, jsxs } from 'react/jsx-runtime';

/**
 * @your-org/design-system
 * A modern, accessible design system built with TypeScript, React, and CSS Modules
 * 
 * @license MIT
 * @copyright Your Organization
 */
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/atoms/Button/Button.module.css
var Button_default = {};
var Button = ({ children, variant = "primary", onClick }) => /* @__PURE__ */ jsx(
  "button",
  {
    className: Button_default[variant],
    onClick,
    role: "button",
    "aria-pressed": false,
    children
  }
);
var Button_default2 = Button;

// components/atoms/Input/Input.module.css
var Input_default = {};
var Input = (_a) => {
  var _b = _a, {
    label,
    id,
    "aria-label": ariaLabel
  } = _b, props = __objRest(_b, [
    "label",
    "id",
    "aria-label"
  ]);
  const inputId = id || (label == null ? void 0 : label.toLowerCase().replace(/\s+/g, "-"));
  return /* @__PURE__ */ jsxs("div", { children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: inputId, children: label }),
    /* @__PURE__ */ jsx(
      "input",
      __spreadValues({
        id: inputId,
        className: Input_default.input,
        "aria-label": ariaLabel || label || "Input field"
      }, props)
    )
  ] });
};
var Input_default2 = Input;

export { Button_default2 as Button, Input_default2 as Input };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map