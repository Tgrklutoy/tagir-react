# CatalogApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getItemDetailApiV1ItemsSlugGet**](#getitemdetailapiv1itemsslugget) | **GET** /api/v1/items/{slug} | Get Item Detail|
|[**listCategoriesApiV1CategoriesGet**](#listcategoriesapiv1categoriesget) | **GET** /api/v1/categories | List Categories|
|[**listItemsApiV1ItemsGet**](#listitemsapiv1itemsget) | **GET** /api/v1/items | List Items|
|[**listTagsApiV1TagsGet**](#listtagsapiv1tagsget) | **GET** /api/v1/tags | List Tags|

# **getItemDetailApiV1ItemsSlugGet**
> ItemDetailResponse getItemDetailApiV1ItemsSlugGet()


### Example

```typescript
import {
    CatalogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CatalogApi(configuration);

let slug: string; // (default to undefined)

const { status, data } = await apiInstance.getItemDetailApiV1ItemsSlugGet(
    slug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] |  | defaults to undefined|


### Return type

**ItemDetailResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCategoriesApiV1CategoriesGet**
> CategoryListResponse listCategoriesApiV1CategoriesGet()


### Example

```typescript
import {
    CatalogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CatalogApi(configuration);

const { status, data } = await apiInstance.listCategoriesApiV1CategoriesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CategoryListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listItemsApiV1ItemsGet**
> PaginatedResponseItemListSchema listItemsApiV1ItemsGet()


### Example

```typescript
import {
    CatalogApi,
    Configuration,
    Priceminrub,
    Pricemaxrub
} from './api';

const configuration = new Configuration();
const apiInstance = new CatalogApi(configuration);

let q: string; // (optional) (default to undefined)
let category: string; // (optional) (default to undefined)
let tags: string; // (optional) (default to undefined)
let priceMinRub: Priceminrub; // (optional) (default to undefined)
let priceMaxRub: Pricemaxrub; // (optional) (default to undefined)
let inStock: boolean; // (optional) (default to undefined)
let sort: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let perPage: number; // (optional) (default to 20)

const { status, data } = await apiInstance.listItemsApiV1ItemsGet(
    q,
    category,
    tags,
    priceMinRub,
    priceMaxRub,
    inStock,
    sort,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] |  | (optional) defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **tags** | [**string**] |  | (optional) defaults to undefined|
| **priceMinRub** | **Priceminrub** |  | (optional) defaults to undefined|
| **priceMaxRub** | **Pricemaxrub** |  | (optional) defaults to undefined|
| **inStock** | [**boolean**] |  | (optional) defaults to undefined|
| **sort** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **perPage** | [**number**] |  | (optional) defaults to 20|


### Return type

**PaginatedResponseItemListSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTagsApiV1TagsGet**
> TagListResponse listTagsApiV1TagsGet()


### Example

```typescript
import {
    CatalogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CatalogApi(configuration);

const { status, data } = await apiInstance.listTagsApiV1TagsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TagListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

