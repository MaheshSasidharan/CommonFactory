Personnel

.factory('Factory_DataService', ['$rootScope', '$http', 'Factory_Constants', 'Factory_CommonRoutines', DataService])

function DataService($rootScope, $http, Constants, CommonFactory) {
    var Helper = {
        app: "/IMPersonnel/",
        HR: {
            controller: "HR/",
            PersonSearch: function (sFirst, sLast, nSearchType) {
                sFirst = !sFirst ? "" : sFirst;
                sLast = !sLast ? "" : sLast;
                return $http.get(Helper.app + Helper.HR.controller + 'PersonSearch?first=' + sFirst + '&last=' + sLast + '&searchType=' + nSearchType)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            PersonData: function (nID) {
                return $http.get(Helper.app + Helper.HR.controller + 'PersonData?id=' + nID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            AddPerson: function (lastName, firstName, middleName, gender, hawkId, ssn) {
                lastName = !lastName ? "" : lastName;
                firstName = !firstName ? "" : firstName;
                middleName = !middleName ? "" : middleName;
                gender = !gender ? "" : gender;
                ssn = !ssn ? "" : ssn;
                hawkId = !hawkId ? "" : hawkId;
                return $http.get(Helper.app + Helper.HR.controller + 'AddPerson?lastName=' + lastName + '&firstName=' + firstName + '&middleName=' + middleName + '&gender=' + gender + '&ssn=' + ssn + '&hawkId=' + hawkId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            ProcessChangeOfStatus: function (oSaveItem) {
                return $http.post(Helper.app + Helper.HR.controller + 'ProcessChangeOfStatus', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            ProcessCorrectEmpRecord: function (oSaveItem) {
                return $http.post(Helper.app + Helper.HR.controller + 'ProcessCorrectEmpRecord', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            ProcessVoidPersonOrEmployment: function (nId, sType) {
                return $http.get(Helper.app + Helper.HR.controller + 'ProcessVoidPersonOrEmployment?nId=' + nId + '&sType=' + sType)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
        },
        Recruitment: {
            controller: "Recruitment/",
            GetUserRole: function () {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetUserRole')
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            PersonSearch: function (sFirst, sLast, nSearchType) {

                sFirst = !sFirst ? "" : sFirst;
                sLast = !sLast ? "" : sLast;
                return $http.get(Helper.app + Helper.Recruitment.controller + 'PersonSearch?first=' + sFirst + '&last=' + sLast + '&searchType=' + nSearchType)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SearchIfExists: function (sFirst, sLast, sHawkId) {
                sFirst = !sFirst ? "" : sFirst;
                sLast = !sLast ? "" : sLast;
                sHawkId = !sHawkId ? "" : sHawkId;
                return $http.get(Helper.app + Helper.Recruitment.controller + 'SearchIfExists?first=' + sFirst + '&last=' + sLast + '&hawkId=' + sHawkId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetPersonData: function (nID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetPersonData?id=' + nID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetRecruitmentData: function (nID, nRID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetRecruitmentData?id=' + nID + '&nRId=' + nRID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetProgressData: function (nID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetProgressData?id=' + nID)
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            GetCredentialingData: function (nID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetCredentialingData?id=' + nID)
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            GetVisitData: function (nID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetVisitData?id=' + nID)
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            GetPersonDropDowns: function () {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetPersonDropDowns')
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetRecruitmentDropDowns: function () {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'GetRecruitmentDropDowns')
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            UpdateLetterOfSupport: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateLetterOfSupport', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            UpdateAdminComment: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateAdminComment', { oSaveItem: oSaveItem })
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            UpdateVisitComment: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateVisitComment', { oSaveItem: oSaveItem })
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            UpdateRecruitmentCommittee: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateRecruitmentCommittee', { oSaveItem: oSaveItem })
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            UpdateDCComment: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateDCComment', { oSaveItem: oSaveItem })
                    .then(
                    Helper.Miscellaneous.ReturnDataDotData,
                    Helper.Miscellaneous.FailedInService)
            },
            UpdatePerson: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdatePerson', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            UpdateRecruitmentEffort: function (oSaveItem) {
                return $http.post(Helper.app + Helper.Recruitment.controller + 'UpdateRecruitmentEffort', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            FinalizeHire: function (nID) {
                return $http.get(Helper.app + Helper.Recruitment.controller + 'FinalizeHire?id=' + nID)
                        .then(
                        Helper.Miscellaneous.ReturnDataDotData,
                        Helper.Miscellaneous.FailedInService)
            }
        },
        RecruitBallot: {
            controller: "RecruitBallot/",
            GetBallotData: function (sURL) {
                return $http.get(Helper.app + Helper.RecruitBallot.controller + 'GetBallotData?sURL=' + sURL)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetBallotDetails: function (sBId) {
                return $http.get(Helper.app + Helper.RecruitBallot.controller + 'GetBallotDetails?sBId=' + sBId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveBallotData: function (oSaveItem) {
                return $http.post(Helper.app + Helper.RecruitBallot.controller + 'SaveBallotData', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SearchRecruitsBalloted: function (sLast, sFirst, sProvId) {
                sLast = !sLast ? "" : sLast;
                sFirst = !sFirst ? "" : sFirst;
                sProvId = !sProvId ? "" : sProvId;
                return $http.get(Helper.app + Helper.RecruitBallot.controller + 'SearchRecruitsBalloted?sLast=' + sLast + '&sFirst=' + sFirst)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            DeleteRecruitsBalloted: function (nEmploymentId) {
                return $http.delete(Helper.app + Helper.RecruitBallot.controller + 'DeleteRecruitsBalloted?nEmploymentId=' + nEmploymentId)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveRecruitsBalloted: function (oSaveItem) {
                return $http.post(Helper.app + Helper.RecruitBallot.controller + 'SaveRecruitsBalloted', { oSaveItem: oSaveItem })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SendEmailRecruitBallot: function (oSendEmail) {
                return $http.post(Helper.app + Helper.RecruitBallot.controller + 'SendEmailRecruitBallot', { oSendEmail: oSendEmail })
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            }
        },
        Miscellaneous: {
            oGlobal: null,
            ConstructorComments: null,
            BroadCastOnPerson: function (data) {
                this.oGlobal = data;
                $rootScope.$broadcast('person:updated', data);
            },
            ReturnDataDotData: function (data) {
                return data.data;
            },
            FailedInService: function () {
                CommonFactory.Notification.ShowNotification(true, Constants.Miscellaneous.SomethingWentWrong, Constants.Miscellaneous.Notification.Type.Danger);
            }
        }
    }

    var oService = {
        oGlobal: Helper.Miscellaneous.oGlobal,

        // Common
        BroadCastOnPerson: Helper.Miscellaneous.BroadCastOnPerson,
        ConstructorComments: Helper.Miscellaneous.ConstructorComments,

        // HR
        PersonSearch: Helper.HR.PersonSearch,
        PersonData: Helper.HR.PersonData,
        AddPerson: Helper.HR.AddPerson,
        ProcessChangeOfStatus: Helper.HR.ProcessChangeOfStatus,
        ProcessCorrectEmpRecord: Helper.HR.ProcessCorrectEmpRecord,
        ProcessVoidPersonOrEmployment: Helper.HR.ProcessVoidPersonOrEmployment,

        // Recruitment
        GetUserRole: Helper.Recruitment.GetUserRole,
        PersonSearchRecruitment: Helper.Recruitment.PersonSearch,
        SearchIfExists: Helper.Recruitment.SearchIfExists,
        GetPersonData: Helper.Recruitment.GetPersonData,
        GetRecruitmentData: Helper.Recruitment.GetRecruitmentData,

        GetProgressData: Helper.Recruitment.GetProgressData,
        GetCredentialingData: Helper.Recruitment.GetCredentialingData,
        GetVisitData: Helper.Recruitment.GetVisitData,

        GetPersonDropDowns: Helper.Recruitment.GetPersonDropDowns,
        GetRecruitmentDropDowns: Helper.Recruitment.GetRecruitmentDropDowns,

        UpdateLetterOfSupport: Helper.Recruitment.UpdateLetterOfSupport,
        UpdateAdminComment: Helper.Recruitment.UpdateAdminComment,
        UpdateVisitComment: Helper.Recruitment.UpdateVisitComment,
        UpdateRecruitmentCommittee: Helper.Recruitment.UpdateRecruitmentCommittee,
        UpdateDCComment: Helper.Recruitment.UpdateDCComment,

        UpdatePerson: Helper.Recruitment.UpdatePerson,
        UpdateRecruitmentEffort: Helper.Recruitment.UpdateRecruitmentEffort,
        FinalizeHire: Helper.Recruitment.FinalizeHire,

        // Recruit Ballot
        GetBallotData: Helper.RecruitBallot.GetBallotData,
        GetBallotDetails: Helper.RecruitBallot.GetBallotDetails,
        SaveBallotData: Helper.RecruitBallot.SaveBallotData,
        SearchRecruitsBalloted: Helper.RecruitBallot.SearchRecruitsBalloted,
        SaveRecruitsBalloted: Helper.RecruitBallot.SaveRecruitsBalloted,
        DeleteRecruitsBalloted: Helper.RecruitBallot.DeleteRecruitsBalloted,
        SendEmailRecruitBallot: Helper.RecruitBallot.SendEmailRecruitBallot
    }
    return oService;
}