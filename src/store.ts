import { createContext } from "react";
import { observable, action, computed } from "mobx";

export interface itemType {
  name: string;
  isDone: boolean;
  ID: number;
}
export type FilterType = "All" | "Done" | "Undone";

class Store {
  @observable lastId: number = 1;

  @observable items: Array<itemType> = [];

  @observable filter: FilterType = "All";

  @action
  addTask(task: string): void {
    this.items = [...this.items, { name: task, isDone: false, ID: this.lastId }];
    this.lastId = this.lastId + 1;
  }

  @action
  toggleDone(id: number): void {
    this.items = this.items.map((item) => (item.ID === id ? { ...item, isDone: !item.isDone } : item));
  }

  @action
  deleteItem(id: number): void {
    this.items = this.items.filter((item) => item.ID !== id);
  }

  @action
  changeFilter(newFilter: FilterType): void {
    this.filter = newFilter;
  }

  @computed
  get filteredItems(): itemType[] {
    return this.items.filter((item) =>
      this.filter === "All"
        ? true
        : this.filter === "Done" && item.isDone === true
        ? true
        : this.filter === "Undone" && item.isDone === false
    );
  }
}

export default createContext<Store>(new Store());
