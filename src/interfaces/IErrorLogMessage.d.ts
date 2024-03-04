import { ErrorLogMessageOrigin } from '@/enums/ErrorLogMessageOrigin'

export interface IErrorLogMessage {
  origin: ErrorLogMessageOrigin
  message: string
}
