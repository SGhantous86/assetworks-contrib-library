import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './NumberControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class NumberControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.NumberControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,                
                unitLabel: ''
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Number Control',
        group: 'basic',
        icon: 'fa fa-hashtag',
        weight: 0,
        schema: NumberControl.schema()
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.NumberControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            unitLabel: this.component.customOptions.unitLabel
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