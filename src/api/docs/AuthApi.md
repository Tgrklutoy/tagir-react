# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consumeMagicLinkApiV1AuthMagicConsumePost**](#consumemagiclinkapiv1authmagicconsumepost) | **POST** /api/v1/auth/magic/consume | Consume Magic Link|
|[**logoutApiV1AuthLogoutPost**](#logoutapiv1authlogoutpost) | **POST** /api/v1/auth/logout | Logout|
|[**refreshTokenApiV1AuthRefreshPost**](#refreshtokenapiv1authrefreshpost) | **POST** /api/v1/auth/refresh | Refresh Token|
|[**requestMagicLinkApiV1AuthMagicRequestPost**](#requestmagiclinkapiv1authmagicrequestpost) | **POST** /api/v1/auth/magic/request | Request Magic Link|

# **consumeMagicLinkApiV1AuthMagicConsumePost**
> MagicConsumeResponse consumeMagicLinkApiV1AuthMagicConsumePost(magicConsumeRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    MagicConsumeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let magicConsumeRequest: MagicConsumeRequest; //

const { status, data } = await apiInstance.consumeMagicLinkApiV1AuthMagicConsumePost(
    magicConsumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **magicConsumeRequest** | **MagicConsumeRequest**|  | |


### Return type

**MagicConsumeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutApiV1AuthLogoutPost**
> OkResponse logoutApiV1AuthLogoutPost(refreshTokenRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RefreshTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refreshTokenRequest: RefreshTokenRequest; //

const { status, data } = await apiInstance.logoutApiV1AuthLogoutPost(
    refreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | **RefreshTokenRequest**|  | |


### Return type

**OkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshTokenApiV1AuthRefreshPost**
> RefreshTokenResponse refreshTokenApiV1AuthRefreshPost(refreshTokenRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RefreshTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refreshTokenRequest: RefreshTokenRequest; //

const { status, data } = await apiInstance.refreshTokenApiV1AuthRefreshPost(
    refreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | **RefreshTokenRequest**|  | |


### Return type

**RefreshTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestMagicLinkApiV1AuthMagicRequestPost**
> OkResponse requestMagicLinkApiV1AuthMagicRequestPost(magicLinkRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    MagicLinkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let magicLinkRequest: MagicLinkRequest; //

const { status, data } = await apiInstance.requestMagicLinkApiV1AuthMagicRequestPost(
    magicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **magicLinkRequest** | **MagicLinkRequest**|  | |


### Return type

**OkResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

