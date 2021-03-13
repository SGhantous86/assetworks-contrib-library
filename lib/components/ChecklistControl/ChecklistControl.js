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
import editForm from './ChecklistControl.form';
import { TicketControlType } from '../../enums/control-type';
var ChecklistControl = /** @class */ (function (_super) {
    __extends(ChecklistControl, _super);
    function ChecklistControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    ChecklistControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.ChecklistControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                options: []
            }
        });
    };
    ChecklistControl.prototype.checkboxChecked = function (value, tag) {
        var valueArray = value ? value.split('\t') : [];
        return valueArray.some(function (x) { return x.toString().toLowerCase() === tag.toString().toLowerCase(); }) ? 'checked' : '';
    };
    ChecklistControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.ChecklistControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            checklistOptions: this.component.customOptions.options,
            hideComponent: this.component.hideComponent,
            value: this.value,
            checkboxChecked: this.checkboxChecked.bind(this),
            componentKey: this.component.key
        }));
    };
    ChecklistControl.prototype.attach = function (element) {
        // const refs = {};
        5;
        // // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < this.component.customOptions.options.length; i++) {
        //     refs[`${this.component.key}-${this.component.customOptions.options[i].tag}`] = 'multiple';
        // }
        // this.loadRefs(element, refs);
        // this.checks = [];
        // // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < this.component.customOptions.options.length; i++) {
        //     this.checks[i] = Array.prototype.slice.call(this.refs[`${this.component.key}-${this.component.customOptions.options[i].tag}`], 0);
        // }
        return _super.prototype.attach.call(this, element);
    };
    ChecklistControl.prototype.getValue = function () {
        var value = [];
        // tslint:disable-next-line: forin
        // for (let rowIndex in this.checks) {
        //     const row = this.checks[rowIndex];
        //     value[rowIndex] = !!row.checked;
        // }
        return value;
    };
    ChecklistControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
        // this.valueArray = value.split('\\t');
        // // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < this.checks.length; i++ ) {
        //     const check = this.checks[i];
        //     const checked = this.valueArray.indexOf(this.checks[i].id) !== -1;
        //     check.value = checked;
        //     check.checked = checked;
        // }
    };
    ChecklistControl.editForm = editForm;
    ChecklistControl.builderInfo = {
        title: 'Checklist Control',
        group: 'basic',
        icon: 'fa fa-list',
        weight: 0,
        schema: ChecklistControl.schema()
    };
    return ChecklistControl;
}(FieldComponent));
export default ChecklistControl;
