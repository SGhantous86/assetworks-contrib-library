var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import componentForm from 'formiojs/components/_classes/component/Component.form';
import TextControlEditDisplay from './editForm/TextControl.edit.display';
export default function () {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return componentForm.apply(void 0, __spreadArrays([[
            {
                key: 'display',
                components: TextControlEditDisplay
            }
        ]], extend));
}
