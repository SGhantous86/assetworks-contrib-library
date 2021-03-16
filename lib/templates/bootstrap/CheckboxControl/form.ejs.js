Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n    <div class="fss-checkbox-container">\r\n        <div>\r\n            <label class="fss-checkbox">\r\n                <input type="checkbox" ' +
((__t = (ctx.checkboxChecked(ctx.value, ctx.checkedValue))) == null ? '' : __t) +
' />\r\n                <span class="checkbox-checkmark"></span>\r\n            </label>\r\n        </div>\r\n        <div class="fss-checkbox-text">\r\n            <span class="field-value">' +
((__t = (ctx.fieldLabel)) == null ? '' : __t) +
'</span>\r\n        </div>\r\n    </div>    \r\n    ';
 } ;
__p += '\r\n</div>';
return __p
}