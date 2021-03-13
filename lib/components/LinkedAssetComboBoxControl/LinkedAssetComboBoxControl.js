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
import editForm from './LinkedAssetComboBoxControl.form';
import { TicketControlType } from '../../enums/control-type';
var LinkedAssetComboBoxControl = /** @class */ (function (_super) {
    __extends(LinkedAssetComboBoxControl, _super);
    function LinkedAssetComboBoxControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    LinkedAssetComboBoxControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.LinkedAssetComboBoxControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined
            }
        });
    };
    LinkedAssetComboBoxControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.LinkedAssetComboBoxControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            value: this.value
        }));
    };
    LinkedAssetComboBoxControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    LinkedAssetComboBoxControl.prototype.getValue = function () {
        return this.value;
    };
    LinkedAssetComboBoxControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    LinkedAssetComboBoxControl.editForm = editForm;
    LinkedAssetComboBoxControl.builderInfo = {
        title: 'Linked Asset Combo Box Control',
        group: 'basic',
        icon: 'fa fa-link',
        weight: 0,
        schema: LinkedAssetComboBoxControl.schema()
    };
    return LinkedAssetComboBoxControl;
}(FieldComponent));
export default LinkedAssetComboBoxControl;
