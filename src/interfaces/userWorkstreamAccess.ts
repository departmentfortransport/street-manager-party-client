import { WorkstreamAccessLevel } from './referenceTypes'

export interface UserWorkstreamAccess {
  workstream_prefix: string,
  access_level: WorkstreamAccessLevel
}
