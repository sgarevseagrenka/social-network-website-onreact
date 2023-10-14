const MESSAGE_CHANGE = "MESSAGE_CHANGE"
const SEND_MESSAGE = "SEND_MESSAGE"
let initial_state = {
    messages_users: [
        { id: 2048, name: 'MrBubble' },
        { id: 0, name: "vaza bez wadi" }
    ],
    messages_texts: [
        { id: 1, message: "sponsored by vaza s vadoy. vaza s vadoy is a vaza containing vada witch hydrate.  you can buy it tuday for only 9.999$", nickname: "fireball" },
        { id: 2, nickname: "toasted grenka", message: "goes best with an vaza s vadoy" }
    ],
    new_message_text: ""
}

let messages_reduser = (state = initial_state, action) => {
    if (action.type == MESSAGE_CHANGE) {
        state.new_message_text = action.text
    }
    else if (action.type == SEND_MESSAGE) {
        let new_message = {
            id: 0,
            message: state.new_message_text,
            nickname: "toasted grenka"
        }
        state.messages_texts.push(new_message)
        state.new_message_text = ""
    }
    return state
}
export default messages_reduser

export let send_message_AC = () => {
    return {
        type: SEND_MESSAGE,
        id: 9

    }
}
export let on_message_change_AC = (text) => {
    return {
        type: MESSAGE_CHANGE,
        text: text
    }
}
