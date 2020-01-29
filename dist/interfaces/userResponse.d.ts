import { Role } from './referenceTypes';
import { OrganisationSummaryResponse } from './organisationSummaryResponse';
import { UserWorkstreamAccess } from './userWorkstreamAccess';
export interface UserWorkstreamAccessDetails extends UserWorkstreamAccess {
    workstream_name: string;
}
export interface UserResponse {
    first_name?: string;
    last_name?: string;
    organisation_name: string;
    roles?: Role[];
    organisation_reference: string;
    contracts?: OrganisationSummaryResponse[];
    workstreams?: UserWorkstreamAccessDetails[];
}
