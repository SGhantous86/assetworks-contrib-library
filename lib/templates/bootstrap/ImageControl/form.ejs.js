Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '\r\n<div class="ticket-control image-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <div class="field-label">' +
((__t = ( ctx.fieldLabel )) == null ? '' : __t) +
'</div>\r\n        <div class="field-value">\r\n            <img src="' +
((__t = (ctx.value)) == null ? '' : __t) +
'" alt="' +
((__t = (ctx.fieldLabel)) == null ? '' : __t) +
'" width="' +
((__t = (ctx.getImageWidth(ctx.imageWidth))) == null ? '' : __t) +
'" height="{{ctx.getImageHeight(ctx.imageHeight)">\r\n        </div>\r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}