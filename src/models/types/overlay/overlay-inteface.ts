import { OverlayData } from "./overlay-data";

export type OverlayInterface<T> = Omit<OverlayData<T>, "content">;
