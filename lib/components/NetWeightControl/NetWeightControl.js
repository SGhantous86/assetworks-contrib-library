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
import editForm from './NetWeightControl.form';
import { TicketControlType } from '../../enums/control-type';
import { WeightPart } from '../../enums/weight-part';
var NetWeightControl = /** @class */ (function (_super) {
    __extends(NetWeightControl, _super);
    function NetWeightControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    NetWeightControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.NetWeightControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                weightPart: WeightPart.Gross
            }
        });
    };
    NetWeightControl.prototype.getDisplayValue = function (value, weightPart) {
        var displayValue = '';
        if (!value) {
            return displayValue;
        }
        var parts = value.split(',');
        switch (weightPart) {
            case WeightPart.Gross:
                displayValue = parts[0];
                break;
            case WeightPart.Tare:
                displayValue = parts[1];
                break;
            case WeightPart.Net:
                displayValue = parts[2];
                break;
        }
        return displayValue;
    };
    NetWeightControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.NetWeightControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            weightPart: this.component.customOptions.weightPart,
            value: this.value,
            getDisplayValue: this.getDisplayValue.bind(this)
        }));
    };
    NetWeightControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    NetWeightControl.prototype.getValue = function () {
        return this.value;
    };
    NetWeightControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    NetWeightControl.editForm = editForm;
    NetWeightControl.builderInfo = {
        title: 'Net Weight Control',
        group: 'basic',
        icon: 'fa fa-weight',
        weight: 0,
        schema: NetWeightControl.schema()
    };
    return NetWeightControl;
}(FieldComponent));
export default NetWeightControl;
