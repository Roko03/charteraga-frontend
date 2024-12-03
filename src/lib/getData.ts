import { RouteType } from "@/types/types";
import path from "path";
import { promises as fs } from "fs";

export async function getData(): Promise<RouteType[]> {
    const filePath = path.join(process.cwd(), "/charteraga.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    return data.routes as RouteType[]
}