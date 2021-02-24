import { OrganisationStatusResponse, RoleResponse } from './referenceTypes'
import { OrganisationSummaryResponse } from './organisationSummaryResponse'
import { UserWorkstreamAccessResponse } from './userWorkstreamAccess'

export interface UserWorkstreamAccessDetails extends UserWorkstreamAccessResponse {
  workstream_name: string
  access_level_string: string
}

export interface UserResponse {
  first_name?: string
  last_name?: string
  organisation_name: string
  roles?: RoleResponse[]
  roles_string?: string[]
  organisation_reference: string
  contracts?: OrganisationSummaryResponse[]
  workstreams?: UserWorkstreamAccessDetails[]
  organisation_status?: OrganisationStatusResponse
  organisation_status_string?: string
}
