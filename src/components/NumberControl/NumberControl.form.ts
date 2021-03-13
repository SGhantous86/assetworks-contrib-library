import componentForm from 'formiojs/components/_classes/component/Component.form';
import NumberControlEditDisplay from './editForm/NumberControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: NumberControlEditDisplay
        }
    ], ...extend);
}