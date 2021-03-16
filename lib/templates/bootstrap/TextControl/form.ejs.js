Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control text-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <div class="field-label">' +
((__t = ( ctx.fieldLabel )) == null ? '' : __t) +
'</div>\r\n        <div class="field-value ' +
((__t = (ctx.getClass(ctx.isMultiline))) == null ? '' : __t) +
'">\r\n            <span>' +
((__t = ( ctx.value )) == null ? '' : __t) +
'</span>&nbsp;<span>' +
((__t = (ctx.getClass(ctx.isMultiline))) == null ? '' : __t) +
'</span>\r\n        </div>\r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}