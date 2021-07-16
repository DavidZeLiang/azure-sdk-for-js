/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicySetDefinition,
  PolicySetDefinitionsListNextOptionalParams,
  PolicySetDefinitionsListOptionalParams,
  PolicySetDefinitionsListBuiltInNextOptionalParams,
  PolicySetDefinitionsListBuiltInOptionalParams,
  PolicySetDefinitionsListByManagementGroupNextOptionalParams,
  PolicySetDefinitionsListByManagementGroupOptionalParams,
  PolicySetDefinitionsCreateOrUpdateOptionalParams,
  PolicySetDefinitionsCreateOrUpdateResponse,
  PolicySetDefinitionsDeleteOptionalParams,
  PolicySetDefinitionsGetOptionalParams,
  PolicySetDefinitionsGetResponse,
  PolicySetDefinitionsGetBuiltInOptionalParams,
  PolicySetDefinitionsGetBuiltInResponse,
  PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse,
  PolicySetDefinitionsDeleteAtManagementGroupOptionalParams,
  PolicySetDefinitionsGetAtManagementGroupOptionalParams,
  PolicySetDefinitionsGetAtManagementGroupResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicySetDefinitions. */
export interface PolicySetDefinitions {
  /**
   * This operation retrieves a list of all the policy set definitions in a given subscription that match
   * the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq {value}'
   * or 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all policy set
   * definitions associated with the subscription, including those that apply directly or from management
   * groups that contain the given subscription. If $filter=atExactScope() is provided, the returned list
   * only includes all policy set definitions that at the given subscription. If $filter='policyType -eq
   * {value}' is provided, the returned list only includes all policy set definitions whose type match
   * the {value}. Possible policyType values are NotSpecified, BuiltIn and Custom. If $filter='category
   * -eq {value}' is provided, the returned list only includes all policy set definitions whose category
   * match the {value}.
   * @param options The options parameters.
   */
  list(
    options?: PolicySetDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * This operation retrieves a list of all the built-in policy set definitions that match the optional
   * given $filter. If $filter='category -eq {value}' is provided, the returned list only includes all
   * built-in policy set definitions whose category match the {value}.
   * @param options The options parameters.
   */
  listBuiltIn(
    options?: PolicySetDefinitionsListBuiltInOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * This operation retrieves a list of all the policy set definitions in a given management group that
   * match the optional given $filter. Valid values for $filter are: 'atExactScope()', 'policyType -eq
   * {value}' or 'category eq '{value}''. If $filter is not provided, the unfiltered list includes all
   * policy set definitions associated with the management group, including those that apply directly or
   * from management groups that contain the given management group. If $filter=atExactScope() is
   * provided, the returned list only includes all policy set definitions that at the given management
   * group. If $filter='policyType -eq {value}' is provided, the returned list only includes all policy
   * set definitions whose type match the {value}. Possible policyType values are NotSpecified, BuiltIn
   * and Custom. If $filter='category -eq {value}' is provided, the returned list only includes all
   * policy set definitions whose category match the {value}.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  listByManagementGroup(
    managementGroupId: string,
    options?: PolicySetDefinitionsListByManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: PolicySetDefinitionsListNextOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * ListBuiltInNext
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  listBuiltInNext(
    nextLink: string,
    options?: PolicySetDefinitionsListBuiltInNextOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * ListByManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  listByManagementGroupNext(
    managementGroupId: string,
    nextLink: string,
    options?: PolicySetDefinitionsListByManagementGroupNextOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition>;
  /**
   * This operation creates or updates a policy set definition in the given subscription with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policySetDefinitionName: string,
    parameters: PolicySetDefinition,
    options?: PolicySetDefinitionsCreateOrUpdateOptionalParams
  ): Promise<PolicySetDefinitionsCreateOrUpdateResponse>;
  /**
   * This operation deletes the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param options The options parameters.
   */
  delete(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * This operation retrieves the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  get(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsGetOptionalParams
  ): Promise<PolicySetDefinitionsGetResponse>;
  /**
   * This operation retrieves the built-in policy set definition with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  getBuiltIn(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsGetBuiltInOptionalParams
  ): Promise<PolicySetDefinitionsGetBuiltInResponse>;
  /**
   * This operation creates or updates a policy set definition in the given management group with the
   * given name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param managementGroupId The ID of the management group.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    parameters: PolicySetDefinition,
    options?: PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams
  ): Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  /**
   * This operation deletes the policy set definition in the given management group with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: PolicySetDefinitionsDeleteAtManagementGroupOptionalParams
  ): Promise<void>;
  /**
   * This operation retrieves the policy set definition in the given management group with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: PolicySetDefinitionsGetAtManagementGroupOptionalParams
  ): Promise<PolicySetDefinitionsGetAtManagementGroupResponse>;
}
