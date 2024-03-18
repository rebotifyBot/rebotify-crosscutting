import { TwitchEventType } from '../enums/TwitchEventType'

export interface ITwitchEvent {
  eventType: TwitchEventType
}

export interface ITwitchEventFollower extends ITwitchEvent {
  userId: string
  userLogin: string
  username: string
  broadcasterUserId: string
  broadcasterUserLogin: string
  broadcasterUsername: string
  followedAt: Date
}
