export const createCollateral = (name: string, value: number, id: number)  => {
    return {
        type: "CREATE-COLLATERAL",
        payload: {
            name,
            value,
            id,
        }
    }
  }

export const updateCollateral = (name: string, value: number, id: number)  => {
    return {
        type: "UPDATE-COLLATERAL",
        payload: {
            name,
            value,
            id,
        }
    }
  }