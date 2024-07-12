# Typescript Open Api Client for the Optix Api

Generated with <https://openapi-ts.dev/introduction>

## Generating the types

- download the swagger.json file from <https://publicapi.optix.co.uk/swagger/v1/swagger.json> from the api to ./swagger.json
- `npx openapi-typescript ./swagger.json -o ./generated.d.ts`

## Running the tests

- add a file called `.env` to the root of the project with the following contents:

```
OPTIX_API_KEY="<your api key>"
```


## TODOs

- [ ]  make default page size of 100
