# CartApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clearCartApiV1MeCartClearPost**](#clearcartapiv1mecartclearpost) | **POST** /api/v1/me/cart/clear | Clear Cart|
|[**deleteCartItemApiV1MeCartItemsVariantIdDelete**](#deletecartitemapiv1mecartitemsvariantiddelete) | **DELETE** /api/v1/me/cart/items/{variant_id} | Delete Cart Item|
|[**getCartApiV1MeCartGet**](#getcartapiv1mecartget) | **GET** /api/v1/me/cart | Get Cart|
|[**mergeCartApiV1MeCartMergePost**](#mergecartapiv1mecartmergepost) | **POST** /api/v1/me/cart/merge | Merge Cart|
|[**updateCartItemApiV1MeCartItemsVariantIdPut**](#updatecartitemapiv1mecartitemsvariantidput) | **PUT** /api/v1/me/cart/items/{variant_id} | Update Cart Item|

# **clearCartApiV1MeCartClearPost**
> CartResponse clearCartApiV1MeCartClearPost()


### Example

```typescript
import {
    CartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartApi(configuration);

const { status, data } = await apiInstance.clearCartApiV1MeCartClearPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CartResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCartItemApiV1MeCartItemsVariantIdDelete**
> CartResponse deleteCartItemApiV1MeCartItemsVariantIdDelete()


### Example

```typescript
import {
    CartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartApi(configuration);

let variantId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCartItemApiV1MeCartItemsVariantIdDelete(
    variantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**CartResponse**

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

# **getCartApiV1MeCartGet**
> CartResponse getCartApiV1MeCartGet()


### Example

```typescript
import {
    CartApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartApi(configuration);

const { status, data } = await apiInstance.getCartApiV1MeCartGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CartResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mergeCartApiV1MeCartMergePost**
> CartMergeResponse mergeCartApiV1MeCartMergePost(mergeCartPayload)


### Example

```typescript
import {
    CartApi,
    Configuration,
    MergeCartPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CartApi(configuration);

let mergeCartPayload: MergeCartPayload; //

const { status, data } = await apiInstance.mergeCartApiV1MeCartMergePost(
    mergeCartPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mergeCartPayload** | **MergeCartPayload**|  | |


### Return type

**CartMergeResponse**

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

# **updateCartItemApiV1MeCartItemsVariantIdPut**
> CartResponse updateCartItemApiV1MeCartItemsVariantIdPut(cartQtyRequest)


### Example

```typescript
import {
    CartApi,
    Configuration,
    CartQtyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CartApi(configuration);

let variantId: string; // (default to undefined)
let cartQtyRequest: CartQtyRequest; //

const { status, data } = await apiInstance.updateCartItemApiV1MeCartItemsVariantIdPut(
    variantId,
    cartQtyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartQtyRequest** | **CartQtyRequest**|  | |
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**CartResponse**

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

