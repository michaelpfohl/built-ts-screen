export const createLoan = (principal: string, interest: string, term: string)  => {
    return {
        type: "CREATE-LOAN",
        payload: {
            principal,
            interest,
            term
        }
    }
  }