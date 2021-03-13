import componentForm from 'formiojs/components/_classes/component/Component.form';
import TextControlEditDisplay from './editForm/TextControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: TextControlEditDisplay
        }
    ], ...extend);
}