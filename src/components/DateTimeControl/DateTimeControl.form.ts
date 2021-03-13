import componentForm from 'formiojs/components/_classes/component/Component.form';
import DateTimeControlEditDisplay from './editForm/DateTimeControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: DateTimeControlEditDisplay
        }
    ], ...extend);
}