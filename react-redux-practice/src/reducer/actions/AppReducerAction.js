export const Add = (data) => {
    return {type: "ADD_COUNTER", payload: data}
}

export const Subtract = (data) => {
    return {type: "REMOVE_COUNTER", payload: data}
}