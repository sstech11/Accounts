import { JsonValue } from "type-fest";

export type Reports = {
  createdAt: Date;
  id: string;
  reportContent: JsonValue;
  reportType: string | null;
  updatedAt: Date;
};
