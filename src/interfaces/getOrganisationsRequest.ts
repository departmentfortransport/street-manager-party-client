import { OrganisationType } from './referenceTypes'

export interface GetOrganisationsRequest {
  query?: string
  type?: OrganisationType[]
}
