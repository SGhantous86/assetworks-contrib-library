import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './DateTimeControl.form';
import { TicketControlType } from '../../enums/control-type';
import * as moment from 'moment';

export const MY_FORMATS = {
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

export default class DateTimeControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
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
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'DateTime Control',
        group: 'basic',
        icon: 'fa fa-calendar-alt',
        weight: 0,
        schema: DateTimeControl.schema()
    }

    getDateDisplayValue(value) {
        if (!value) {
            return '';
        }

        const dateValue = moment().set('year', 2000 + (+value.substring(0,2)))
            .set('month', +value.substring(2,4) - 1)
            .set('date', +value.substring(4, 6));

        return dateValue.format(MY_FORMATS.display.dateInput);
    }

    getTimeDisplayValue(value, timePicker) {
        if (!value) {
            return '';
        }

        let timeFormat = 'HH:mm';

        if (timePicker && timePicker.showMeridian) {
            timeFormat = 'hh:mm a';
        }

        const timeValue = moment().set('hour', parseInt(value.substring(6, 8), 10))
            .set('minute', parseInt(value.substring(8, 10), 10));

        return timeValue.format(timeFormat);
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.DateTimeControl, {
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
    }

    attach(element) {
        return super.attach(element);
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        if (!value) {
            return;
        }
        return value;
    }
}