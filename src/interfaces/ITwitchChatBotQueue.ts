import { TwitchChatBotMessageType } from '../enums/TwitchChatBotMessageType'

export interface ITwitchChatBotQueue {
  type: TwitchChatBotMessageType
  message: string
  channelId?: number
}
