import { useState } from "react";

export const usePricing = () => {
    const [plan, setPlan] = useState({
        name: 'month',
        basicPrice: '$19.00',
        proPrice: '$39.00',
        businessPrice: '$69.00',
    })


    const changePlan = () => {
        if (plan.name === "month") {
            setPlan({
                name: 'year',
                basicPrice: '$190.00',
                proPrice: '$390.00',
                businessPrice: '$690.00',
            })
        } else {
            setPlan({
                name: 'month',
                basicPrice: '$19.00',
                proPrice: '$39.00',
                businessPrice: '$69.00',
            })
        }
    }

    return {
        plan,
        changePlan
    }
}