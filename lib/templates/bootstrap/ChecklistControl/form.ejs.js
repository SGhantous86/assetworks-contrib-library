Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control checklist-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <div class="field-label">' +
((__t = ( ctx.fieldLabel )) == null ? '' : __t) +
'</div>\r\n        ';
 for (let i = 0; i < ctx.checklistOptions.length; i++) { ;
__p += '\r\n        <div class="checklist-option">\r\n            <input type="checkbox" id="' +
((__t = (ctx.componentKey + ctx.checklistOptions[i].tag)) == null ? '' : __t) +
'" ' +
((__t = (ctx.checkboxChecked(ctx.value,ctx.checklistOptions[i].tag))) == null ? '' : __t) +
'><label for="' +
((__t = (ctx.componentKey + ctx.checklistOptions[i].tag)) == null ? '' : __t) +
'">' +
((__t = ( ctx.checklistOptions[i].text )) == null ? '' : __t) +
'</label>\r\n        </div>\r\n        ';
 } ;
__p += '\r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}