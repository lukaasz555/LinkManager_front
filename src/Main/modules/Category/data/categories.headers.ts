import { TableHeader } from "@/Global/types/TableHeader";
import { Category } from "@/Main/models/Category";
import i18n from "@/plugins/i18n";

export const categoriesHeaders: TableHeader<Category> = [
  {
    title: String(i18n.global.t("Category name")),
    key: "name",
    align: "start",
  },
  {
    title: "",
    key: "color",
    align: "center",
    sortable: false,
    width: 100,
  },
  {
    title: "",
    value: (item: Record<string, any>) => item.id,
    key: "action",
    align: "end",
    sortable: false,
    width: 100,
  },
];
