// Public surface. Everything reachable from here is API you have to keep;
// anything else under `src/` is internal and free to change.
//
// The `.js` extension is required: under `nodenext` resolution the specifier
// must match the emitted file, not the `.ts` source.

export { ApiClient } from "./src/client.js";
export type {
	ApiClientOptions,
	RequestOptions,
	Transport,
} from "./src/client.js";

export type {
	HttpMethod,
	Operation,
	QueryParams,
	QueryValue,
	RequestBody,
	RequestHeaders,
} from "./src/operation.js";

export { readJson } from "./src/decode.js";

// Query serialisations `buildUrl` does not produce on its own, for the
// endpoints whose documents ask for them.
export { deepObject, joined } from "./src/query.js";

export {
	ApiError,
	DecodeError,
	HttpError,
	TransportError,
} from "./src/errors.js";

// Example resource. Delete these two exports along with src/resources/example.ts.
export {
	createExample,
	getExample,
	listExamples,
} from "./src/resources/example.js";
export type {
	Example,
	ExampleListResponse,
	ListExamplesQuery,
	NewExample,
} from "./src/resources/example.js";

// Everything between the markers below belongs to the generator. Edits inside
// them are overwritten on the next run; everything above is yours.
// dung-beetle:start generated exports
export {
	getArchiveFileDownloadAudit,
	listArchiveFileStatistics,
	listArchiveFiles,
	updateArchiveFile,
} from "./src/resources/archive-files.js";

export type {
	GetArchiveFileDownloadAuditQuery,
	GetArchiveFileDownloadAuditResponse,
	ListArchiveFileStatisticsQuery,
	ListArchiveFileStatisticsResponse,
	ListArchiveFilesQuery,
	ListArchiveFilesResponse,
	UpdateArchiveFileBody,
} from "./src/resources/archive-files.js";

export {
	createDevice,
	deleteDevice,
	deleteDeviceZpaVendorMacAddress,
	getDevice,
	listDeviceGroups,
	listDeviceZpaSettings,
	listDeviceZpaZdmGroupVersions,
	listDevices,
	updateDevice,
	updateDeviceAssignGroup,
	updateDeviceAssignment,
	updateDeviceZpaAssignment,
	updateDeviceZpaUpgrade,
} from "./src/resources/devices.js";

export type {
	CreateDeviceBody,
	GetDeviceResponse,
	ListDeviceGroupsQuery,
	ListDeviceGroupsResponse,
	ListDeviceZpaSettingsQuery,
	ListDeviceZpaSettingsResponse,
	ListDeviceZpaZdmGroupVersionsResponse,
	ListDevicesQuery,
	ListDevicesResponse,
	UpdateDeviceAssignGroupQuery,
	UpdateDeviceAssignmentBody,
	UpdateDeviceBody,
	UpdateDeviceZpaAssignmentBody,
	UpdateDeviceZpaUpgradeBody,
} from "./src/resources/devices.js";

export {
	createH323Device,
	deleteH323Device,
	listH323Devices,
	updateH323Device,
} from "./src/resources/h323.js";

export type {
	CreateH323DeviceBody,
	CreateH323DeviceResponse,
	ListH323DevicesQuery,
	ListH323DevicesResponse,
	UpdateH323DeviceBody,
} from "./src/resources/h323.js";

export {
	deleteLiveMeetingChatMessage,
	updateLiveMeetingChatMessage,
	updateLiveMeetingEvents,
	updateLiveMeetingRtmsAppStatus,
} from "./src/resources/live-meetings.js";

export type {
	DeleteLiveMeetingChatMessageQuery,
	UpdateLiveMeetingChatMessageBody,
	UpdateLiveMeetingEventsBody,
	UpdateLiveMeetingRtmsAppStatusBody,
} from "./src/resources/live-meetings.js";

export {
	deleteLiveWebinarChatMessage,
} from "./src/resources/live-webinars.js";

export type {
	DeleteLiveWebinarChatMessageQuery,
} from "./src/resources/live-webinars.js";

