import editForm from './DateTimeControl.form';
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
declare const DateTimeControl_base: any;
export default class DateTimeControl extends DateTimeControl_base {
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
    getDateDisplayValue(value: any): string;
    getTimeDisplayValue(value: any, timePicker: any): string;
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
