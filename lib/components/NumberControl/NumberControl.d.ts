import editForm from './NumberControl.form';
declare const NumberControl_base: any;
export default class NumberControl extends NumberControl_base {
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
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
