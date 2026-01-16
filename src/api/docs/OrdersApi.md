# OrdersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelOrderApiV1MeOrdersOrderIdCancelPost**](#cancelorderapiv1meordersorderidcancelpost) | **POST** /api/v1/me/orders/{order_id}/cancel | Cancel Order|
|[**createOrderApiV1MeOrdersPost**](#createorderapiv1meorderspost) | **POST** /api/v1/me/orders | Create Order|
|[**getOrderApiV1MeOrdersOrderIdGet**](#getorderapiv1meordersorderidget) | **GET** /api/v1/me/orders/{order_id} | Get Order|
|[**listOrdersApiV1MeOrdersGet**](#listordersapiv1meordersget) | **GET** /api/v1/me/orders | List Orders|
|[**simulatePaymentApiV1MeOrdersOrderIdSimulatePaymentPost**](#simulatepaymentapiv1meordersorderidsimulatepaymentpost) | **POST** /api/v1/me/orders/{order_id}/simulate-payment | Simulate Payment|

# **cancelOrderApiV1MeOrdersOrderIdCancelPost**
> OrderResponse cancelOrderApiV1MeOrdersOrderIdCancelPost()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelOrderApiV1MeOrdersOrderIdCancelPost(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrderApiV1MeOrdersPost**
> OrderResponse createOrderApiV1MeOrdersPost(createOrderPayload)


### Example

```typescript
import {
    OrdersApi,
    Configuration,
    CreateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let createOrderPayload: CreateOrderPayload; //

const { status, data } = await apiInstance.createOrderApiV1MeOrdersPost(
    createOrderPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrderPayload** | **CreateOrderPayload**|  | |


### Return type

**OrderResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderApiV1MeOrdersOrderIdGet**
> OrderResponse getOrderApiV1MeOrdersOrderIdGet()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrderApiV1MeOrdersOrderIdGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrdersApiV1MeOrdersGet**
> PaginatedResponseOrderSchema listOrdersApiV1MeOrdersGet()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let page: number; // (optional) (default to 1)
let perPage: number; // (optional) (default to 20)

const { status, data } = await apiInstance.listOrdersApiV1MeOrdersGet(
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **perPage** | [**number**] |  | (optional) defaults to 20|


### Return type

**PaginatedResponseOrderSchema**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulatePaymentApiV1MeOrdersOrderIdSimulatePaymentPost**
> OrderResponse simulatePaymentApiV1MeOrdersOrderIdSimulatePaymentPost()


### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.simulatePaymentApiV1MeOrdersOrderIdSimulatePaymentPost(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

