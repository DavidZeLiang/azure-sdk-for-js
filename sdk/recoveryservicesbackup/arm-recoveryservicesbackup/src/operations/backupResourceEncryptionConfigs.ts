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
import * as Mappers from "../models/backupResourceEncryptionConfigsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupResourceEncryptionConfigs. */
export class BackupResourceEncryptionConfigs {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupResourceEncryptionConfigs.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches Vault Encryption config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceEncryptionConfigsGetResponse>
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.BackupResourceEncryptionConfigsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    callback: msRest.ServiceCallback<Models.BackupResourceEncryptionConfigResource>
  ): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.BackupResourceEncryptionConfigResource>
  ): void;
  get(
    vaultName: string,
    resourceGroupName: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.BackupResourceEncryptionConfigResource>,
    callback?: msRest.ServiceCallback<Models.BackupResourceEncryptionConfigResource>
  ): Promise<Models.BackupResourceEncryptionConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.BackupResourceEncryptionConfigsGetResponse>;
  }

  /**
   * Updates Vault encryption config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault encryption input config request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: Models.BackupResourceEncryptionConfigResource,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault encryption input config request
   * @param callback The callback
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: Models.BackupResourceEncryptionConfigResource,
    callback: msRest.ServiceCallback<void>
  ): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault encryption input config request
   * @param options The optional parameters
   * @param callback The callback
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: Models.BackupResourceEncryptionConfigResource,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<void>
  ): void;
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: Models.BackupResourceEncryptionConfigResource,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEncryptionConfigs/backupResourceEncryptionConfig",
  urlParameters: [Parameters.vaultName, Parameters.resourceGroupName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion0],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceEncryptionConfigResource
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEncryptionConfigs/backupResourceEncryptionConfig",
  urlParameters: [Parameters.vaultName, Parameters.resourceGroupName, Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion0],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupResourceEncryptionConfigResource,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};
