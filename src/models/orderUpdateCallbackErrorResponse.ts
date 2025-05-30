/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  OrderUpdateCallbackErrorResponseDetails,
  orderUpdateCallbackErrorResponseDetailsSchema,
} from './orderUpdateCallbackErrorResponseDetails';

/** The error details. */
export interface OrderUpdateCallbackErrorResponse {
  /** The human-readable, unique name of the error. */
  name: string;
  /** The message that describes the error. */
  message?: string;
  /** An array of additional details about the error. */
  details?: OrderUpdateCallbackErrorResponseDetails[];
}

export const orderUpdateCallbackErrorResponseSchema: Schema<OrderUpdateCallbackErrorResponse> = object(
  {
    name: ['name', string()],
    message: ['message', optional(string())],
    details: [
      'details',
      optional(
        array(lazy(() => orderUpdateCallbackErrorResponseDetailsSchema))
      ),
    ],
  }
);
