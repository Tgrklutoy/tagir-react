# LikesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addLikeApiV1MeLikesItemIdPost**](#addlikeapiv1melikesitemidpost) | **POST** /api/v1/me/likes/{item_id} | Add Like|
|[**deleteLikeApiV1MeLikesItemIdDelete**](#deletelikeapiv1melikesitemiddelete) | **DELETE** /api/v1/me/likes/{item_id} | Delete Like|
|[**listLikesApiV1MeLikesGet**](#listlikesapiv1melikesget) | **GET** /api/v1/me/likes | List Likes|

# **addLikeApiV1MeLikesItemIdPost**
> any addLikeApiV1MeLikesItemIdPost()


### Example

```typescript
import {
    LikesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LikesApi(configuration);

let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.addLikeApiV1MeLikesItemIdPost(
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **deleteLikeApiV1MeLikesItemIdDelete**
> any deleteLikeApiV1MeLikesItemIdDelete()


### Example

```typescript
import {
    LikesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LikesApi(configuration);

let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteLikeApiV1MeLikesItemIdDelete(
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **listLikesApiV1MeLikesGet**
> PaginatedResponseItemListSchema listLikesApiV1MeLikesGet()


### Example

```typescript
import {
    LikesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LikesApi(configuration);

let page: number; // (optional) (default to 1)
let perPage: number; // (optional) (default to 20)

const { status, data } = await apiInstance.listLikesApiV1MeLikesGet(
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

**PaginatedResponseItemListSchema**

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

