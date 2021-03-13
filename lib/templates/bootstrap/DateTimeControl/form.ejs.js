Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control date-time-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <div class="field-label">' +
((__t = ( ctx.fieldLabel )) == null ? '' : __t) +
'</div>\r\n        <div class="field-value">\r\n            ';
 if (ctx.showDate ) { ;
__p += '\r\n                <span>' +
((__t = ( ctx.getDateDisplayValue(ctx.value) )) == null ? '' : __t) +
'</span>\r\n            ';
  } ;
__p += '\r\n            ';
 if (ctx.showTime ) { ;
__p += '\r\n                &nbsp;<span>' +
((__t = ( ctx.getTimeDisplayValue(ctx.value, ctx.timePicker) )) == null ? '' : __t) +
'</span>\r\n            ';
  } ;
__p += '\r\n        </div>\r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}