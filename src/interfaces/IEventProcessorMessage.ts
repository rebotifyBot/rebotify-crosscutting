import { Platform } from '../enums/Platform'

export interface IEventProcessorMessage {
  platform: Platform
  message: string
}
