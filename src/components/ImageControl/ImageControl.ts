import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './ImageControl.form';
import { TicketControlType } from '../../enums/control-type';

export default class ImageControl extends (FieldComponent as any) {
    public value: string;
    constructor(component, options, data) {
        super (component, options, data);
        this.value = '';
    }

    static schema() {
        return FieldComponent.schema({
            type: TicketControlType.ImageControl,
            hideComponent: false,
            customOptions: {
                fieldLabel: '',
                width: undefined,                
                imageWidth: 'auto',
                imageHeight: 'auto'
            }
        });
    }

    public static editForm = editForm;

    static builderInfo = {
        title: 'Image Control',
        group: 'basic',
        icon: 'fa fa-image',
        weight: 0,
        schema: ImageControl.schema()
    }

    getImageHeight(height) {
        if (!height || height === 'auto') {
            return 'auto';
        }
        return height + 'px';
    }

    getImageWidth(width) {
        if (!width || width === 'auto') {
            return 'auto';
        }
        return width + 'px';
    }

    public render(children) {
        return super.render(this.renderTemplate(TicketControlType.ImageControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            imageWidth: this.component.customOptions.imageWidth,
            imageHeight: this.component.customOptions.imageHeight,
            value: this.value,
            getImageHeight: this.getImageHeight.bind(this),
            getImageWidth: this.getImageWidth.bind(this)
        }));
    }

    attach(element) {
        return super.attach(element);
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        if (!value) {
            return;
        }
        return value;
    }
}