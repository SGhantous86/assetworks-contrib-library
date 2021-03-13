import componentForm from 'formiojs/components/_classes/component/Component.form';
import LinkedAssetComboBoxControlEditDisplay from './editForm/LinkedAssetComboBoxControl.edit.display';
export default function(...extend) {
    return componentForm([
        {
            key: 'display',
            components: LinkedAssetComboBoxControlEditDisplay
        }
    ], ...extend);
}