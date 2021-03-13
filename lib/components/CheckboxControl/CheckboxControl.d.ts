import editForm from './CheckboxControl.form';
declare const CheckboxControl_base: any;
export default class CheckboxControl extends CheckboxControl_base {
    value: string;
    constructor(component: any, options: any, data: any);
    static schema(): any;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    checkboxChecked(value: any, checkedValue: any): "" | "checked";
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
