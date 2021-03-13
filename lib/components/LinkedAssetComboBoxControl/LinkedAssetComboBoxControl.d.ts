import editForm from './LinkedAssetComboBoxControl.form';
declare const LinkedAssetComboBoxControl_base: any;
export default class LinkedAssetComboBoxControl extends LinkedAssetComboBoxControl_base {
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
