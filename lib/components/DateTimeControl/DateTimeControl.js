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
import editForm from './DateTimeControl.form';
import { TicketControlType } from '../../enums/control-type';
import * as moment from 'moment';
export var MY_FORMATS = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'MM/DD/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
var DateTimeControl = /** @class */ (function (_super) {
    __extends(DateTimeControl, _super);
    function DateTimeControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    DateTimeControl.schema = function () {
        return FieldComponent.schema({
            type: TicketControlType.DateTimeControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                showDate: true,
                showTime: true,
                timePicker: undefined
            }
        });
    };
    DateTimeControl.prototype.getDateDisplayValue = function (value) {
        if (!value) {
            return '';
        }
        var dateValue = moment().set('year', 2000 + (+value.substring(0, 2)))
            .set('month', +value.substring(2, 4) - 1)
            .set('date', +value.substring(4, 6));
        return dateValue.format(MY_FORMATS.display.dateInput);
    };
    DateTimeControl.prototype.getTimeDisplayValue = function (value, timePicker) {
        if (!value) {
            return '';
        }
        var timeFormat = 'HH:mm';
        if (timePicker && timePicker.showMeridian) {
            timeFormat = 'hh:mm a';
        }
        var timeValue = moment().set('hour', parseInt(value.substring(6, 8), 10))
            .set('minute', parseInt(value.substring(8, 10), 10));
        return timeValue.format(timeFormat);
    };
    DateTimeControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.DateTimeControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            showDate: this.component.customOptions.showDate,
            showTime: this.component.customOptions.showTime,
            timePicker: this.component.timePicker,
            value: this.value,
            getDateDisplayValue: this.getDateDisplayValue.bind(this),
            getTimeDisplayValue: this.getTimeDisplayValue.bind(this)
        }));
    };
    DateTimeControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    DateTimeControl.prototype.getValue = function () {
        return this.value;
    };
    DateTimeControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    DateTimeControl.editForm = editForm;
    DateTimeControl.builderInfo = {
        title: 'DateTime Control',
        group: 'basic',
        icon: 'fa fa-calendar-alt',
        weight: 0,
        schema: DateTimeControl.schema()
    };
    return DateTimeControl;
}(FieldComponent));
export default DateTimeControl;
