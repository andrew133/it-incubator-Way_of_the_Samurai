


export type SidebarType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogPageType = {
    dialogData: DialogDataType[]
    messageData: Array<MessageDataType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType[]
}


export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 5},
            {id: 2, message: "It's my first post.", likesCount: 11},
        ]
    },
    dialogPage: {
        dialogData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sacha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
        ],
        messageData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ]
    },
        sidebar: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sacha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
    ]
}