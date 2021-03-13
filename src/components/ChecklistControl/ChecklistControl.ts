import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './ChecklistControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class ChecklistControl extends (FieldComponent as any) {
    // tslint:disable-next-line: array-type
    public checks: Array<any>;
    public value: string;
    constructor(component, options, data) {
        super(component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.ChecklistControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                options: []               
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Checklist Control',
        group: 'basic',
        icon: 'fa fa-list',
        weight: 0,
        schema: ChecklistControl.schema()
    }

    checkboxChecked(value, tag) {
        var valueArray = value ? value.split('\t') : [];
        return valueArray.some(x => x.toString().toLowerCase() === tag.toString().toLowerCase()) ? 'checked' : ''
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.ChecklistControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            checklistOptions: this.component.customOptions.options,
            hideComponent: this.component.hideComponent,
            value: this.value,
            checkboxChecked: this.checkboxChecked.bind(this),
            componentKey: this.component.key
        }));
    }

    attach(element) {
        // const refs = {};
5
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

        return super.attach(element);
    }

    getValue() {
        const value = [];
        // tslint:disable-next-line: forin
        // for (let rowIndex in this.checks) {
        //     const row = this.checks[rowIndex];
        //     value[rowIndex] = !!row.checked;
        // }
        return value;
    }

    setValue(value) {
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
    }
}