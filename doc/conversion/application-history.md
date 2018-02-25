# Application History Conversion


### History Note Create

| Route | Method | Fill in Response Document |
|---|---|---|
| `/appliction/:id/history` | POST | No |

#### Conversion

*NOTE*

This needs to be a service so it is re-useable and mockable. Please ensure this route method calls the service and the service is unit tested.

Must save the history note using the dao.v8.ApplicationHistory object, you will need to fill in the ramaining data slots.

There are defaults, please see API Spec.

Required fields for validation are:

ApplicationContainerID: from the route
Comments: from the body

There are several fields to ensure are set...

ApplicationContainerID : from the route.
Active: default to true

Remaining see the README in the conversion folder for general fields.


