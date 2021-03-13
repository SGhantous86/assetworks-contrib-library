var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './ImageControl.form';
import { TicketControlType } from '../../enums/control-type';
var ImageControl = /** @class */ (function (_super) {
    __extends(ImageControl, _super);
    function ImageControl(component, options, data) {
        var _this = _super.call(this, component, options, data) || this;
        _this.value = '';
        return _this;
    }
    ImageControl.schema = function () {
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
    };
    ImageControl.prototype.getImageHeight = function (height) {
        if (!height || height === 'auto') {
            return 'auto';
        }
        return height + 'px';
    };
    ImageControl.prototype.getImageWidth = function (width) {
        if (!width || width === 'auto') {
            return 'auto';
        }
        return width + 'px';
    };
    ImageControl.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate(TicketControlType.ImageControl, {
            fieldLabel: this.component.customOptions.fieldLabel,
            width: this.component.customOptions.width,
            hideComponent: this.component.hideComponent,
            imageWidth: this.component.customOptions.imageWidth,
            imageHeight: this.component.customOptions.imageHeight,
            value: this.value,
            getImageHeight: this.getImageHeight.bind(this),
            getImageWidth: this.getImageWidth.bind(this)
        }));
    };
    ImageControl.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    ImageControl.prototype.getValue = function () {
        return this.value;
    };
    ImageControl.prototype.setValue = function (value) {
        if (!value) {
            return;
        }
        return value;
    };
    ImageControl.editForm = editForm;
    ImageControl.builderInfo = {
        title: 'Image Control',
        group: 'basic',
        icon: 'fa fa-image',
        weight: 0,
        schema: ImageControl.schema()
    };
    return ImageControl;
}(FieldComponent));
export default ImageControl;
