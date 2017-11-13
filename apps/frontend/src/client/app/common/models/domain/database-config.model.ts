import { ModuleType } from '../domain/module.model';
import { DatabaseType } from '../domain/database.model';

export interface IDatabaseConfig {
    type?: DatabaseType;
    username?: string;
    password?: string;
    hostname?: string;
    port?: number;
    service?: string;
}

export class DatabaseConfig implements IDatabaseConfig {
    type?: DatabaseType;
    username?: string;
    password?: string;
    hostname?: string;
    port?: number;
    service?: string;

    public static fromResult(res: any): IDatabaseConfig {
        let template = <IDatabaseConfig>({
            type: DatabaseType[res.type],
            username: res.username,
            password: res.password,
            hostname: res.hostname,
            port: res.port,
            service: res.service,
        });
        return template;
    }

    public static initialize(): IDatabaseConfig {
        var result = new DatabaseConfig();
        result.type = DatabaseType.ORACLE;
        result.username = '';
        result.password = '';
        result.hostname = '';
        result.port = 0;
        result.service = '';
        return result;
    }
}
