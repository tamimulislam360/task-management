import { types } from "mobx-state-tree";

export const Task = types.model({
  id: types.identifier,
  title: types.string,
  description: types.string,
  status: types.string,
});
