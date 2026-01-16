# MagicConsumeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** |  | [default to undefined]
**refreshToken** | **string** |  | [default to undefined]
**user** | [**UserSchema**](UserSchema.md) |  | [default to undefined]
**flowContext** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**cart** | [**CartSchema**](CartSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MagicConsumeResponse } from './api';

const instance: MagicConsumeResponse = {
    accessToken,
    refreshToken,
    user,
    flowContext,
    cart,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
