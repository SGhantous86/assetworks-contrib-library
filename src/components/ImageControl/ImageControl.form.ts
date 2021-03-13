import componentForm from 'formiojs/components/_classes/component/Component.form';
import ImageControlEditDisplay from './editForm/ImageControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: ImageControlEditDisplay
        }
    ], ...extend);
}