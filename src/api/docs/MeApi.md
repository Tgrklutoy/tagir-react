# MeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMeApiV1MeGet**](#getmeapiv1meget) | **GET** /api/v1/me | Get Me|
|[**updateMeApiV1MePatch**](#updatemeapiv1mepatch) | **PATCH** /api/v1/me | Update Me|

# **getMeApiV1MeGet**
> UserResponse getMeApiV1MeGet()


### Example

```typescript
import {
    MeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.getMeApiV1MeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserResponse**

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

# **updateMeApiV1MePatch**
> UserResponse updateMeApiV1MePatch(userUpdateSchema)


### Example

```typescript
import {
    MeApi,
    Configuration,
    UserUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let userUpdateSchema: UserUpdateSchema; //

const { status, data } = await apiInstance.updateMeApiV1MePatch(
    userUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateSchema** | **UserUpdateSchema**|  | |


### Return type

**UserResponse**

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

