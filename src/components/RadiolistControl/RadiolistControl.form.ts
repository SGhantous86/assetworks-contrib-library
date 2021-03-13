import componentForm from 'formiojs/components/_classes/component/Component.form';
import RadiolistControlEditDisplay from './editForm/RadiolistControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: RadiolistControlEditDisplay
        }
    ], ...extend);
}