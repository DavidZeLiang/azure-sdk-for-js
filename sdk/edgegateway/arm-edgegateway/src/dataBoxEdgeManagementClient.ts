/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { DataBoxEdgeManagementClientContext } from "./dataBoxEdgeManagementClientContext";


class DataBoxEdgeManagementClient extends DataBoxEdgeManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  devices: operations.Devices;
  alerts: operations.Alerts;
  bandwidthSchedules: operations.BandwidthSchedules;
  jobs: operations.Jobs;
  operationsStatus: operations.OperationsStatus;
  orders: operations.Orders;
  roles: operations.Roles;
  shares: operations.Shares;
  storageAccountCredentials: operations.StorageAccountCredentials;
  triggers: operations.Triggers;
  users: operations.Users;

  /**
   * Initializes a new instance of the DataBoxEdgeManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.DataBoxEdgeManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.devices = new operations.Devices(this);
    this.alerts = new operations.Alerts(this);
    this.bandwidthSchedules = new operations.BandwidthSchedules(this);
    this.jobs = new operations.Jobs(this);
    this.operationsStatus = new operations.OperationsStatus(this);
    this.orders = new operations.Orders(this);
    this.roles = new operations.Roles(this);
    this.shares = new operations.Shares(this);
    this.storageAccountCredentials = new operations.StorageAccountCredentials(this);
    this.triggers = new operations.Triggers(this);
    this.users = new operations.Users(this);
  }
}

// Operation Specifications

export {
  DataBoxEdgeManagementClient,
  DataBoxEdgeManagementClientContext,
  Models as DataBoxEdgeManagementModels,
  Mappers as DataBoxEdgeManagementMappers
};
export * from "./operations";
