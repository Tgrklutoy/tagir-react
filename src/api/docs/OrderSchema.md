# OrderSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**subtotalRub** | **string** |  | [default to undefined]
**deliveryRub** | **string** |  | [default to undefined]
**totalRub** | **string** |  | [default to undefined]
**placedAt** | **string** |  | [default to undefined]
**items** | [**Array&lt;OrderItemSchema&gt;**](OrderItemSchema.md) |  | [default to undefined]
**delivery** | [**OrderDeliverySchema**](OrderDeliverySchema.md) |  | [default to undefined]
**contact** | [**OrderContactSchema**](OrderContactSchema.md) |  | [default to undefined]
**events** | [**Array&lt;OrderEventSchema&gt;**](OrderEventSchema.md) |  | [default to undefined]

## Example

```typescript
import { OrderSchema } from './api';

const instance: OrderSchema = {
    id,
    status,
    subtotalRub,
    deliveryRub,
    totalRub,
    placedAt,
    items,
    delivery,
    contact,
    events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
