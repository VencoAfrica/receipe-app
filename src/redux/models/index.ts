import { Models } from "@rematch/core";
import { Receipe } from "./Receipe";

export interface RootModel extends Models<RootModel> {
  Receipe: typeof Receipe;
}

export const models: RootModel = { Receipe };
