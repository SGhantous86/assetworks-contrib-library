var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './RadiolistControl.form';
import { TicketControlType } from '../../enums/control-type';
var RadiolistControl = /** @class */ (function (_super) {
    __extends(RadiolistControl, _super);
    function RadiolistControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    RadiolistControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.RadiolistControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                options: []
            }
        });
    };
    RadiolistControl.prototype.radioChecked = function (value, tag) {
        return value === tag ? 'checked' : '';
    };
    RadiolistControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.RadiolistControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            radiolistOptions: this.component.customOptions.options,
            hideComponent: this.component.hideComponent,
            value: this.value,
            radioChecked: this.radioChecked.bind(this),
            componentKey: this.component.key
        }));
    };
    RadiolistControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    RadiolistControl.prototype.getValue = function () {
        return this.value;
    };
    RadiolistControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    RadiolistControl.editForm = editForm;
    RadiolistControl.builderInfo = {
        title: 'Radiolist Control',
        group: 'basic',
        icon: 'fa fa-list-ul',
        weight: 0,
        schema: RadiolistControl.schema()
    };
    return RadiolistControl;
}(FieldComponent));
export default RadiolistControl;
