import { BeverageModel } from "../../../../../../../shared";

let agentState: AgentState = {
    suggestedResponses: [],
    inProgressOrder: [],
    orderSubmitted: false
};

export const updateState = (state: {
    suggestedResponses: string[],
    inProgressOrder: BeverageModel[],
    orderSubmitted: boolean,
}) => {
    agentState = state;
}

export const getAgentState = () => {
    return agentState;
}

export interface AgentState {
    suggestedResponses: string[];
    inProgressOrder: BeverageModel[];
    orderSubmitted: boolean;
    // lastInterrupt?: ToolRequestPart
}