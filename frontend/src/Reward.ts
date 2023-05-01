export type Reward = {
    id: string,
    name: string,
    description: string,
    price: number,
    savingAllocated: number,
    statusOpen: boolean,
    rewardCreated: Date
}
export type NewReward = {
    name: string,
    description: string,
    price: number,
}