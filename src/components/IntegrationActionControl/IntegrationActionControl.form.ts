import componentForm from 'formiojs/components/_classes/component/Component.form';
import IntegrationActionControlEditDisplay from './editForm/IntegrationActionControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: IntegrationActionControlEditDisplay
        }
    ], ...extend);
}