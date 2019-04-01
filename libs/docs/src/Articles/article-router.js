import sortBy from 'lodash.sortby'

/**
 * Exports utilities for searching a routing tree and retrieving Articles
 */

/**
 * Retrieves an Article from the the RoutingTree
 * @param {string} path Route path to match
 * @param {RoutingTree} node Recursive route node
 * @param {Array<RoutingTree>} parents Stack of route nodes
 * @returns { breadcrumbs: Array<{ title: string, path: string }>, sidebar: Array<{ title: string, path: string }>, main: ReactComponent, title: string, path: string }
 */
export function getArticle(path, node, parents = []) {
  const relativePath = [...parents, node].map(d => d.path).join('')
  if (path === relativePath) {
    return {
      breadcrumbs: getBreadcrumbs(node, parents),
      sidebar: getSidebar(node, parents),
      main: node.component,
      title: node.title,
      path: relativePath,
    }
  } else if (path.startsWith(relativePath) && node.children) {
    for (const child of node.children) {
      const found = getArticle(path, child, [...parents, node])
      if (found) return found
    }
  }
  return false
}

//
// Helpers
//

function getBreadcrumbs(node, parents) {
  return [...parents, node].reduce((acc, d, i, arr) => {
    return [
      ...acc,
      {
        ...d,
        path: `${arr
          .slice(0, i)
          .map(d => d.path)
          .join('')}${d.path}`,
      },
    ]
  }, [])
}

function getSidebar(node, parents) {
  switch (nodeType(node, parents)) {
    case 'parent':
      return getChildLinks(node, parents)
    case 'sibling':
      return getSiblingLinks(node, parents)
    default:
      return []
  }
}

function getChildLinks(node, parents) {
  const links = node.children.map(child => ({
    ...child,
    path: `${[...parents, node].map(d => d.path).join('')}${child.path}`,
    active: node.path === child.path,
  }))
  return node.noSort ? links : sortBy(links, ['title'])
}

function getSiblingLinks(node, parents) {
  const parent = parents[parents.length - 1]
  const links = parent.children.map(child => ({
    ...child,
    path: `${parents.map(d => d.path).join('')}${child.path}`,
    active: node.path === child.path,
  }))
  return parent.noSort ? links : sortBy(links, ['title'])
}

function nodeType(node, parents) {
  if (node.children) return 'parent'
  if (parents.length && parents[parents.length - 1].children) return 'sibling'
  return undefined
}
