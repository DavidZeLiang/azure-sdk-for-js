/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/backupsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a Backups. */
export class Backups {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a Backups.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Triggers backup for specified backed up item. This is an asynchronous operation. To know the
   * status of the
   * operation, call GetProtectedItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item for which backup needs to be triggered.
   * @param parameters resource backup request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  trigger(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: Models.BackupRequestResource,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item for which backup needs to be triggered.
   * @param parameters resource backup request
   * @param callback The callback
   */
  trigger(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: Models.BackupRequestResource,
    callback: msRest.ServiceCallback<void>
  ): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item for which backup needs to be triggered.
   * @param parameters resource backup request
   * @param options The optional parameters
   * @param callback The callback
   */
  trigger(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: Models.BackupRequestResource,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<void>
  ): void;
  trigger(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: Models.BackupRequestResource,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        options
      },
      triggerOperationSpec,
      callback
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const triggerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/backup",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName
  ],
  queryParameters: [Parameters.apiVersion0],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupRequestResource,
      required: true
    }
  },
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
