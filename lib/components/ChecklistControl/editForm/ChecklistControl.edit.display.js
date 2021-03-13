export default [
    {
        weight: 0,
        type: 'textfield',
        input: true,
        key: 'customOptions.fieldLabel',
        label: 'Label',
        tooltip: 'The label for the field'
    },
    {
        weight: 10,
        type: 'editgrid',
        input: true,
        key: 'customOptions.options',
        label: 'Checklist Options',
        addAnother: 'Add Checklist Option',
        templates: {
            footer: '',
            header: '<div class="row"><div class="col-sm-6"><strong>Checklist Options</strong></div><div>',
            row: '<div class="row"><div class="col-sm-6"><div>{{ row.text }} </div></div><div class="col-sm-2"><div class="btn-group pull-right"><div class="btn btn-default editRow">Edit</div><div class="btn btn-danger removeRow">Delete</div></div></div></div>'
        },
        components: [
            {
                weight: 0,
                input: true,
                inputType: 'text',
                label: 'Checkbox Tag',
                key: 'tag',
                type: 'textfield',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                input: true,
                inputType: 'text',
                label: 'Checkbox Text',
                key: 'text',
                type: 'textfield',
                validate: {
                    required: true
                }
            }
        ]
    },
];
