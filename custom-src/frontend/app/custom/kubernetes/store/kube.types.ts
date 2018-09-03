export interface KubernetesInfo {
  nodes: {};
  pods: {};
}

export const KubernetesDefaultState = {
  pods: {},
  namespaces: {},
  nodes: {}
};

export interface KubernetesNode {
  node: any;
  id: string;
}
export interface KubernetesPod {
  node: any;
  id: string;
}
