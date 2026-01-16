# ItemDetailSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**slug** | **string** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**brand** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**categories** | [**Array&lt;CategorySchema&gt;**](CategorySchema.md) |  | [default to undefined]
**tags** | [**Array&lt;TagSchema&gt;**](TagSchema.md) |  | [default to undefined]
**images** | [**Array&lt;ItemImageSchema&gt;**](ItemImageSchema.md) |  | [default to undefined]
**variants** | [**Array&lt;VariantSchema&gt;**](VariantSchema.md) |  | [default to undefined]

## Example

```typescript
import { ItemDetailSchema } from './api';

const instance: ItemDetailSchema = {
    id,
    slug,
    title,
    description,
    brand,
    isActive,
    categories,
    tags,
    images,
    variants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
