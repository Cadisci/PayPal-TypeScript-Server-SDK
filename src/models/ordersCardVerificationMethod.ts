/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrdersCardVerificationMethod
 */
export enum OrdersCardVerificationMethod {
  ScaAlways = 'SCA_ALWAYS',
  ScaWhenRequired = 'SCA_WHEN_REQUIRED',
  Enum3DSecure = '3D_SECURE',
  AvsCvv = 'AVS_CVV',
}

/**
 * Schema for OrdersCardVerificationMethod
 */
export const ordersCardVerificationMethodSchema: Schema<OrdersCardVerificationMethod> = stringEnum(
  OrdersCardVerificationMethod,
  true
);
