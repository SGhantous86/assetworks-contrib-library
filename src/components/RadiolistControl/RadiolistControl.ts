import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './RadiolistControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class RadiolistControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.RadiolistControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                options: []                
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Radiolist Control',
        group: 'basic',
        icon: 'fa fa-list-ul',
        weight: 0,
        schema: RadiolistControl.schema()
    }

    radioChecked(value, tag) {
        return value === tag ? 'checked' : ''
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.RadiolistControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            radiolistOptions: this.component.customOptions.options,
            hideComponent: this.component.hideComponent,
            value: this.value,
            radioChecked: this.radioChecked.bind(this),
            componentKey: this.component.key
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