Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ticket-control radiolist-control">\r\n    ';
 if (!ctx.hideComponent) { ;
__p += '\r\n        <div class="field-label">' +
((__t = ( ctx.fieldLabel )) == null ? '' : __t) +
'</div>\r\n            ';
 for (let i = 0; i < ctx.radiolistOptions.length; i++) { ;
__p += '\r\n                <div class="fss-radiobutton-container">\r\n                    <div>\r\n                        <label class="fss-radiobutton">\r\n                            <input type="radio" ' +
((__t = (ctx.radioChecked(ctx.value, ctx.radiolistOptions[i].tag))) == null ? '' : __t) +
' />\r\n                            <span class="radiobutton-checkmark"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class="fss-radiobutton-text">\r\n                        <span class="field-value">' +
((__t = (ctx.radiolistOptions[i].text)) == null ? '' : __t) +
'</span>\r\n                    </div>\r\n                </div>                \r\n            ';
 } ;
__p += '        \r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}