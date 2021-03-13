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
import editForm from './CheckboxControl.form';
import { TicketControlType } from '../../enums/control-type';
var CheckboxControl = /** @class */ (function (_super) {
    __extends(CheckboxControl, _super);
    function CheckboxControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    CheckboxControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.CheckboxControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                checkedValue: '',
                uncheckedValue: ''
            }
        });
    };
    CheckboxControl.prototype.checkboxChecked = function (value, checkedValue) {
        return value === checkedValue ? 'checked' : '';
    };
    CheckboxControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.CheckboxControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            checkedValue: this.component.customOptions.checkedValue,
            uncheckedValue: this.component.customOptions.uncheckedValue,
            componentKey: this.component.key,
            checkboxChecked: this.checkboxChecked.bind(this),
            value: this.value
        }));
    };
    CheckboxControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    CheckboxControl.prototype.getValue = function () {
        return this.value;
    };
    CheckboxControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    CheckboxControl.editForm = editForm;
    CheckboxControl.builderInfo = {
        title: 'Checkbox Control',
        group: 'basic',
        icon: 'fa fa-check-square',
        weight: 0,
        schema: CheckboxControl.schema()
    };
    return CheckboxControl;
}(FieldComponent));
export default CheckboxControl;
