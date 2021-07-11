export const createCollateral = (name: string, value: number)  => {
    return {
        type: "CREATE-COLLATERAL",
        payload: {
            name,
            value,
        }
    }
  }