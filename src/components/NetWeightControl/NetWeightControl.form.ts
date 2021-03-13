import componentForm from 'formiojs/components/_classes/component/Component.form';
import NetWeightControlEditDisplay from './editForm/NetWeightControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: NetWeightControlEditDisplay
        }
    ], ...extend);
}