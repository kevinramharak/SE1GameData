declare module 'vue' {
  export interface ComponentCustomProperties {
    $params: Record<string, string>;
  }
}

export {};
