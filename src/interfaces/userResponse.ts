import { RoleResponse } from './referenceTypes'
import { OrganisationSummaryResponse } from './organisationSummaryResponse'
import { UserWorkstreamAccessResponse } from './userWorkstreamAccess'

export interface UserWorkstreamAccessDetails extends UserWorkstreamAccessResponse {
  workstream_name: string
}

export interface UserResponse {
  first_name?: string
  last_name?: string
  organisation_name: string
  roles?: RoleResponse[]
  organisation_reference: string
  contracts?: OrganisationSummaryResponse[]
  workstreams?: UserWorkstreamAccessDetails[]
}
