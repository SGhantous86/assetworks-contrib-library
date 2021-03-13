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
import editForm from './IntegrationActionControl.form';
import { TicketControlType } from '../../enums/control-type';
var IntegrationActionControl = /** @class */ (function (_super) {
    __extends(IntegrationActionControl, _super);
    function IntegrationActionControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    IntegrationActionControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.IntegrationActionControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined
            }
        });
    };
    IntegrationActionControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.IntegrationActionControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            value: this.value
        }));
    };
    IntegrationActionControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    IntegrationActionControl.prototype.getValue = function () {
        return this.value;
    };
    IntegrationActionControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    IntegrationActionControl.editForm = editForm;
    IntegrationActionControl.builderInfo = {
        title: 'Integration Action Control',
        group: 'basic',
        icon: 'fa fa-download',
        weight: 0,
        schema: IntegrationActionControl.schema()
    };
    return IntegrationActionControl;
}(FieldComponent));
export default IntegrationActionControl;
