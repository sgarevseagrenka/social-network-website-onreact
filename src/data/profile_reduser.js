const ADD_POST = "ADD_POST"
const POST_CHANGE = "POST_CHANGE"
let initial_state = {
    posts__infor: [
        { id: 0, message: "sponsored by vaza s vadoy", likes: 9999 },
        { id: 1, message: "vaza s vadoy is a nice combination of vaza and vada for a cheap price of 9.999$ making it the best prouduct on the market you can prepurchase a vaza s vadoy today at https://vazasvadoystore.com/vazasvadoypurchase Note: vasa s vadoy website is currently being constructed you can buy a vaza s vadoy at the vaza s vadoy physical store in zimbabwe", likes: 9999 },
    ],
    new_post_text: ""
}
let profile_reduser = (state = initial_state, action) => {
    if (action.type == ADD_POST) {
        let new_post = {
            id: 6,
            message: state.new_post_text,
            likes: -19998
        }
        state.posts__infor.unshift(new_post)
        state.new_post_text = ""
    } else if (action.type == POST_CHANGE) {
        state.new_post_text = action.text
    }
    return state
}
export default profile_reduser

export let add_post_AC = () => {
    return {
        type: ADD_POST,
        id: 9

    }
}
export let on_post_change_AC = (text) => {
    return {
        type: POST_CHANGE,
        text: text
    }
}