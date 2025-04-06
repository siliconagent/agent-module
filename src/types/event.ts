// src/types/event.ts
export interface AgentEvent {
  type: string;
  source: string;
  timestamp: Date;
  payload: any;
}

export interface EventFilter {
  // Define event filter properties/methods
}

export interface EventProcessor {
  // Define event processor methods
  processEvent(event: AgentEvent): Promise<void>;
}

export interface EventDetector {
  detectEvents(): Promise<AgentEvent[]>;
}

export interface EventSource {
  start(): Promise<void>;
  stop(): Promise<void>;
  onEvent(listener: (event: AgentEvent) => void): void;
}
