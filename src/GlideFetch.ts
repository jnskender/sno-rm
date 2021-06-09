import { nowUrl, nowUsername, nowPassword } from "./now-config";
import fetch from "cross-fetch";
export class GlideFetch {
  table;
  baseUrl = nowUrl;
  constructor(table: string) {
    this.table = table;
  }

  async select(columns: Array<string>) {
    const cleanedColumns = columns.join(",");
    try {
      const res = await fetch(
        `https://${this.baseUrl}/api/now/table/${this.table}?sysparm_limit=1&sysparm_fields=${cleanedColumns}`,
        {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(nowUsername + ":" + nowPassword).toString("base64"),
            Accept: "application/json",
          },
        }
      );
      if (res.status >= 400) {
        throw new Error(res.status.toString());
      }
      const { result } = await res.json();
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
