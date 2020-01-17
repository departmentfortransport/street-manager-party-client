"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkstreamStatus;
(function (WorkstreamStatus) {
    WorkstreamStatus["active"] = "active";
    WorkstreamStatus["deactivated"] = "deactivated";
})(WorkstreamStatus = exports.WorkstreamStatus || (exports.WorkstreamStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["Planner"] = "Planner";
    UserRole["HighwayAuthority"] = "HighwayAuthority";
    UserRole["Admin"] = "Admin";
    UserRole["Contractor"] = "Contractor";
    UserRole["API"] = "API";
    UserRole["UI"] = "UI";
    UserRole["DataExport"] = "DataExport";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var OrganisationType;
(function (OrganisationType) {
    OrganisationType["Promoter"] = "PROMOTER";
    OrganisationType["HA"] = "HA";
    OrganisationType["Contractor"] = "CONTRACTOR";
})(OrganisationType = exports.OrganisationType || (exports.OrganisationType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Confirmed"] = "CONFIRMED";
    UserStatus["Invited"] = "INVITED";
    UserStatus["Disabled"] = "DISABLED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
