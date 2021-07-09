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
import { AuthorizationManagementClientContext } from "./authorizationManagementClientContext";


class AuthorizationManagementClient extends AuthorizationManagementClientContext {
  // Operation groups
  classicAdministrators: operations.ClassicAdministrators;
  globalAdministrator: operations.GlobalAdministrator;
  providerOperationsMetadata: operations.ProviderOperationsMetadataOperations;
  roleAssignments: operations.RoleAssignments;
  permissions: operations.Permissions;
  roleDefinitions: operations.RoleDefinitions;
  denyAssignments: operations.DenyAssignments;

  /**
   * Initializes a new instance of the AuthorizationManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.AuthorizationManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.classicAdministrators = new operations.ClassicAdministrators(this);
    this.globalAdministrator = new operations.GlobalAdministrator(this);
    this.providerOperationsMetadata = new operations.ProviderOperationsMetadataOperations(this);
    this.roleAssignments = new operations.RoleAssignments(this);
    this.permissions = new operations.Permissions(this);
    this.roleDefinitions = new operations.RoleDefinitions(this);
    this.denyAssignments = new operations.DenyAssignments(this);
  }
}

// Operation Specifications

export {
  AuthorizationManagementClient,
  AuthorizationManagementClientContext,
  Models as AuthorizationManagementModels,
  Mappers as AuthorizationManagementMappers
};
export * from "./operations";
