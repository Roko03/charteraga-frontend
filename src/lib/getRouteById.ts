import { RouteType } from "@/types/types";
import path from "path";
import { promises as fs } from "fs";

export async function getRouteById(id: string): Promise<RouteType> {
    const filePath = path.join(process.cwd(), "/charteraga.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    const dataArray: RouteType[] = data.routes

    return dataArray.find(route => route.id == Number(id)) as RouteType
}