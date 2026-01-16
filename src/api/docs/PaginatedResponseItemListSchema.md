# PaginatedResponseItemListSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;ItemListSchema&gt;**](ItemListSchema.md) |  | [default to undefined]
**page** | **number** |  | [optional] [default to 1]
**perPage** | **number** |  | [optional] [default to 20]
**total** | **number** |  | [default to undefined]
**totalPages** | **number** |  | [default to undefined]

## Example

```typescript
import { PaginatedResponseItemListSchema } from './api';

const instance: PaginatedResponseItemListSchema = {
    data,
    page,
    perPage,
    total,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
