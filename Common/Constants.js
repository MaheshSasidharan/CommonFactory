Personnel

.factory('Factory_Constants', [Constants])

function Constants() {

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var oConstants = {

        Miscellaneous: {
            LoadSuccessful: "{0} : Loaded successfully",
            SomethingWentWrong: "Sorry. Something went wrong.",
            InvalidDate: "Invalid Date",
            DeletedItem: "Successfully deleted item.",
            DatePicker: function () {
                this.format = 'MM-dd-yyyy';
                this.opened = false;
                this.open = function ($event) {
                    vm.date.opened = true;
                };
                this.dateOptions = {
                    formatYear: 'yyyy',
                    startingDay: 1
                }
            },
            Notification: {
                Saved: "Item Saved successfully",
                Edited: "Item Updated successfully",
                Deleted: "Item Deleted successfully",
                Removed: "Item has been removed",
                NoneFound: "No records found",
                RecordExists: "Record already exists",
                SomethingWentWrong: "Sorry. Something went wrong.",
                Type: {
                    Info: 'Info',
                    Danger: 'Danger',
                    Warning: 'Warning'
                }
            },
            UserRoles: [
                {
                    val: 1,
                    message: "You have Admin privileges."
                },
                {
                    val: 2,
                    message: "You have Divison Coordinator priveledges. Some fields may be uneditable."
                },
                {
                    val: 3,
                    message: "You have Read permission. Fields will be uneditable"
                }
            ],
            Popup: {
                Delete: 'Are you sure you want to delete?',
                Found: '{0} record(s) found',
                UnsavedChanges: 'There are unsaved changes. Click on red button to ignore',
            },
            month: month
        },
        Recruitment: {
            Tabs: [
                  { link: '#/person', label: 'Person' },
                  { link: '#/recruitment', label: 'Recruitment' },
                  { link: '#/progress', label: 'Progress' },
                  { link: '#/credentialing', label: 'Credentialing' },
                  { link: '#/visits', label: 'Visits/Comments [D.C]' },
            ],
            Person: {
                Gender: [
                    { label: 'Male', val: 'M' },
                    { label: 'Female', val: 'F' },
                ],
                MaritalStatus: [
                    { label: 'Single', val: 'S' },
                    { label: 'Married', val: 'M' },
                ],
                FamilyStatus: [
                    { label: 'Employee', val: '1' },
                    { label: 'Employee & Spouse', val: '2' },
                    { label: 'Employee & Child', val: '3' },
                    { label: 'Family', val: '4' },
                ],
                VeteranStatus: [
                    { label: 'Vietnam Veteran', val: '1' },
                    { label: 'Disabled Veteran (30% or more)', val: '2' },
                    { label: 'Other Veteran', val: '3' },
                    { label: 'No Military Service', val: '4' },
                    { label: 'Not Indicated', val: '5' },
                ],
                EthnicStatus: [
                    { label: 'Not Indicated', val: '7' }
                ]
            },
            Recruitment: {
                TypeOfRecruit: [
                    { label: 'Faculty', val: 'Faculty' },
                    { label: 'Associate', val: 'Associate' },
                    { label: 'DD', val: 'DD' }
                ],
                Status: [
                    { label: 'Active', val: 'A' },
                    { label: 'Appointed', val: 'P' },
                    { label: 'Inactive', val: 'I' },
                    { label: 'On Hold', val: 'H' }
                ]
            },
            Progress: {
                WaiveTenureTime: [
                    { label: 'Yes', val: 'Y' },
                    { label: 'No', val: 'N' },
                ]
            },
            Credentials: {
                IBMEStatus: [
                    { label: 'P.C.', val: '0' },
                    { label: '1st Review', val: '1' },
                    { label: '2nd Review', val: '2' },
                    { label: 'N/A', val: '3' },
                    { label: 'Granted', val: '4' },
                ]
            },
            Visits: {
                DiscussedBenefits: [
                    { label: 'Yes', val: 'Y' },
                    { label: 'No', val: 'N' },
                    { label: 'N/A', val: 'A' },
                ],
                Popup: {
                    SearchNewPerson: "Enter First or Last name",
                    AddPerson: "Enter person details"
                }
            },
            Popup: {
                SearchNewPerson: "Enter Last or First name or Hawk ID ",
            },
            Miscellaenous: {
                Finalized: "The record has been finalized"
            }
        },
        RecruitBallot: {
            Tabs: [
                    { label: 'Recruits' },
                    { label: 'Log' }
            ],
            Notification: {
                InvalidURL: "Enter valid URL to search",
                InvalidParagrapgh: "Enter vaild paragraph",
                InvalidPerson: "Please select a person",
                EmailSuccessful: "Successfully sent email",
                EmailFailed: "Failed to send email"
            },
            OpeningParagraph: "Participation in the selection and approval of new faculty is one of our critical duties as responsible members of the Department of Internal Medicine. Please review the information on the following candidates for positions as Associates.",
            Popup: {
                EditBallotParagraph: "Enter Ballot Paragraph"
            }
        },


        Hr: {
            PersonDataService: {
                HrisSecondaryApptsUrl: '/IMPersonnel/Hr/HrisLoadedSecondaryAppts/',
                SsnUrl: '/IMPersonnel/Hr/GetSsn/',
                GetLastModifiedUrl: '/IMPersonnel/Person/GetLastModified/'
            },
            KeyCodes: {
                Enter: 13
            },
            Events: {
                Navigation: {
                    NewPersonAdded: 'hr.navigation.newPersonAdded'
                },
                FindSupervisor: {
                    Begin: 'hr.findSupervisor.begin',
                    Chosen: 'hr.findSupervisor.chosen'
                },
                OfficeAddr: {
                    Begin: 'hr.officeAddr.begin',
                    Ok: 'hr.officeAddr.ok'
                },
                AddPerson: {
                    Begin: 'hr.addPerson.begin'
                },
                HirePerson: {
                    Begin: 'hr.hireNewPerson.begin',
                    Form: 'hr.hireNewPerson.hirePersonForm'
                },
                Assistants: {
                    Find: 'hr.assistants.find',
                    Ok: 'hr.assistants.ok'
                },
                Terminate: {
                    Begin: 'hr.terminate.begin',
                    Attempt: 'hr.terminate.attemptTerminate',
                    Processed: 'hr.terminate.processed'
                },
                ChangeOfStatus: {
                    Begin: 'hr.changeOfStatus.begin',
                    Attempt: 'hr.changeOfStatus.attemptChangeOfStatus',
                    Processed: 'hr.changeOfStatus.processed'
                },
                CorrectEmpRecord: {
                    Begin: 'hr.correctEmpRecord.begin',
                    Attempt: 'hr.correctEmpRecord.attemptCorrectEmpRecord',
                    Processed: 'hr.correctEmpRecord.processed'
                },
                VoidPersonOrEmployment: {
                    Begin: 'hr.voidPersonOrEmployment.begin',
                    Attempt: 'hr.voidPersonOrEmployment.attemptVoid',
                    Processed: 'hr.voidPersonOrEmployment.processed'
                },
                MfkTable: {
                    Open: 'hr.mfk.open',
                    SaveSuccess: 'hr.mfk.savesuccess'
                },
                FacultyAppt: {
                    EditBegin: 'hr.facultyappt.edit.begin',
                    EditDone: 'hr.facultyappt.edit.done',
                    NewBegin: 'hr.facultyappt.new.begin',
                    NewDone: 'hr.facultyappt.new.done'
                },
                ImportDepts: {
                    Begin: 'hr.importDepts.begin',
                    Done: 'hr.importDepts.done'
                },

                PersonCLP: {
                    Begin: 'hr.personclp.begin'
                },

            },
            Person: {
                Gender: [
                    { label: 'Male', val: 'M' },
                    { label: 'Female', val: 'F' },
                ]
            },
            Position: {
                Hourly: [
                    { label: 'Yes', val: 'Y' },
                    { label: 'No', val: 'N' }
                ],
                RegTemp: [
                    { label: 'Regular', val: 'R' },
                    { label: 'Temporary', val: 'T' }
                ],
                PrintLeaveRecord: [
                    { label: 'Yes', val: 'Y' },
                    { label: 'No', val: 'N' }
                ],
                PrintMedicare: [
                    { label: 'Yes', val: 'Y' },
                    { label: 'No', val: 'N' }
                ]
            },
            Form: {
                SearchPersonModal: '#search-person-modal',
                PositionTabNav: '#position-tab-nav',
                PersonTabNav: '#person-tab-nav',
                LastSearchFieldId: '#last-name-search',
                SaveFormModal: '#save-confirm-modal',
                FailLockModal: '#fail-lock-modal',
                NoPermissionModel: '#no-permission-modal',
                NotYetImplModel: '#not-impl-modal',
                Tabs: [
                    //{ label: "Training" },
                    //{ label: "Certification" },
                    //{ label: "Prof Appts" },
                    //{ label: "Annual Review" },
                    //{ label: "Licences" },
                    //{ label: "Education" },
                    { label: "CLP" },
                    { label: "NPI" }
                ]
            },
            HirePerson: {
                HireThisPersonModal: '#hire-this-person-modal',
                HireFormModal: '#hire-form-modal'
            },
            AddPerson: {
                AddPersonModal: '#add-person-modal',
                AddPersonSearchModal: '#add-person-search-modal'
            },
            FindSupervisor: {
                ModalId: '#find-supervisor-modal'
            },
            OfficeAddr: {
                ModalId: '#office-addr-modal'
            },
            Assistants: {
                ModalId: '#find-assistant-modal'
            },
            Terminate: {
                TerminateModalId: '#terminate-modal',
                TerminateConfirmModalId: '#terminate-confirm-modal',
                TerminateLockFailModalId: '#terminate-fail-lock-modal',
                TerminateUrl: '/IMPersonnel/Hr/Terminate'
            },
            ChangeOfStatus: {
                ChangeOfStatusModalId: '#change-of-status-modal',
                ChangeOfStatusConfirmModalId: '#change-of-status-confirm-modal',
                ChangeOfStatusUrl: '/IMPersonnel/Hr/ChangeOfStatus'
            },
            CorrectEmpRecord: {
                CorrectEmpRecordModalId: '#correct-emp-record-modal',
                CorrectEmpRecordConfirmModalId: '#correct-emp-record-confirm-modal',
                CorrectEmpRecordUrl: '/IMPersonnel/Hr/CorrectEmpRecord'
            },
            VoidPersonOrEmployment: {
                VoidPersonOrEmploymentConfirmModalId: '#void-person-or-employment-confirm-modal',
                VoidPersonOrEmploymentUrl: '/IMPersonnel/Hr/VoidPersonOrEmployment'
            },
            MfkTable: {
                ModalId: '#mfk-table-modal',
                ExitUnsavedModalId: '#exit-unsaved-confirm-modal',
                RemarksModalId: '#remarks-modal',
                CopyDataModalId: '#copy-data-modal',
                DeleteDataModalId: '#delete-data-modal',
                StatusEditModalId: '#mfk-status-edit-modal',
                SaveErrorModalId: '#mfk-save-error-modal',
                InitialMfkTableDataUrl: '/IMPersonnel/Mfk/InitialMfkTableData/',
                GetMfkChangeUrl: '/IMPersonnel/Mfk/GetMfkChange/',
                DeleteMfkChangeUrl: '/IMPersonnel/Mfk/DeleteMfkChange/',
                SaveMfkChangeUrl: '/IMPersonnel/Mfk/SaveMfkChange/',
                UpdateMfkChangeUrl: '/IMPersonnel/Mfk/UpdateMfkChange/',
                ValidateMfkUrl: '/IMPersonnel/Mfk/ValidateMfk/'
            },
            FacultyAppt: {
                ModalId: '#faculty-appt-modal'
            },
            ImportDepts: {
                ModalId: '#import-depts-modal'
            },
            PersonCLP: {
                PersonCLPModalId: '#person-clp-modal',
                //TerminateConfirmModalId: '#terminate-confirm-modal',
                //TerminateLockFailModalId: '#terminate-fail-lock-modal',
                PersonCLPUrl: '/IMPersonnel/Hr/GetPersonCLPInfo',
                PersonCLPUsageUrl: '/IMPersonnel/Hr/GetClpUsage',
                PersonCLPSaveUrl: '/IMPersonnel/Hr/SaveClpUsage'
            },
        }
    }



    return oConstants;
}