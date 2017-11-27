export interface IYamlConfig {
    content?: string;
}

export class YamlConfig implements IYamlConfig {
    content?: string;

    public static initialize(): IYamlConfig {
        const result = new YamlConfig();
        result.content = '';
        return result;
    }
}
