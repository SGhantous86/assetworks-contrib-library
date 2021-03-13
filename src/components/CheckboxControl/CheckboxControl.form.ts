import componentForm from 'formiojs/components/_classes/component/Component.form';
import CheckboxControlEditDisplay from './editForm/CheckboxControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: CheckboxControlEditDisplay
        }
    ], ...extend);
}