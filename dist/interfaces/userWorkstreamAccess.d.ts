import { WorkstreamAccessLevel, WorkstreamAccessLevelResponse } from './referenceTypes';
export interface UserWorkstreamAccess {
    workstream_prefix: string;
    access_level: WorkstreamAccessLevel;
}
export interface UserWorkstreamAccessResponse {
    workstream_prefix: string;
    access_level: WorkstreamAccessLevelResponse;
}
