/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * An interval in time specifying the date and time for the inclusive start and exclusive end, i.e.
 * `[start, end)`.
 */
export interface DateTimeInterval {
  /**
   * A datetime indicating the inclusive/closed start of the time interval, i.e. `[`**`start`**`,
   * end)`. Specifying a `start` that occurs chronologically after `end` will result in an error.
   */
  start: Date;
  /**
   * A datetime indicating the exclusive/open end of the time interval, i.e. `[start,
   * `**`end`**`)`. Specifying an `end` that occurs chronologically before `start` will result in
   * an error.
   */
  end: Date;
}

/**
 * Specifies the date and time interval for a changes request.
 */
export interface ResourceChangesRequestParametersInterval extends DateTimeInterval {}

/**
 * The parameters for a specific changes request.
 */
export interface ResourceChangesRequestParameters {
  /**
   * Specifies the list of resources for a changes request.
   */
  resourceIds?: string[];
  /**
   * The subscription id of resources to query the changes from.
   */
  subscriptionId?: string;
  /**
   * Specifies the date and time interval for a changes request.
   */
  interval: ResourceChangesRequestParametersInterval;
  /**
   * Acts as the continuation token for paged responses.
   */
  skipToken?: string;
  /**
   * The maximum number of changes the client can accept in a paged response.
   */
  top?: number;
  /**
   * The table name to query resources from.
   */
  table?: string;
  /**
   * The flag if set to true will fetch property changes
   */
  fetchPropertyChanges?: boolean;
  /**
   * The flag if set to true will fetch change snapshots
   */
  fetchSnapshots?: boolean;
}

/**
 * Data on a specific resource snapshot.
 */
export interface ResourceSnapshotData {
  /**
   * The ID of the snapshot.
   */
  snapshotId?: string;
  /**
   * The time when the snapshot was created.
   * The snapshot timestamp provides an approximation as to when a modification to a resource was
   * detected.  There can be a difference between the actual modification time and the detection
   * time.  This is due to differences in how operations that modify a resource are processed,
   * versus how operation that record resource snapshots are processed.
   */
  timestamp: Date;
  /**
   * The resource snapshot content (in resourceChangeDetails response only).
   */
  content?: any;
}

/**
 * The snapshot before the change.
 */
export interface ResourceChangeDataBeforeSnapshot extends ResourceSnapshotData {}

/**
 * The snapshot after the change.
 */
export interface ResourceChangeDataAfterSnapshot extends ResourceSnapshotData {}

/**
 * The resource property change
 */
export interface ResourcePropertyChange {
  /**
   * The property name
   */
  propertyName: string;
  /**
   * The property value in before snapshot
   */
  beforeValue?: string;
  /**
   * The property value in after snapshot
   */
  afterValue?: string;
  /**
   * The change category. Possible values include: 'User', 'System'
   */
  changeCategory: ChangeCategory;
  /**
   * The property change Type. Possible values include: 'Insert', 'Update', 'Remove'
   */
  propertyChangeType: PropertyChangeType;
}

/**
 * Data on a specific change, represented by a pair of before and after resource snapshots.
 */
export interface ResourceChangeData {
  /**
   * The resource for a change.
   */
  resourceId?: string;
  /**
   * The change ID. Valid and unique within the specified resource only.
   */
  changeId: string;
  /**
   * The snapshot before the change.
   */
  beforeSnapshot: ResourceChangeDataBeforeSnapshot;
  /**
   * The snapshot after the change.
   */
  afterSnapshot: ResourceChangeDataAfterSnapshot;
  /**
   * The change type for snapshot. PropertyChanges will be provided in case of Update change type.
   * Possible values include: 'Create', 'Update', 'Delete'
   */
  changeType?: ChangeType;
  /**
   * An array of resource property change
   */
  propertyChanges?: ResourcePropertyChange[];
}

/**
 * A list of changes associated with a resource over a specific time interval.
 */
export interface ResourceChangeList {
  /**
   * The pageable value returned by the operation, i.e. a list of changes to the resource.
   *
   * - The list is ordered from the most recent changes to the least recent changes.
   * - This list will be empty if there were no changes during the requested interval.
   * - The `Before` snapshot timestamp value of the oldest change can be outside of the specified
   * time interval.
   */
  changes?: ResourceChangeData[];
  /**
   * Skip token that encodes the skip information while executing the current request
   */
  skipToken?: any;
}

/**
 * The parameters for a specific change details request.
 */
