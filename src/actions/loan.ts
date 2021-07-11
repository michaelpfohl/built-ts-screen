export const createLoan = (principal: string, interest: string, term: string)  => {
    return {
        type: "CREATE",
        payload: {
            principal,
            interest,
            term
        }
    }
  }