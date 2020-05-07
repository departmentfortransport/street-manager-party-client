export enum WorkstreamStatus {
  active = 'active',
  deactivated = 'deactivated'
}

export enum Role {
  Planner = 'Planner',
  HighwayAuthority = 'HighwayAuthority',
  Admin = 'Admin',
  Contractor = 'Contractor',
  API = 'API',
  UI = 'UI',
  DataExport = 'DataExport'
}

export enum OrganisationType {
  PROMOTER = 'PROMOTER',
  HA = 'HA',
  CONTRACTOR = 'CONTRACTOR'
}

export enum UserStatus {
  Confirmed = 'CONFIRMED',
  Invited = 'INVITED',
  Disabled = 'DISABLED'
}

export enum WorkstreamAccessLevel {
  full_write = 'full_write',
  read_only = 'read_only'
}
