import { init, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

export default init({
  models,
  redux: {
    rootReducers: { RESET_APP: () => undefined },
  },
});

export type RootState = RematchRootState<RootModel>;
