export class BootstrapSelect {
    placeholder?: string;
    options?: Option[];
    withIcon = false;

    constructor() {
        this.placeholder = 'Choose ...';
        this.options = [];
    }

    public addOption(value: string, label: string, selected: boolean, icon: string = '') {
        const option = new Option(label, value, false, selected, icon);
        this.options.push(option);
    }

    public changeSelectedOption(val: string) {
        this.options.forEach((item, index) => {
            if (val === item.value) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
    }

    public findSelectedOption(): Option {
        const filtered = this.options.filter((option: Option) => option.selected);
        return filtered[0];
    }
}

export class Option {
    label: String;
    value: String;
    disabled: boolean;
    selected: boolean;
    icon: string;

    constructor(label: String, value: String, disabled: boolean, selected: boolean, icon = '') {
        this.label = label;
        this.value = value;
        this.disabled = disabled;
        this.selected = selected;
        this.icon = icon;
    }
}
