import componentForm from 'formiojs/components/_classes/component/Component.form';
import ChecklistEditDisplay from './editForm/ChecklistControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: ChecklistEditDisplay
        }
    ], ...extend);
}