export interface ResourceChangeDetailsRequestParameters {
  /**
   * Specifies the list of resources for a change details request.
   */
  resourceIds: string[];
  /**
   * Specifies the list of change IDs for a change details request.
   */
  changeIds: string[];
}

/**
 * An interface representing ErrorDetails.
 * @summary Error details.
 */
export interface ErrorDetails {
  /**
   * Error code identifying the specific error.
   */
  code: string;
  /**
   * A human readable error message.
   */
  message: string;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * Error details.
 * @summary Error info.
 */
export interface ErrorModel {
  /**
   * Error code identifying the specific error.
   */
  code: string;
  /**
   * A human readable error message.
   */
  message: string;
  /**
   * Error details
   */
  details?: ErrorDetails[];
}

/**
 * An error response from the API.
 * @summary Error response.
 */
export interface ErrorResponse {
  /**
   * Error information.
   */
  error: ErrorModel;
}

/**
 * The options for query evaluation
 */
export interface QueryRequestOptions {
  /**
   * Continuation token for pagination, capturing the next page size and offset, as well as the
   * context of the query.
   */
  skipToken?: string;
  /**
   * The maximum number of rows that the query should return. Overrides the page size when
   * ```$skipToken``` property is present.
   */
  top?: number;
  /**
   * The number of rows to skip from the beginning of the results. Overrides the next page offset
   * when ```$skipToken``` property is present.
   */
  skip?: number;
  /**
   * Defines in which format query result returned. Possible values include: 'table',
   * 'objectArray'. Default value: 'objectArray'.
   */
  resultFormat?: ResultFormat;
  /**
   * Only applicable for tenant and management group level queries to decide whether to allow
   * partial scopes for result in case the number of subscriptions exceed allowed limits. Default
   * value: false.
   */
  allowPartialScopes?: boolean;
}

/**
 * The options for facet evaluation
 */
export interface FacetRequestOptions {
  /**
   * The column name or query expression to sort on. Defaults to count if not present.
   */
  sortBy?: string;
  /**
   * The sorting order by the selected column (count by default). Possible values include: 'asc',
   * 'desc'. Default value: 'desc'.
   */
  sortOrder?: FacetSortOrder;
  /**
   * Specifies the filter condition for the 'where' clause which will be run on main query's
   * result, just before the actual faceting.
   */
  filter?: string;
  /**
   * The maximum number of facet rows that should be returned.
   */
  top?: number;
}

/**
 * A request to compute additional statistics (facets) over the query results.
 */
export interface FacetRequest {
  /**
   * The column or list of columns to summarize by
   */
  expression: string;
  /**
   * The options for facet evaluation
   */
  options?: FacetRequestOptions;
}

/**
 * Describes a query to be executed.
 */
export interface QueryRequest {
  /**
   * Azure subscriptions against which to execute the query.
   */
  subscriptions?: string[];
  /**
   * Azure management groups against which to execute the query. Example: [ 'mg1', 'mg2' ]
   */
  managementGroups?: string[];
  /**
   * The resources query.
   */
  query: string;
  /**
   * The query evaluation options
   */
  options?: QueryRequestOptions;
  /**
   * An array of facet requests to be computed against the query result.
   */
  facets?: FacetRequest[];
}

/**
 * Contains the possible cases for Facet.
 */
export type FacetUnion = Facet | FacetResult | FacetError;

/**
 * A facet containing additional statistics on the response of a query. Can be either FacetResult
 * or FacetError.
 */
export interface Facet {
  /**
   * Polymorphic Discriminator
   */
  resultType: "Facet";
  /**
   * Facet expression, same as in the corresponding facet request.
   */
  expression: string;
}

/**
 * Query result.
 */
export interface QueryResponse {
  /**
   * Number of total records matching the query.
   */
  totalRecords: number;
  /**
   * Number of records returned in the current response. In the case of paging, this is the number
   * of records in the current page.
   */
  count: number;
  /**
   * Indicates whether the query results are truncated. Possible values include: 'true', 'false'
   */
  resultTruncated: ResultTruncated;
  /**
   * When present, the value can be passed to a subsequent query call (together with the same query
   * and scopes used in the current request) to retrieve the next page of data.
   */
  skipToken?: string;
  /**
   * Query output in JObject array or Table format.
   */
  data: any;
  /**
   * Query facets.
   */
  facets?: FacetUnion[];
}

/**
 * Query result column descriptor.
 */
export interface Column {
  /**
   * Column name.
   */
  name: string;
  /**
   * Column data type. Possible values include: 'string', 'integer', 'number', 'boolean', 'object'
   */
  type: ColumnDataType;
}

/**
 * Query output in tabular format.
 */
export interface Table {
  /**
   * Query result column descriptors.
   */
  columns: Column[];
  /**
   * Query result rows.
   */
  rows: any[][];
}

/**
 * Successfully executed facet containing additional statistics on the response of a query.
 */
export interface FacetResult {
  /**
   * Polymorphic Discriminator
   */
  resultType: "FacetResult";
  /**
   * Facet expression, same as in the corresponding facet request.
   */
  expression: string;
  /**
   * Number of total records in the facet results.
   */
  totalRecords: number;
  /**
   * Number of records returned in the facet response.
   */
  count: number;
  /**
   * A JObject array or Table containing the desired facets. Only present if the facet is valid.
   */
  data: any;
}

/**
 * A facet whose execution resulted in an error.
 */
export interface FacetError {
  /**
   * Polymorphic Discriminator
   */
  resultType: "FacetError";
  /**
   * Facet expression, same as in the corresponding facet request.
   */
  expression: string;
  /**
   * An array containing detected facet errors with details.
   */
  errors: ErrorDetails[];
}

/**
 * Display metadata associated with the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft Resource Graph.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed etc.
   */
  resource?: string;
  /**
   * Type of operation: get, read, delete, etc.
   */
  operation?: string;
  /**
   * Description for the operation.
   */
  description?: string;
}