export {
	createMeetingBatchPoll,
	createMeetingBatchRegistrant,
	createMeetingInviteLink,
	createMeetingOpenApp,
	createMeetingPoll,
	createMeetingRecordingRegistrant,
	createMeetingRegistrant,
	deleteMeeting,
	deleteMeetingMeetingSummary,
	deleteMeetingOpenApps,
	deleteMeetingPoll,
	deleteMeetingRecording,
	deleteMeetingRecordings,
	deleteMeetingRegistrant,
	deleteMeetingSurvey,
	deleteMeetingTranscript,
	getMeeting,
	getMeetingInvitation,
	getMeetingJointokenLiveStreaming,
	getMeetingJointokenLocalArchiving,
	getMeetingJointokenLocalRecording,
	getMeetingLivestream,
	getMeetingMeetingSummary,
	getMeetingPoll,
	getMeetingRecordingAnalyticsSummary,
	getMeetingRegistrant,
	getMeetingSurvey,
	getMeetingToken,
	getMeetingTranscript,
	listMeetingMeetingSummaries,
	listMeetingPolls,
	listMeetingRecordingAnalyticsDetails,
	listMeetingRecordingRegistrantQuestions,
	listMeetingRecordingRegistrants,
	listMeetingRecordingSettings,
	listMeetingRecordings,
	listMeetingRegistrantQuestions,
	listMeetingRegistrants,
	recoverMeetingRecordings,
	replaceMeetingPoll,
	replaceMeetingRecordingRegistrantStatus,
	replaceMeetingRecordingStatus,
	replaceMeetingRegistrantStatus,
	replaceMeetingStatus,
	sipDialingMeeting,
	updateMeeting,
	updateMeetingLivestream,
	updateMeetingLivestreamStatus,
	updateMeetingRecordingRegistrantQuestions,
	updateMeetingRecordingSettings,
	updateMeetingRegistrantQuestions,
	updateMeetingSurvey,
} from "./src/resources/meetings.js";

export type {
	CreateMeetingBatchPollBody,
	CreateMeetingBatchPollResponse,
	CreateMeetingBatchRegistrantBody,
	CreateMeetingBatchRegistrantResponse,
	CreateMeetingInviteLinkBody,
	CreateMeetingInviteLinkResponse,
	CreateMeetingOpenAppBody,
	CreateMeetingOpenAppResponse,
	CreateMeetingPollBody,
	CreateMeetingPollResponse,
	CreateMeetingRecordingRegistrantBody,
	CreateMeetingRecordingRegistrantResponse,
	CreateMeetingRegistrantBody,
	CreateMeetingRegistrantQuery,
	CreateMeetingRegistrantResponse,
	DeleteMeetingQuery,
	DeleteMeetingRecordingQuery,
	DeleteMeetingRecordingsQuery,
	DeleteMeetingRegistrantQuery,
	GetMeetingInvitationResponse,
	GetMeetingJointokenLiveStreamingResponse,
	GetMeetingJointokenLocalArchivingResponse,
	GetMeetingJointokenLocalRecordingQuery,
	GetMeetingJointokenLocalRecordingResponse,
	GetMeetingLivestreamResponse,
	GetMeetingMeetingSummaryResponse,
	GetMeetingPollResponse,
	GetMeetingQuery,
	GetMeetingRecordingAnalyticsSummaryQuery,
	GetMeetingRecordingAnalyticsSummaryResponse,
	GetMeetingRegistrantResponse,
	GetMeetingResponse,
	GetMeetingSurveyResponse,
	GetMeetingTokenQuery,
	GetMeetingTokenResponse,
	GetMeetingTranscriptResponse,
	ListMeetingMeetingSummariesQuery,
	ListMeetingMeetingSummariesResponse,
	ListMeetingPollsQuery,
	ListMeetingPollsResponse,
	ListMeetingRecordingAnalyticsDetailsQuery,
	ListMeetingRecordingAnalyticsDetailsResponse,
	ListMeetingRecordingRegistrantQuestionsResponse,
	ListMeetingRecordingRegistrantsQuery,
	ListMeetingRecordingRegistrantsResponse,
	ListMeetingRecordingSettingsResponse,
	ListMeetingRecordingsQuery,
	ListMeetingRecordingsResponse,
	ListMeetingRegistrantQuestionsResponse,
	ListMeetingRegistrantsQuery,
	ListMeetingRegistrantsResponse,
	RecoverMeetingRecordingsBody,
	ReplaceMeetingPollBody,
	ReplaceMeetingRecordingRegistrantStatusBody,
	ReplaceMeetingRecordingStatusBody,
	ReplaceMeetingRegistrantStatusBody,
	ReplaceMeetingRegistrantStatusQuery,
	ReplaceMeetingStatusBody,
	SipDialingMeetingBody,
	SipDialingMeetingResponse,
	UpdateMeetingBody,
	UpdateMeetingLivestreamBody,
	UpdateMeetingLivestreamStatusBody,
	UpdateMeetingQuery,
	UpdateMeetingRecordingRegistrantQuestionsBody,
	UpdateMeetingRecordingSettingsBody,
	UpdateMeetingRegistrantQuestionsBody,
	UpdateMeetingSurveyBody,
} from "./src/resources/meetings.js";

