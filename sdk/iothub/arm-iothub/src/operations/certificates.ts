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
import * as Mappers from "../models/certificatesMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a Certificates. */
export class Certificates {
  private readonly client: IotHubClientContext;

  /**
   * Create a Certificates.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of certificates.
   * @summary Get the certificate list.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesListByIotHubResponse>
   */
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.CertificatesListByIotHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param callback The callback
   */
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    callback: msRest.ServiceCallback<Models.CertificateListDescription>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.CertificateListDescription>
  ): void;
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateListDescription>,
    callback?: msRest.ServiceCallback<Models.CertificateListDescription>
  ): Promise<Models.CertificatesListByIotHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listByIotHubOperationSpec,
      callback
    ) as Promise<Models.CertificatesListByIotHubResponse>;
  }

  /**
   * Returns the certificate.
   * @summary Get the certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesGetResponse>
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.CertificatesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateDescription>,
    callback?: msRest.ServiceCallback<Models.CertificateDescription>
  ): Promise<Models.CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.CertificatesGetResponse>;
  }

  /**
   * Adds new or replaces existing certificate.
   * @summary Upload the certificate to the IoT hub.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesCreateOrUpdateResponse>
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: Models.CertificatesCreateOrUpdateOptionalParams
  ): Promise<Models.CertificatesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param callback The callback
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options: Models.CertificatesCreateOrUpdateOptionalParams,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?:
      | Models.CertificatesCreateOrUpdateOptionalParams
      | msRest.ServiceCallback<Models.CertificateDescription>,
    callback?: msRest.ServiceCallback<Models.CertificateDescription>
  ): Promise<Models.CertificatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        options
      },
      createOrUpdateOperationSpec,
      callback
    ) as Promise<Models.CertificatesCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing X509 certificate or does nothing if it does not exist.
   * @summary Delete an X509 certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param callback The callback
   */
  deleteMethod(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    callback: msRest.ServiceCallback<void>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<void>
  ): void;
  deleteMethod(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback
    );
  }

  /**
   * Generates verification code for proof of possession flow. The verification code will be used to
   * generate a leaf certificate.
   * @summary Generate verification code for proof of possession flow.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesGenerateVerificationCodeResponse>
   */
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.CertificatesGenerateVerificationCodeResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param callback The callback
   */
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    callback: msRest.ServiceCallback<Models.CertificateWithNonceDescription>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The optional parameters
   * @param callback The callback
   */
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.CertificateWithNonceDescription>
  ): void;
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.CertificateWithNonceDescription>,
    callback?: msRest.ServiceCallback<Models.CertificateWithNonceDescription>
  ): Promise<Models.CertificatesGenerateVerificationCodeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        ifMatch,
        options
      },
      generateVerificationCodeOperationSpec,
      callback
    ) as Promise<Models.CertificatesGenerateVerificationCodeResponse>;
  }

  /**
   * Verifies the certificate's private key possession by providing the leaf cert issued by the
   * verifying pre uploaded certificate.
   * @summary Verify certificate's private key possession.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificatesVerifyResponse>
   */
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: Models.CertificatesVerifyOptionalParams
  ): Promise<Models.CertificatesVerifyResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param callback The callback
   */
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The optional parameters
   * @param callback The callback
   */
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options: Models.CertificatesVerifyOptionalParams,
    callback: msRest.ServiceCallback<Models.CertificateDescription>
  ): void;
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?:
      | Models.CertificatesVerifyOptionalParams
      | msRest.ServiceCallback<Models.CertificateDescription>,
    callback?: msRest.ServiceCallback<Models.CertificateDescription>
  ): Promise<Models.CertificatesVerifyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        ifMatch,
        options
      },
      verifyOperationSpec,
      callback
    ) as Promise<Models.CertificatesVerifyResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByIotHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName, Parameters.resourceName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch0, Parameters.acceptLanguage],
  requestBody: {
    parameterPath: {
      properties: ["options", "properties"]
    },
    mapper: {
      ...Mappers.CertificateDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    201: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch1, Parameters.acceptLanguage],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const generateVerificationCodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch1, Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateWithNonceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};

const verifyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.ifMatch1, Parameters.acceptLanguage],
  requestBody: {
    parameterPath: {
      certificate: ["options", "certificate"]
    },
    mapper: {
      ...Mappers.CertificateVerificationDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
