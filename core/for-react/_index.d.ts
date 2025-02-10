interface BridgeProps {
  _props: any
  connector: any
  root?: any
  update?: (props: any) => void
}

interface CreateBridgeOptions {
  target?: 'v2' | 'v3'
  render: (elementId: string, props: BridgeProps) => any
}

export function createReactBridge(
  vue: any,
  render: (elementId: string, ref: BridgeProps) => any,
  target?: 'v2' | 'v3'
): (component: any) => any

export function createVueBridge(
  vue3: any,
  render: (elementId: string, ref: BridgeProps) => any
): (component: any) => any
