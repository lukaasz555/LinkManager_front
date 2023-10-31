export type TableHeader<T, K = ""> = {
  key: keyof T | "action" | K;
  value?: (item: Record<string, any>, fallback?: any) => any;
  title: string;
  colspan?: number;
  rowspan?: number;
  fixed?: boolean;
  align?: "start" | "end" | "center";
  width?: number | string;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  sort?: (a: T, b: T) => number;
};
