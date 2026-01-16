# CartSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**items** | [**Array&lt;CartItemSchema&gt;**](CartItemSchema.md) |  | [default to undefined]
**totals** | [**CartTotalsSchema**](CartTotalsSchema.md) |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { CartSchema } from './api';

const instance: CartSchema = {
    id,
    items,
    totals,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
