import { Platform } from '../enums/Platform'
import { EventJobRequestType } from '../enums/EventJobRequestType'

export interface IEventJobData {
  platform: Platform
  request: any
  requestType: EventJobRequestType
}
