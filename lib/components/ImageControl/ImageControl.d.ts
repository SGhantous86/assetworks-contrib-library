import editForm from './ImageControl.form';
declare const ImageControl_base: any;
export default class ImageControl extends ImageControl_base {
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
    getImageHeight(height: any): string;
    getImageWidth(width: any): string;
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
    setValue(value: any): any;
}
export {};