export {
	deletePastMeetingArchiveFiles,
	getPastMeeting,
	getPastMeetingQa,
	listPastMeetingArchiveFiles,
	listPastMeetingInstances,
	listPastMeetingParticipants,
	listPastMeetingPolls,
} from "./src/resources/past-meetings.js";

export type {
	GetPastMeetingQaResponse,
	GetPastMeetingResponse,
	ListPastMeetingArchiveFilesResponse,
	ListPastMeetingInstancesQuery,
	ListPastMeetingInstancesResponse,
	ListPastMeetingParticipantsQuery,
	ListPastMeetingParticipantsResponse,
	ListPastMeetingPollsResponse,
} from "./src/resources/past-meetings.js";

export {
	getPastWebinarQa,
	listPastWebinarAbsentees,
	listPastWebinarInstances,
	listPastWebinarParticipants,
	listPastWebinarPolls,
} from "./src/resources/past-webinars.js";

export type {
	GetPastWebinarQaResponse,
	ListPastWebinarAbsenteesQuery,
	ListPastWebinarAbsenteesResponse,
	ListPastWebinarInstancesResponse,
	ListPastWebinarParticipantsQuery,
	ListPastWebinarParticipantsResponse,
	ListPastWebinarPollsResponse,
} from "./src/resources/past-webinars.js";

export {
	getReportBilling,
	getReportCloudRecording,
	getReportDaily,
	getReportDisclaimer,
	getReportMeeting,
	getReportMeetingQa,
	getReportMeetingSurvey,
	getReportRemoteSupport,
	getReportTelephone,
	getReportWebinar,
	getReportWebinarQa,
	getReportWebinarSurvey,
	listReportActivities,
	listReportBillingInvoices,
	listReportHistoryMeetings,
	listReportMeetingActivities,
	listReportMeetingParticipants,
	listReportMeetingPolls,
	listReportOperationlogs,
	listReportUpcomingEvents,
	listReportUserMeetings,
	listReportUsers,
	listReportWebinarParticipants,
	listReportWebinarPolls,
} from "./src/resources/report.js";

