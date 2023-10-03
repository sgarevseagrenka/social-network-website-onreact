let store = {
    _state: {
        profile_page: {
            posts__infor: [
                { id: 0, message: "sponsored by vaza s vadoy", likes: 9999 },
                { id: 1, message: "vaza s vadoy is a nice combination of vaza and vada for a cheap price of 9.999$ making it the best prouduct on the market you can prepurchase a vaza s vadoy today at https://vazasvadoystore.com/vazasvadoypurchase Note: vasa s vadoy website is currently being constructed you can buy a vaza s vadoy at the vaza s vadoy physical store in zimbabwe", likes: 9999 },
            ],
            new_post_text: ""
        },
        messages_page: {
            messages_users: [
                { id: 2048, name: 'MrBubble' },
                { id: 0, name: "vaza bez wadi" }
            ],
            messages_texts: [
                { id: 1, message: "sponsored by vaza s vadoy. vaza s vadoy is a vaza containing vada witch hydrate.  you can buy it tuday for only 9.999$", nickname: "fireball" },
                { id: 2, nickname: "toasted grenka", message: "goes best with an vaza s vadoy" }
            ],
            new_message_text: ""
        },
        friends_page: {
            friends_list: [
                { id: 0, nickname: "ffffffffffff", pic: "logo512.png" }
            ]


        },
    },

    rerender_tree() {
        console.log("made by vaza s vadoy");
    },
    subscribe(observer) {
        this.rerender_tree = observer;
    },
    get_state() {
        return this._state
    },
    dispatch(action) {
        if (action.type == "ADD_POST") {
            let new_post = {
                id: 6,
                message: this._state.profile_page.new_post_text,
                likes: -19998
            }
            this._state.profile_page.posts__infor.unshift(new_post)
            this._state.profile_page.new_post_text = ""
            this.rerender_tree(this._state);
        } else if (action.type == "POST_CHANGE") {
            this._state.profile_page.new_post_text = action.text
            this.rerender_tree(this._state)
        }
        else if (action.type == "MESSAGE_CHANGE") {
            this._state.messages_page.new_message_text = action.text
            this.rerender_tree(this._state)
        }
        else if (action.type == "SEND_MESSAGE") {
            let new_message = {
                id: 0,
                message: this._state.messages_page.new_message_text,
                nickname: "toasted grenka"
            }
            this._state.messages_page.messages_texts.push(new_message)
            this._state.messages_page.new_message_text = ""
            this.rerender_tree(this._state);
        }

    }

}
export default store;