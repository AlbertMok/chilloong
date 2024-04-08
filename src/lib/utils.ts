import clsx from "clsx";
import { ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDay(date: string) {
  return dayjs(date).format("YYYY-MM-DD");
}