export type {
	GetReportBillingResponse,
	GetReportCloudRecordingQuery,
	GetReportCloudRecordingResponse,
	GetReportDailyQuery,
	GetReportDailyResponse,
	GetReportDisclaimerQuery,
	GetReportDisclaimerResponse,
	GetReportMeetingQaResponse,
	GetReportMeetingResponse,
	GetReportMeetingSurveyResponse,
	GetReportRemoteSupportQuery,
	GetReportRemoteSupportResponse,
	GetReportTelephoneQuery,
	GetReportTelephoneResponse,
	GetReportWebinarQaResponse,
	GetReportWebinarResponse,
	GetReportWebinarSurveyResponse,
	ListReportActivitiesQuery,
	ListReportActivitiesResponse,
	ListReportBillingInvoicesQuery,
	ListReportBillingInvoicesResponse,
	ListReportHistoryMeetingsQuery,
	ListReportHistoryMeetingsResponse,
	ListReportMeetingActivitiesQuery,
	ListReportMeetingActivitiesResponse,
	ListReportMeetingParticipantsQuery,
	ListReportMeetingParticipantsResponse,
	ListReportMeetingPollsResponse,
	ListReportOperationlogsQuery,
	ListReportOperationlogsResponse,
	ListReportUpcomingEventsQuery,
	ListReportUpcomingEventsResponse,
	ListReportUserMeetingsQuery,
	ListReportUserMeetingsResponse,
	ListReportUsersQuery,
	ListReportUsersResponse,
	ListReportWebinarParticipantsQuery,
	ListReportWebinarParticipantsResponse,
	ListReportWebinarPollsResponse,
} from "./src/resources/report.js";

export {
	createSipPhonePhone,
	deleteSipPhonePhone,
	listSipPhonePhones,
	updateSipPhonePhone,
} from "./src/resources/sip-phones.js";

export type {
	CreateSipPhonePhoneBody,
	CreateSipPhonePhoneResponse,
	ListSipPhonePhonesQuery,
	ListSipPhonePhonesResponse,
	UpdateSipPhonePhoneBody,
} from "./src/resources/sip-phones.js";

export {
	createTrackingField,
	deleteTrackingField,
	getTrackingField,
	listTrackingFields,
	updateTrackingField,
} from "./src/resources/tracking-fields.js";

export type {
	CreateTrackingFieldBody,
	CreateTrackingFieldResponse,
	GetTrackingFieldResponse,
	ListTrackingFieldsResponse,
	UpdateTrackingFieldBody,
} from "./src/resources/tracking-fields.js";

export {
	getTsp,
	updateTsp,
} from "./src/resources/tsp.js";

export type {
	GetTspResponse,
	UpdateTspBody,
} from "./src/resources/tsp.js";

export {
	createUserMeeting,
	createUserMeetingTemplate,
	createUserTsp,
	createUserWebinar,
	createUserWebinarTemplate,
	deleteUserTsp,
	getUserPac,
	getUserTsp,
	listUserMeetingSummaries,
	listUserMeetingTemplates,
	listUserMeetings,
	listUserRecordings,
	listUserTsp,
	listUserUpcomingMeetings,
	listUserWebinarTemplates,
	listUserWebinars,
	updateUserTsp,
	updateUserTspSettings,
} from "./src/resources/users.js";

export type {
	CreateUserMeetingBody,
	CreateUserMeetingResponse,
	CreateUserMeetingTemplateBody,
	CreateUserMeetingTemplateResponse,
	CreateUserTspBody,
	CreateUserTspResponse,
	CreateUserWebinarBody,
	CreateUserWebinarResponse,
	CreateUserWebinarTemplateBody,
	CreateUserWebinarTemplateResponse,
	GetUserPacResponse,
	GetUserTspResponse,
	ListUserMeetingSummariesQuery,
	ListUserMeetingSummariesResponse,
	ListUserMeetingTemplatesResponse,
	ListUserMeetingsQuery,
	ListUserMeetingsResponse,
	ListUserRecordingsQuery,
	ListUserRecordingsResponse,
	ListUserTspResponse,
	ListUserUpcomingMeetingsResponse,
	ListUserWebinarTemplatesResponse,
	ListUserWebinarsQuery,
	ListUserWebinarsResponse,
	UpdateUserTspBody,
	UpdateUserTspSettingsBody,
} from "./src/resources/users.js";

