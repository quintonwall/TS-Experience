import { Action } from "@thoughtspot/visual-embed-sdk";

export const  gbl_thoughtSpotHost = "https://try-everywhere.thoughtspot.cloud/";
export const gbl_disabledMessage = "Features restricted for product tour. Sign up for free trial to test them out."; 
export const gbl_disabledActionSet =  [
        Action.AddFilter,
        Action.AddToFavorites,
        Action.AnswerChartSwitcher,
        Action.AnswerDelete,
        Action.CopyAndEdit,
        Action.CopyLink,
        Action.CopyToClipboard,
        Action.CreateMonitor,
        Action.Download,
        Action.DownloadAsCsv,
        Action.DownloadAsPdf,
        Action.DownloadAsXlsx,
        Action.Edit,
        Action.EditACopy,
        Action.EditDetails,
        Action.EditMeasure,
        Action.EditTML,
        Action.EditTitle,
        Action.Explore,
        Action.ExportTML,
        Action.ImportTML,
        Action.LiveboardInfo,
        Action.MakeACopy,
        Action.Pin,
        Action.Present,
        Action.QueryDetailsButtons,
        Action.Remove,
        Action.ReportError,
        Action.RequestAccess,
        Action.Save,
        Action.SaveAsView,
        Action.Schedule,
        Action.SchedulesList,
        Action.Separator,
        Action.Share,
        Action.ShareViz,
        Action.SpotIQAnalyze,
        Action.ShowUnderlyingData,
        "sync-to-sheets",
        "sync-to-other-apps",
        "manage-pipeline",
        Action.Subscription,
        Action.ToggleSize,
        Action.UpdateTML 
      ];


      export const gbl_meta = {
        title: "ThoughtSpot Product Tour",
        description: "Experience the power of live analytics with a interactive demo of ThoughtSpot.",
        canonical: "https://thoughtspot.com/preview",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "thoughtspot,quinton,embedded analytics, demo, live analytics, preview"
            }
        }
      }
