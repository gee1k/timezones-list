# timezones-list

This package contains an array of timezones based on conventional options.

It does not follow any complete data set, but it contains almost all basic timezones. And all names are according to the tz format: [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

The fields in the array are as follows:

- `label` a string label which contains the UTC with the `tz` code of a timezone
- `tzCode` contains the `tz` codes
- `name` contains the descriptive name of the timezone with UTC offset
- `utc` contains only the UTC of a timezone
- `utcOffset` contains the `timezone Offset`

## Install

```bash
npm install @isvend/timezones-list --save

# or

yarn add @isvend/timezones-list
```

## Example

```javascript
import timezones from "@isvend/timezones-list";

// or

var timezones = require("@isvend/timezones-list");
```
