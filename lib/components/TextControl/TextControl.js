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
import editForm from './TextControl.form';
import { TicketControlType } from '../../enums/control-type';
var TicketTextControl = /** @class */ (function (_super) {
    __extends(TicketTextControl, _super);
    function TicketTextControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    TicketTextControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.TextControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                isMultiline: false
            }
        });
    };
    TicketTextControl.prototype.getClass = function (isMultiline) {
        if (isMultiline) {
            return '';
        }
        return 'single-line';
    };
    TicketTextControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.TextControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            isMultiline: this.component.customOptions.isMultiline,
            hideComponent: this.component.hideComponent,
            value: this.value,
            getClass: this.getClass.bind(this)
        }));
    };
    TicketTextControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    TicketTextControl.prototype.getValue = function () {
        return this.value;
    };
    TicketTextControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    TicketTextControl.editForm = editForm;
    TicketTextControl.builderInfo = {
        title: 'Text Control',
        group: 'basic',
        icon: 'fa fa-font',
        weight: 0,
        schema: TicketTextControl.schema()
    };
    return TicketTextControl;
}(FieldComponent));
export default TicketTextControl;
