import editForm from './ChecklistControl.form';
declare const ChecklistControl_base: any;
export default class ChecklistControl extends ChecklistControl_base {
    checks: Array<any>;
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
    checkboxChecked(value: any, tag: any): "" | "checked";
    render(children: any): any;
    attach(element: any): any;
    getValue(): any[];
    setValue(value: any): any;
}
export {};
