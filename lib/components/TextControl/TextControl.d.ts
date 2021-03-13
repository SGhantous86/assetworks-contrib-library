import editForm from './TextControl.form';
declare const TicketTextControl_base: any;
export default class TicketTextControl extends TicketTextControl_base {
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
    getClass(isMultiline: boolean): "" | "single-line";
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
