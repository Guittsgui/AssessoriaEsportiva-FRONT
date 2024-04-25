export const useToastMessage = (msg: string,type: "error" | "success") => {

    const event = new CustomEvent('addtoast', {
        detail: {
          type,
          message: msg
        }
      })

      return event
}