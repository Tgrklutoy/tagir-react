# ItemListSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**slug** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**shortDescription** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**mainImageUrl** | **string** |  | [optional] [default to undefined]
**minPriceRub** | **string** |  | [default to undefined]
**maxPriceRub** | **string** |  | [default to undefined]
**hasStock** | **boolean** |  | [default to undefined]
**categorySlugs** | **Array&lt;string&gt;** |  | [default to undefined]
**tagSlugs** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { ItemListSchema } from './api';

const instance: ItemListSchema = {
    id,
    slug,
    title,
    shortDescription,
    isActive,
    mainImageUrl,
    minPriceRub,
    maxPriceRub,
    hasStock,
    categorySlugs,
    tagSlugs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