export {
	createWebinarBatchRegistrant,
	createWebinarBrandingNameTag,
	createWebinarBrandingVirtualBackground,
	createWebinarInviteLink,
	createWebinarPanelist,
	createWebinarPoll,
	createWebinarRegistrant,
	deleteWebinar,
	deleteWebinarBrandingNameTags,
	deleteWebinarBrandingVirtualBackgrounds,
	deleteWebinarBrandingWallpaper,
	deleteWebinarPanelist,
	deleteWebinarPanelists,
	deleteWebinarPoll,
	deleteWebinarRegistrant,
	deleteWebinarSurvey,
	getWebinar,
	getWebinarBranding,
	getWebinarJointokenLiveStreaming,
	getWebinarJointokenLocalArchiving,
	getWebinarJointokenLocalRecording,
	getWebinarLivestream,
	getWebinarPoll,
	getWebinarRegistrant,
	getWebinarSurvey,
	getWebinarToken,
	listWebinarPanelists,
	listWebinarPolls,
	listWebinarRegistrantQuestions,
	listWebinarRegistrants,
	listWebinarTrackingSources,
	replaceWebinarPoll,
	replaceWebinarRegistrantStatus,
	replaceWebinarStatus,
	sipDialingWebinar,
	updateWebinar,
	updateWebinarBrandingNameTag,
	updateWebinarBrandingVirtualBackgrounds,
	updateWebinarBrandingWallpaper,
	updateWebinarLivestream,
	updateWebinarLivestreamStatus,
	updateWebinarRegistrantQuestions,
	updateWebinarSurvey,
} from "./src/resources/webinars.js";

export type {
	CreateWebinarBatchRegistrantBody,
	CreateWebinarBatchRegistrantResponse,
	CreateWebinarBrandingNameTagBody,
	CreateWebinarBrandingNameTagResponse,
	CreateWebinarBrandingVirtualBackgroundResponse,
	CreateWebinarInviteLinkBody,
	CreateWebinarInviteLinkResponse,
	CreateWebinarPanelistBody,
	CreateWebinarPanelistResponse,
	CreateWebinarPollBody,
	CreateWebinarPollResponse,
	CreateWebinarRegistrantBody,
	CreateWebinarRegistrantQuery,
	CreateWebinarRegistrantResponse,
	DeleteWebinarBrandingNameTagsQuery,
	DeleteWebinarBrandingVirtualBackgroundsQuery,
	DeleteWebinarQuery,
	DeleteWebinarRegistrantQuery,
	GetWebinarBrandingResponse,
	GetWebinarJointokenLiveStreamingResponse,
	GetWebinarJointokenLocalArchivingResponse,
	GetWebinarJointokenLocalRecordingResponse,
	GetWebinarLivestreamResponse,
	GetWebinarPollResponse,
	GetWebinarQuery,
	GetWebinarRegistrantQuery,
	GetWebinarRegistrantResponse,
	GetWebinarResponse,
	GetWebinarSurveyResponse,
	GetWebinarTokenQuery,
	GetWebinarTokenResponse,
	ListWebinarPanelistsResponse,
	ListWebinarPollsQuery,
	ListWebinarPollsResponse,
	ListWebinarRegistrantQuestionsResponse,
	ListWebinarRegistrantsQuery,
	ListWebinarRegistrantsResponse,
	ListWebinarTrackingSourcesResponse,
	ReplaceWebinarPollBody,
	ReplaceWebinarRegistrantStatusBody,
	ReplaceWebinarRegistrantStatusQuery,
	ReplaceWebinarStatusBody,
	SipDialingWebinarBody,
	SipDialingWebinarResponse,
	UpdateWebinarBody,
	UpdateWebinarBrandingNameTagBody,
	UpdateWebinarBrandingVirtualBackgroundsQuery,
	UpdateWebinarBrandingWallpaperResponse,
	UpdateWebinarLivestreamBody,
	UpdateWebinarLivestreamStatusBody,
	UpdateWebinarQuery,
	UpdateWebinarRegistrantQuestionsBody,
	UpdateWebinarSurveyBody,
} from "./src/resources/webinars.js";
// dung-beetle:end
