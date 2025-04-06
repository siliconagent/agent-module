import { AgentDefinition } from '../types';

export class AgentRegistry {
  private agentTypes: Map<string, AgentDefinition> = new Map();

  registerAgentType(agentDefinition: AgentDefinition): void {
    if (this.agentTypes.has(agentDefinition.type)) {
      console.warn(`Agent type '${agentDefinition.type}' already registered and is being overwritten.`);
    }
    this.agentTypes.set(agentDefinition.type, agentDefinition);
  }

  getAgentDefinition(agentType: string): AgentDefinition | undefined {
    return this.agentTypes.get(agentType);
  }

  // Optionally, methods to get all agent types, etc.
}
