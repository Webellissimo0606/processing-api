# Thrid Party  Conversion

### Track My Application Report

| Route | Method | Fill in Response Document |
|---|---|---|
| `/thirdparty/track/:oprid` | GET | Yes |

#### Conversion

Param :id is required integer, the rest are optional

USE function:

Report_TrackMyApplications_ByUserPartyRoleID

Definition:
CREATE OR REPLACE FUNCTION "Report_TrackMyApplications_ByUserPartyRoleID"(IN "@UserPartyRoleID" integer)

Returns: TABLE("ApplicationID" integer, "BorrowerName" character varying, "Created" timestamp without time zone, "LoanAmount" money, "ExternalLeadID" uuid, "RetailApplicationID" integer, "ProductCategoryID" integer, "ApplicationStatusTypeName" character varying)

#Current .Net response#

An array of the below items

```
public class TrackItem {
            public int? id { get; set; }
            public string name { get; set; }
            public DateTime? created { get; set; }
            public decimal? amount { get; set; }
            public string applicationStatusTypeName { get; set; }
            /// <summary>
            /// External lead id
            /// </summary>
            public Guid? elid { get; set; }
            /// <summary>
            /// Retail Application ID
            /// </summary>
            public int? raid { get; set; }
            /// <summary>
            /// Retail Product Category ID
            /// </summary>
            public int? pcid { get; set; }


            public static TrackItem FromDataRow(DataRow row) {
                if (row == null) { return null; }

                return new TrackItem()
                {
                    id = row.F<int?>("ApplicationID"),
                    name = row.F<string>("BorrowerName"),
                    created = row.F<DateTime?>("Created"),
                    amount = row.F<decimal?>("LoanAmount"),
                    elid = row.F<Guid?>("ExternalLeadID"),
                    pcid = row.F<int?>("ProductCategoryID"),
                    raid = row.F<int?>("RetailApplicationID"),
                    applicationStatusTypeName = row.F<string>("ApplicationStatusTypeName")
                };
            }
        }
```
