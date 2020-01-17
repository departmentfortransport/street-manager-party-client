import { UserRole } from './referenceTypes'
import { OrganisationSummaryResponse } from './organisationSummaryResponse'

export interface UserResponse {
  first_name?: string
  last_name?: string
  organisation_name: string
  roles?: UserRole[]
  organisation_reference: string
  contracts?: OrganisationSummaryResponse[]
}
