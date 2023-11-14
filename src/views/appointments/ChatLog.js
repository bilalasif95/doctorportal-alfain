// ** React Imports
import { useRef, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'


const ChatLog = props => {
    // ** Props
    const { data, hidden } = props

    // ** Ref
    const chatArea = useRef(null)

    // ** Scroll to chat bottom
    const scrollToBottom = () => {
        if (chatArea.current) {
            if (hidden) {
                // @ts-ignore
                chatArea.current.scrollTop = Number.MAX_SAFE_INTEGER
            } else {
                // @ts-ignore
                chatArea.current._container.scrollTop = Number.MAX_SAFE_INTEGER
            }
        }
    }

    // ** Formats chat data based on sender
    const formattedChatData = () => {
        let chatLog = []
        if (data.chat) {
            chatLog = data.chat.chat
        }
        const formattedChatLog = []
        let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : 11

        let msgGroup = {
            senderId: chatMessageSenderId,
            messages: []
        }
        chatLog.forEach((msg, index) => {
            if (chatMessageSenderId === msg.senderId) {
                msgGroup.messages.push({
                    time: msg.time,
                    msg: msg.message,
                    feedback: msg.feedback,
                    name: msg.name,
                    borderColor: msg.borderColor,
                    backgroundColor: msg.backgroundColor,
                    senderId: msg.senderId
                })
            } else {
                chatMessageSenderId = msg.senderId
                formattedChatLog.push(msgGroup)
                msgGroup = {
                    senderId: msg.senderId,
                    messages: [
                        {
                            time: msg.time,
                            msg: msg.message,
                            feedback: msg.feedback,
                            name: msg.name,
                            borderColor: msg.borderColor,
                            backgroundColor: msg.backgroundColor,
                            senderId: msg.senderId
                        }
                    ]
                }
            }
            if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
        })

        return formattedChatLog
    }

    useEffect(() => {
        if (data && data.chat && data.chat.chat.length) {
            scrollToBottom()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    // ** Renders user chat
    const renderChats = () => {
        return formattedChatData().map((item, index) => {
            return (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        mb: index !== formattedChatData().length - 1 ? 4 : undefined
                    }}
                >
                    <Box className='chat-body' sx={{ width: '100%' }}>
                        {item.messages.map((chat, index, { length }) => {
                            return (
                                <Box key={index} sx={{ '&:not(:last-of-type)': { mb: 3.5 } }}>
                                    <div>
                                        <Typography
                                            sx={{
                                                borderRadius: 1,
                                                fontSize: '20px',
                                                p: theme => theme.spacing(3, 4),
                                                color: theme => (theme.palette.mode === 'dark') && (chat.senderId === 11) ? '#FFF' : '#3A3541C4',
                                                backgroundColor: chat.backgroundColor,
                                                border: `1px solid ${chat.borderColor}`
                                            }}
                                        >
                                            {chat.msg}
                                        </Typography>
                                    </div>
                                    {index + 1 === length ? (
                                        <Box
                                            sx={{
                                                mt: 1,
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Typography variant='caption' sx={{ fontSize: '18.13px' }}>
                                                {chat.name}: {chat.time}
                                            </Typography>
                                        </Box>
                                    ) : null}
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            )
        })
    }

    const ScrollWrapper = ({ children }) => {
        if (hidden) {
            return (
                <Box ref={chatArea} sx={{ p: 5, height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
                    {children}
                </Box>
            )
        } else {
            return (
                <PerfectScrollbarComponent ref={chatArea} options={{ wheelPropagation: false }}>
                    {children}
                </PerfectScrollbarComponent>
            )
        }
    }

    return (
        <Box sx={{ minHeight: '40rem', height: 'calc(100% - 8.4375rem)' }}>
            <ScrollWrapper>{renderChats()}</ScrollWrapper>
        </Box>
    )
}

export default ChatLog
