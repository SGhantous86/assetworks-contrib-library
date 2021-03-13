Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control checkbox-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <input type="checkbox" id="' +
((__t = (ctx.componentKey)) == null ? '' : __t) +
'" ' +
((__t = (ctx.checkboxChecked(ctx.value,ctx.checkedValue))) == null ? '' : __t) +
'><label for="' +
((__t = (ctx.componentKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.fieldLabel)) == null ? '' : __t) +
'</label>\r\n    ';
 } ;
__p += '\r\n</div>';
return __p
}