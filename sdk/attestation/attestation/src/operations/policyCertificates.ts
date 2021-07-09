// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as coreHttp from "@azure/core-client";
import { AttestationClient } from "../attestationClient";
import {
  PolicyCertificatesGetResponse,
  PolicyCertificatesAddResponse,
  PolicyCertificatesRemoveResponse
} from "../models";

/**
 * Class representing a PolicyCertificates.
 */
export class PolicyCertificates {
  private readonly client: AttestationClient;

  /**
   * Initialize a new instance of the class PolicyCertificates class.
   * @param client - Reference to the service client
   */
  constructor(client: AttestationClient) {
    this.client = client;
  }

  /**
   * Retrieves the set of certificates used to express policy for the current tenant.
   * @param options - The options parameters.
   */
  get(options?: coreHttp.OperationOptions): Promise<PolicyCertificatesGetResponse> {
    return this.client.getGeneratedClient().policyCertificates.get(options);
  }

  /**
   * Adds a new attestation policy certificate to the set of policy management certificates.
   * @param policyCertificateToAdd - An RFC7519 JSON Web Token whose body is an RFC7517 JSON Web Key
   *                               object. The RFC7519 JWT must be signed with one of the existing signing certificates
   * @param options - The options parameters.
   */
  add(
    policyCertificateToAdd: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicyCertificatesAddResponse> {
    return this.client.getGeneratedClient().policyCertificates.add(policyCertificateToAdd, options);
  }

  /**
   * Removes the specified policy management certificate. Note that the final policy management
   * certificate cannot be removed.
   * @param policyCertificateToRemove - An RFC7519 JSON Web Token whose body is an
   *                                  AttestationCertificateManagementBody object. The RFC7519 JWT must be signed with one of the existing
   *                                  signing certificates
   * @param options - The options parameters.
   */
  remove(
    policyCertificateToRemove: string,
    options?: coreHttp.OperationOptions
  ): Promise<PolicyCertificatesRemoveResponse> {
    return this.client
      .getGeneratedClient()
      .policyCertificates.remove(policyCertificateToRemove, options);
  }
}
