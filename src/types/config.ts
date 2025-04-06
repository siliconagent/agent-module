// src/types/config.ts
export interface ConfigurationSchema {
  // Define configuration schema structure
}

export interface ConfigurationValidator {
  validate(config: any, schema: ConfigurationSchema): boolean;
}
