// src/types/agent.ts
export interface AgentDefinition {
  type: string;
  name: string;
  description?: string;
  configSchema: any; // Define a more specific type for configSchema
  factory: AgentFactory;
}

export interface AgentInstance {
  id: string;
  type: string;
  config: any;
  status: AgentStatus;
  initialize(): Promise<void>;
  start(): Promise<void>;
  stop(): Promise<void>;
  getStatus(): AgentStatus;
}

export type AgentFactory = (id: string, config: any, context: AgentContext) => AgentModule;

export interface AgentModule {
  initialize(): Promise<void>;
  start(): Promise<void>;
  stop(): Promise<void>;
  status(): AgentStatus;
}

export type AgentStatus = 'pending' | 'initializing' | 'running' | 'stopped' | 'error';

export interface AgentContext {
  // Define context properties if needed, e.g., event bus, logger, etc.
}
