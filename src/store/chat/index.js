// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch User Profile
export const fetchUserProfile = createAsyncThunk('appChat/fetchUserProfile', async () => {
  const response = await axios.get('/apps/chat/users/profile-user')

  return response.data
})

// ** Fetch Chats & Contacts
export const fetchChatsContacts = createAsyncThunk('appChat/fetchChatsContacts', async () => {
  const response = await axios.get('/apps/chat/chats-and-contacts')

  return response.data
})

// ** Select Chat
export const selectChat = createAsyncThunk('appChat/selectChat', async (id, { dispatch }) => {
  const response = await axios.get('/apps/chat/get-chat', {
    params: {
      id
    }
  })
  await dispatch(fetchChatsContacts())

  return response.data
})

// ** Send Msg
export const sendMsg = createAsyncThunk('appChat/sendMsg', async (obj, { dispatch }) => {
  const response = await axios.post('/apps/chat/send-msg', {
    data: {
      obj
    }
  })
  if (obj.contact) {
    await dispatch(selectChat(obj.contact.id))
  }
  await dispatch(fetchChatsContacts())

  return response.data
})

export const appChatSlice = createSlice({
  name: 'appChat',
  initialState: {
    chats: null,
    contacts: null,
    userProfile: null,
    selectedChat: {
      "chat": {
        "id": 3,
        "userId": 3,
        "unseenMsgs": 0,
        "chat": [
          {
            "senderId": 1,
            "time": "1-Mar-2023, 12:00 PM",
            "message": "Patient is allergic to the medicine i prescribed at first and there were some symptoms of other diseases as well which needs to be tested again. Therefore, I prescribe to take Executive Profile Check up asap.",
            "name": "Dr. Najam",
            "backgroundColor": "#E3EFFD",
            "borderColor": "#1376F080"
          },
          {
            "senderId": 11,
            "time": "1-Mar-2023, 12:00 PM",
            "message": "This appointment will be scheduled again for 15 march 2023 since this medicine requires a follow up checkup after 15 days.",
            "name": "Dr. Ahmad",
            "backgroundColor": "#B992FE2B",
            "borderColor": "#9155FD"
          }
        ]
      },
      "contact": {
        "id": 3,
        "fullName": "Joaquina Weisenborn",
        "role": "Town planner",
        "about": "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
        "avatar": "/images/avatars/8.png",
        "status": "busy",
        "chat": {
          "id": 3,
          "unseenMsgs": 0,
          "lastMessage": {
            "senderId": 11,
            "time": "1-Mar-2023, 12:00 PM",
            "message": "This appointment will be scheduled again for 15 march 2023 since this medicine requires a follow up checkup after 15 days.",
            "name": "Dr. Ahmad",
            "backgroundColor": "#B992FE2B",
            "borderColor": "#9155FD"
          }
        }
      }
    }
  },
  reducers: {
    removeSelectedChat: state => {
      state.selectedChat = null
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload
    })
    builder.addCase(fetchChatsContacts.fulfilled, (state, action) => {
      state.contacts = action.payload.contacts
      state.chats = action.payload.chatsContacts
    })
    builder.addCase(selectChat.fulfilled, (state, action) => {
      state.selectedChat = action.payload
    })
  }
})

export const { removeSelectedChat } = appChatSlice.actions

export default appChatSlice.reducer
