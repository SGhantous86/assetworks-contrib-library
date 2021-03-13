import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './NetWeightControl.form';
import { TicketControlType } from '../../enums/control-type';
import { WeightPart } from '../../enums/weight-part';

export default class NetWeightControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.NetWeightControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,                
                weightPart: WeightPart.Gross
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Net Weight Control',
        group: 'basic',
        icon: 'fa fa-weight',
        weight: 0,
        schema: NetWeightControl.schema()
    }

    getDisplayValue(value, weightPart) {
        var displayValue = ''

        if (!value) {
            return displayValue;
        }

        var parts = value.split(',');

        switch (weightPart) {
            case WeightPart.Gross:
                displayValue = parts[0];
                break;
            case WeightPart.Tare:
                displayValue = parts[1];
                break;
            case WeightPart.Net:
                displayValue = parts[2];
                break;
        }

        return displayValue;
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.NetWeightControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            weightPart: this.component.customOptions.weightPart,
            value: this.value,
            getDisplayValue: this.getDisplayValue.bind(this)
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