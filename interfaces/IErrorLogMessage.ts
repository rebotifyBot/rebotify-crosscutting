import { ErrorLogMessageOrigin } from '../enums/ErrorLogMessageOrigin'

export declare interface IErrorLogMessage {
  origin: ErrorLogMessageOrigin
  message: string
}
