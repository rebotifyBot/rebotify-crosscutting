interface ITwitchEventDTO {
  metadata: {
    message_id: string
    message_type: string
    message_timestamp: Date
    subsciption_type: string
    subscription_version: string
  }
}
export interface ITwitchEventFollowerDTO extends ITwitchEventDTO {
  subscription: {
    id: string
    status: string
    type: string
    version: string
    condition: any
    transport: any
    created_at: Date
    cost: number
  }
  event: {
    user_id: string
    user_login: string
    user_name: string
    broadcaster_user_id: string
    broadcaster_user_login: string
    broadcaster_user_name: string
    followed_at: Date
  }
}
