import componentForm from 'formiojs/components/_classes/component/Component.form';
import ComboBoxControlEditDisplay from './editForm/ComboBoxControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: ComboBoxControlEditDisplay
        }
    ], ...extend);
}