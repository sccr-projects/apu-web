export interface PaneData {
  id: string;
  title: string;
  html: string;
}

export interface NavLeaf {
  type: "leaf";
  label: string;
  paneId: string;
}

export interface NavParent {
  type: "parent";
  label: string;
  paneId: string;
  expanded: boolean;
  children: NavLeaf[];
}

export type NavEntry = NavLeaf | NavParent;

export interface ProgramContent {
  name: string;
  nav: NavEntry[];
  panes: PaneData[];
}
