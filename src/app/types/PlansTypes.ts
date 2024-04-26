export type Plans = {
    id: number,
    type: string,
    value: number,
    month: number,
    benefits: string[],
}

export type OurPlans = {
    title: string,
    plans: Plans[]
}