/**
 * Resource Graph REST API operation definition.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Display metadata associated with the operation.
   */
  display?: OperationDisplay;
  /**
   * The origin of operations.
   */
  origin?: string;
}

/**
 * An interface representing ResourcesHistoryRequestOptions.
 */
export interface ResourcesHistoryRequestOptions {
  interval?: DateTimeInterval;
  top?: number;
  skip?: number;
  skipToken?: string;
  /**
   * Possible values include: 'table', 'objectArray'
   */
  resultFormat?: ResultFormat1;
}

/**
 * An interface representing ResourcesHistoryRequest.
 */
export interface ResourcesHistoryRequest {
  subscriptions?: string[];
  query?: string;
  options?: ResourcesHistoryRequestOptions;
  managementGroupId?: string;
}

/**
 * An interface representing ResourceGraphClientOptions.
 */
export interface ResourceGraphClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Resource Graph operations. It contains a list of operations and a
 * URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {}

/**
 * Defines values for ChangeType.
 * Possible values include: 'Create', 'Update', 'Delete'
 * @readonly
 * @enum {string}
 */
export type ChangeType = "Create" | "Update" | "Delete";

/**
 * Defines values for ChangeCategory.
 * Possible values include: 'User', 'System'
 * @readonly
 * @enum {string}
 */
export type ChangeCategory = "User" | "System";

/**
 * Defines values for PropertyChangeType.
 * Possible values include: 'Insert', 'Update', 'Remove'
 * @readonly
 * @enum {string}
 */
export type PropertyChangeType = "Insert" | "Update" | "Remove";

/**
 * Defines values for ResultFormat.
 * Possible values include: 'table', 'objectArray'
 * @readonly
 * @enum {string}
 */
export type ResultFormat = "table" | "objectArray";

/**
 * Defines values for FacetSortOrder.
 * Possible values include: 'asc', 'desc'
 * @readonly
 * @enum {string}
 */
export type FacetSortOrder = "asc" | "desc";

/**
 * Defines values for ResultTruncated.
 * Possible values include: 'true', 'false'
 * @readonly
 * @enum {string}
 */
export type ResultTruncated = "true" | "false";

/**
 * Defines values for ColumnDataType.
 * Possible values include: 'string', 'integer', 'number', 'boolean', 'object'
 * @readonly
 * @enum {string}
 */
export type ColumnDataType = "string" | "integer" | "number" | "boolean" | "object";

/**
 * Defines values for ResultFormat1.
 * Possible values include: 'table', 'objectArray'
 * @readonly
 * @enum {string}
 */
export type ResultFormat1 = "table" | "objectArray";

/**
 * Contains response data for the resourceChanges operation.
 */
export type ResourceChangesResponse = ResourceChangeList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ResourceChangeList;
  };
};

/**
 * Contains response data for the resourceChangeDetails operation.
 */
export type ResourceChangeDetailsResponse = Array<ResourceChangeData> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ResourceChangeData[];
  };
};

/**
 * Contains response data for the resources operation.
 */
export type ResourcesResponse = QueryResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: QueryResponse;
  };
};

/**
 * Contains response data for the resourcesHistory operation.
 */
export type ResourcesHistoryResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: any;
  };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: OperationListResult;
  };
};
