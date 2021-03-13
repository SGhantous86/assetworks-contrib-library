import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './TextControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class TicketTextControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.TextControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,
                isMultiline: false                
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Text Control',
        group: 'basic',
        icon: 'fa fa-font',
        weight: 0,
        schema: TicketTextControl.schema()
    }

    getClass(isMultiline: boolean) {
        if (isMultiline) {
            return '';
        }
        return 'single-line'
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.TextControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            isMultiline: this.component.customOptions.isMultiline,
            hideComponent: this.component.hideComponent,
            value: this.value,
            getClass: this.getClass.bind(this)
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