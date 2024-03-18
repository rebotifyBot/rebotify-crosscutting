import { EventOrigin } from '../enums/EventOrigin'
import { TwitchChatBotEventType } from '../enums/eventTypes/twitchChatBot.eventType'
import { TwitchEventBotEventType } from '../enums/eventTypes/twitchEventBot.eventType'

type IEvent =
  | {
      origin: EventOrigin.TwitchChatBot
      message: any
      type: TwitchChatBotEventType
    }
  | {
      origin: EventOrigin.TwitchEventBot
      message: any
      type: TwitchEventBotEventType
    }
