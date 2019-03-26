import { getArticle } from './article-router'

describe('getArticle', () => {
  it('finds articles in the routing tree ', () => {
    expect(getArticle('/a', routes())).toBeDefined()
    expect(getArticle('/a/b', routes())).toBeDefined()
    expect(getArticle('/a/c', routes())).toBeDefined()
    expect(getArticle('/a/c/d', routes())).toBeDefined()
    expect(getArticle('/a/c/d/f', routes())).toBeDefined()
    expect(getArticle('/a/c/e', routes())).toBeDefined()
    expect(getArticle('/a/z', routes())).toBeFalsy()
    expect(getArticle('/z', routes())).toBeFalsy()
  })

  it('returns node with complete relative path', () => {
    expect(getArticle('/a/b', routes()).path).toBe('/a/b')
  })

  it('returns breadcrumbs', () => {
    const { breadcrumbs } = getArticle('/a/b', routes())
    expect(breadcrumbs.length).toBe(2)
    expect(breadcrumbs[0].path).toBe('/a')
    expect(breadcrumbs[1].path).toBe('/a/b')
    expect(breadcrumbs[0].title).toBe('A_TITLE')
    expect(breadcrumbs[1].title).toBe('B_TITLE')
  })

  describe('when child nodes present', () => {
    it('returns a sidebar of child routes', () => {
      const { sidebar } = getArticle('/a/c', routes())
      expect(sidebar.length).toBe(3)
      expect(sidebar.map(d => d.path)).toContain('/a/c/d')
      expect(sidebar.map(d => d.path)).toContain('/a/c/e')
    })
    it('sorts the links', () => {
      const { sidebar } = getArticle('/a', routes())
      expect(sidebar[0].title).toBe('B_TITLE')
      expect(sidebar[1].title).toBe('C_TITLE')
    })
  })

  describe('when child nodes are not present', () => {
    it('returns a sidebar of siblings', () => {
      const { sidebar } = getArticle('/a/c/e', routes())
      expect(sidebar.length).toBe(3)
      expect(sidebar.map(d => d.title)).toContain('D_TITLE')
      expect(sidebar.map(d => d.title)).toContain('E_TITLE')
    })
    it('sorts the links', () => {
      const { sidebar } = getArticle('/a/c/e', routes())
      expect(sidebar[0].title).toBe('AAA')
    })
  })
})

function routes() {
  return {
    title: 'A_TITLE',
    path: '/a',
    component: 'A_COMPONENT',
    children: [
      {
        title: 'C_TITLE',
        path: '/c',
        component: 'C_COMPONENT',
        children: [
          {
            title: 'D_TITLE',
            path: '/d',
            component: 'D_COMPONENT',
            children: [
              {
                title: 'F_TITLE',
                path: '/f',
                component: 'F_COMPONENT',
              },
            ],
          },
          {
            title: 'E_TITLE',
            path: '/e',
            component: 'E_COMPONENT',
          },
          {
            title: 'AAA',
            path: '/aaa',
            component: 'AAA_COMPONENT',
          },
        ],
      },
      {
        title: 'B_TITLE',
        path: '/b',
        component: 'B_COMPONENT',
      },
    ],
  }
}
