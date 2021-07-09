/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MetadataConfiguration } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClientContext } from "../generatedClientContext";
import {
  MetadataConfigurationGetOptionalParams,
  MetadataConfigurationGetResponse
} from "../models";

/** Class representing a MetadataConfiguration. */
export class MetadataConfigurationImpl implements MetadataConfiguration {
  private readonly client: GeneratedClientContext;

  /**
   * Initialize a new instance of the class MetadataConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClientContext) {
    this.client = client;
  }

  /**
   * Retrieves metadata about the attestation signing keys in use by the attestation service
   * @param options The options parameters.
   */
  get(
    options?: MetadataConfigurationGetOptionalParams
  ): Promise<MetadataConfigurationGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/.well-known/openid-configuration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "any" } }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.instanceUrl],
  headerParameters: [Parameters.accept],
  serializer
};
