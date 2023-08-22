import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function mg(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}