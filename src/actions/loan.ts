export const createLoan = (principal: number, interest: number, term: number)  => {
    return {
        type: "CREATE-LOAN",
        payload: {
            principal,
            interest,
            term
        }
    }
  }