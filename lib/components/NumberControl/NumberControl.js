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
import editForm from './NumberControl.form';
import { TicketControlType } from '../../enums/control-type';
var NumberControl = /** @class */ (function (_super) {
    __extends(NumberControl, _super);
    function NumberControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    NumberControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.NumberControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                unitLabel: ''
            }
        });
    };
    NumberControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.NumberControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            unitLabel: this.component.customOptions.unitLabel
        }));
    };
    NumberControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    NumberControl.prototype.getValue = function () {
        return this.value;
    };
    NumberControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    NumberControl.editForm = editForm;
    NumberControl.builderInfo = {
        title: 'Number Control',
        group: 'basic',
        icon: 'fa fa-hashtag',
        weight: 0,
        schema: NumberControl.schema()
    };
    return NumberControl;
}(FieldComponent));
export default NumberControl;
