import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './CheckboxControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class CheckboxControl extends (FieldComponent as any) {
    public value: string;
    constructor (component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.CheckboxControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,                
                checkedValue: '',
                uncheckedValue: ''
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Checkbox Control',
        group: 'basic',
        icon: 'fa fa-check-square',
        weight: 0,
        schema: CheckboxControl.schema()
    }

    checkboxChecked(value, checkedValue) {
        return value === checkedValue ? 'checked' : '';
    }

    public render(children) {        
        return super.render(this.renderTemplate(TicketControlType.CheckboxControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            checkedValue: this.component.customOptions.checkedValue,
            uncheckedValue: this.component.customOptions.uncheckedValue,
            componentKey: this.component.key,
            checkboxChecked: this.checkboxChecked.bind(this),
            value: this.value
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