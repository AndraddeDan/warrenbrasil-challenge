import { OverlayData } from "./overlay-data";

export type OverlayInterface<T, P> = Omit<OverlayData<T, P>, "content">;
