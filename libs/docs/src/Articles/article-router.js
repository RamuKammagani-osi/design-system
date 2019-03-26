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
        title: d.title,
        path: `${arr
          .slice(0, i)
          .map(d => d.path)
          .join('')}${d.path}`,
      },
    ]
  }, [])
}

function getChildLinks(node, parents) {
  return node.children.map(child => ({
    title: child.title,
    path: `${[...parents, node].map(d => d.path).join('')}${child.path}`,
    active: node.path === child.path,
  }))
}

function getSiblingLinks(node, parents) {
  return parents[parents.length - 1].children.map(child => ({
    title: child.title,
    path: `${parents.map(d => d.path).join('')}${child.path}`,
    active: node.path === child.path,
  }))
}

function getSidebar(node, parents) {
  const sidebarlinks = (() => {
    if (node.children) {
      return getChildLinks(node, parents)
    } else if (parents.length && parents[parents.length - 1].children) {
      return getSiblingLinks(node, parents)
    }
    return []
  })()
  return sortBy(sidebarlinks, ['title'])
}
