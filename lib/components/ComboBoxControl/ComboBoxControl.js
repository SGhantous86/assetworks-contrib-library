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
import editForm from './ComboBoxControl.form';
import { TicketControlType } from '../../enums/control-type';
var ComboBoxControl = /** @class */ (function (_super) {
    __extends(ComboBoxControl, _super);
    function ComboBoxControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    ComboBoxControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.ComboBoxControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined
            }
        });
    };
    ComboBoxControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.ComboBoxControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            value: this.value
        }));
    };
    ComboBoxControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    ComboBoxControl.prototype.getValue = function () {
        return this.value;
    };
    ComboBoxControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    ComboBoxControl.editForm = editForm;
    ComboBoxControl.builderInfo = {
        title: 'Combo Box Control',
        group: 'basic',
        icon: 'fa fa-caret-square-down',
        weight: 0,
        schema: ComboBoxControl.schema()
    };
    return ComboBoxControl;
}(FieldComponent));
export default ComboBoxControl;
