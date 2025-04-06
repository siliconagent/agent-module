// src/types/execution.ts
export interface ExecutionSchedule {
  start(): Promise<void>;
  stop(): Promise<void>;
  onTick(callback: () => void): void;
}

export interface ResourceManager {
  // Define resource management methods
  allocateResources(agentId: string, resources: any): Promise<boolean>;
  releaseResources(agentId: string): Promise<void>;
}

export interface ExecutionControls {
  startAgent(agentId: string, config?: any): Promise<void>;
  stopAgent(agentId: string): Promise<void>;
  pauseAgent(agentId: string): Promise<void>;
  getAgentStatus(agentId: string): Promise<AgentStatus>;
  forceTerminateAgent(agentId: string): Promise<void>;
}
