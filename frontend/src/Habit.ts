export type Habit = {
    id: string,
    name: string,
    description: string,
    dailyReward: number,
    startTime: Date,
    lastTimeCollected: Date,
    endTime: Date,
    statusOpen: boolean
}
export type NewHabit = {
    name: string,
    description: string,
    dailyReward: number
}