import { renderElementOrComponent } from './renderElementOrComponent'

/**
 * Returns the 1st truthy renderable
 * @param  {...any} renderables React node or Component
 */
export function renderOne(...renderables) {
  for (const renderable of renderables) {
    if (renderable) return renderElementOrComponent(renderable)
  }
  return null
}
