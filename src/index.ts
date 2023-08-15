import timezones from "./timezones.json";

interface TimeZone {
  label: string;
  tzCode: string;
  name: string;
  utc: string;
  utcOffset: number;
}

export { TimeZone };
export default timezones as TimeZone[];
