import { DelegatedUserIdentification } from './delegatedUserIdentification'

export interface WorkstreamCreateRequest extends DelegatedUserIdentification {
  /** Must consist of 3 positive whole numbers */
  prefix: string
  /** Max length 60 characters */
  name: string
  /** Max length 500 characters */
  description?: string
  /** Max length 50 characters */
  contact_name?: string
  /** Max length 20 characters */
  contact_number?: string
  /** Max length 320 characters */
  contact_email?: string
}
