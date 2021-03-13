import editForm from './RadiolistControl.form';
declare const RadiolistControl_base: any;
export default class RadiolistControl extends RadiolistControl_base {
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
    radioChecked(value: any, tag: any): "" | "checked";
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
