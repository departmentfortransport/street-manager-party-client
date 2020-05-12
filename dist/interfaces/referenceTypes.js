"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkstreamStatus;
(function (WorkstreamStatus) {
    WorkstreamStatus["active"] = "active";
    WorkstreamStatus["deactivated"] = "deactivated";
})(WorkstreamStatus = exports.WorkstreamStatus || (exports.WorkstreamStatus = {}));
var Role;
(function (Role) {
    Role["Planner"] = "Planner";
    Role["HighwayAuthority"] = "HighwayAuthority";
    Role["Admin"] = "Admin";
    Role["Contractor"] = "Contractor";
    Role["API"] = "API";
    Role["UI"] = "UI";
    Role["DataExport"] = "DataExport";
})(Role = exports.Role || (exports.Role = {}));
var OrganisationType;
(function (OrganisationType) {
    OrganisationType["PROMOTER"] = "PROMOTER";
    OrganisationType["HA"] = "HA";
    OrganisationType["CONTRACTOR"] = "CONTRACTOR";
})(OrganisationType = exports.OrganisationType || (exports.OrganisationType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Confirmed"] = "CONFIRMED";
    UserStatus["Invited"] = "INVITED";
    UserStatus["Disabled"] = "DISABLED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var WorkstreamAccessLevel;
(function (WorkstreamAccessLevel) {
    WorkstreamAccessLevel["full_write"] = "full_write";
    WorkstreamAccessLevel["read_only"] = "read_only";
})(WorkstreamAccessLevel = exports.WorkstreamAccessLevel || (exports.WorkstreamAccessLevel = {}));
