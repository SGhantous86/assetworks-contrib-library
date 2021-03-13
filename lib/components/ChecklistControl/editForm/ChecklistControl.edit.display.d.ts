declare const _default: ({
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    addAnother?: undefined;
    templates?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    addAnother: string;
    templates: {
        footer: string;
        header: string;
        row: string;
    };
    components: {
        weight: number;
        input: boolean;
        inputType: string;
        label: string;
        key: string;
        type: string;
        validate: {
            required: boolean;
        };
    }[];
    tooltip?: undefined;
})[];
export default _default;
