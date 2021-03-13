import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './LinkedAssetComboBoxControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class LinkedAssetComboBoxControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.LinkedAssetComboBoxControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined                
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Linked Asset Combo Box Control',
        group: 'basic',
        icon: 'fa fa-link',
        weight: 0,
        schema: LinkedAssetComboBoxControl.schema()
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.LinkedAssetComboBoxControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
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