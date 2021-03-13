import editForm from './NetWeightControl.form';
declare const NetWeightControl_base: any;
export default class NetWeightControl extends NetWeightControl_base {
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
    getDisplayValue(value: any, weightPart: any): string;
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
