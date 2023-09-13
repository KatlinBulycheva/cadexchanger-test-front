import { IInitialStore } from "../models/StoreTypes";
import { HEIGHT, RADIUS, SEGMENTS } from "../utils/constants";

export const initState: IInitialStore = {
  cone: {
    [HEIGHT]: 2,
    [RADIUS]: 1,
    [SEGMENTS]: 10,
  },
};
