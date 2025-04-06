// src/types/system.ts
export interface AgentSystem {
  registerAgentType(agentDefinition: AgentDefinition): void;
  createAgent(agentType: string, config: any): Promise<AgentInstance>;
  startAgent(agentId: string): Promise<void>;
  stopAgent(agentId: string): Promise<void>;
  getAgentStatus(agentId: string): Promise<AgentStatus>;
  // ... other system level interfaces
}
