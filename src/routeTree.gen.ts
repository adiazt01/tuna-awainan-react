/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as ExpertoIntroExpertoImport } from './routes/experto/introExperto'
import { Route as ArticlesIntroArticlesImport } from './routes/articles/introArticles'
import { Route as ExpertoPostIndexImport } from './routes/experto/post/index'
import { Route as AuthRegisterIndexImport } from './routes/auth/register/index'
import { Route as AuthLoginIndexImport } from './routes/auth/login/index'
import { Route as ArticlesCategoryIndexImport } from './routes/articles/category/index'
import { Route as ExpertoPostNewImport } from './routes/experto/post/new'
import { Route as ExpertoPostPostidIndexImport } from './routes/experto/post/$postid/index'
import { Route as ArticlesCategoryCategoryidIndexImport } from './routes/articles/category/$categoryid/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const ExpertoIntroExpertoRoute = ExpertoIntroExpertoImport.update({
  id: '/experto/introExperto',
  path: '/experto/introExperto',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesIntroArticlesRoute = ArticlesIntroArticlesImport.update({
  id: '/articles/introArticles',
  path: '/articles/introArticles',
  getParentRoute: () => rootRoute,
} as any)

const ExpertoPostIndexRoute = ExpertoPostIndexImport.update({
  id: '/experto/post/',
  path: '/experto/post/',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterIndexRoute = AuthRegisterIndexImport.update({
  id: '/auth/register/',
  path: '/auth/register/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginIndexRoute = AuthLoginIndexImport.update({
  id: '/auth/login/',
  path: '/auth/login/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesCategoryIndexRoute = ArticlesCategoryIndexImport.update({
  id: '/articles/category/',
  path: '/articles/category/',
  getParentRoute: () => rootRoute,
} as any)

const ExpertoPostNewRoute = ExpertoPostNewImport.update({
  id: '/experto/post/new',
  path: '/experto/post/new',
  getParentRoute: () => rootRoute,
} as any)

const ExpertoPostPostidIndexRoute = ExpertoPostPostidIndexImport.update({
  id: '/experto/post/$postid/',
  path: '/experto/post/$postid/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesCategoryCategoryidIndexRoute =
  ArticlesCategoryCategoryidIndexImport.update({
    id: '/articles/category/$categoryid/',
    path: '/articles/category/$categoryid/',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/introArticles': {
      id: '/articles/introArticles'
      path: '/articles/introArticles'
      fullPath: '/articles/introArticles'
      preLoaderRoute: typeof ArticlesIntroArticlesImport
      parentRoute: typeof rootRoute
    }
    '/experto/introExperto': {
      id: '/experto/introExperto'
      path: '/experto/introExperto'
      fullPath: '/experto/introExperto'
      preLoaderRoute: typeof ExpertoIntroExpertoImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/experto/post/new': {
      id: '/experto/post/new'
      path: '/experto/post/new'
      fullPath: '/experto/post/new'
      preLoaderRoute: typeof ExpertoPostNewImport
      parentRoute: typeof rootRoute
    }
    '/articles/category/': {
      id: '/articles/category/'
      path: '/articles/category'
      fullPath: '/articles/category'
      preLoaderRoute: typeof ArticlesCategoryIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/login/': {
      id: '/auth/login/'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/register/': {
      id: '/auth/register/'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterIndexImport
      parentRoute: typeof rootRoute
    }
    '/experto/post/': {
      id: '/experto/post/'
      path: '/experto/post'
      fullPath: '/experto/post'
      preLoaderRoute: typeof ExpertoPostIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/category/$categoryid/': {
      id: '/articles/category/$categoryid/'
      path: '/articles/category/$categoryid'
      fullPath: '/articles/category/$categoryid'
      preLoaderRoute: typeof ArticlesCategoryCategoryidIndexImport
      parentRoute: typeof rootRoute
    }
    '/experto/post/$postid/': {
      id: '/experto/post/$postid/'
      path: '/experto/post/$postid'
      fullPath: '/experto/post/$postid'
      preLoaderRoute: typeof ExpertoPostPostidIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/articles/introArticles': typeof ArticlesIntroArticlesRoute
  '/experto/introExperto': typeof ExpertoIntroExpertoRoute
  '/about': typeof AboutIndexRoute
  '/experto/post/new': typeof ExpertoPostNewRoute
  '/articles/category': typeof ArticlesCategoryIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/register': typeof AuthRegisterIndexRoute
  '/experto/post': typeof ExpertoPostIndexRoute
  '/articles/category/$categoryid': typeof ArticlesCategoryCategoryidIndexRoute
  '/experto/post/$postid': typeof ExpertoPostPostidIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/articles/introArticles': typeof ArticlesIntroArticlesRoute
  '/experto/introExperto': typeof ExpertoIntroExpertoRoute
  '/about': typeof AboutIndexRoute
  '/experto/post/new': typeof ExpertoPostNewRoute
  '/articles/category': typeof ArticlesCategoryIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/register': typeof AuthRegisterIndexRoute
  '/experto/post': typeof ExpertoPostIndexRoute
  '/articles/category/$categoryid': typeof ArticlesCategoryCategoryidIndexRoute
  '/experto/post/$postid': typeof ExpertoPostPostidIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/articles/introArticles': typeof ArticlesIntroArticlesRoute
  '/experto/introExperto': typeof ExpertoIntroExpertoRoute
  '/about/': typeof AboutIndexRoute
  '/experto/post/new': typeof ExpertoPostNewRoute
  '/articles/category/': typeof ArticlesCategoryIndexRoute
  '/auth/login/': typeof AuthLoginIndexRoute
  '/auth/register/': typeof AuthRegisterIndexRoute
  '/experto/post/': typeof ExpertoPostIndexRoute
  '/articles/category/$categoryid/': typeof ArticlesCategoryCategoryidIndexRoute
  '/experto/post/$postid/': typeof ExpertoPostPostidIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/articles/introArticles'
    | '/experto/introExperto'
    | '/about'
    | '/experto/post/new'
    | '/articles/category'
    | '/auth/login'
    | '/auth/register'
    | '/experto/post'
    | '/articles/category/$categoryid'
    | '/experto/post/$postid'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/articles/introArticles'
    | '/experto/introExperto'
    | '/about'
    | '/experto/post/new'
    | '/articles/category'
    | '/auth/login'
    | '/auth/register'
    | '/experto/post'
    | '/articles/category/$categoryid'
    | '/experto/post/$postid'
  id:
    | '__root__'
    | '/'
    | '/articles/introArticles'
    | '/experto/introExperto'
    | '/about/'
    | '/experto/post/new'
    | '/articles/category/'
    | '/auth/login/'
    | '/auth/register/'
    | '/experto/post/'
    | '/articles/category/$categoryid/'
    | '/experto/post/$postid/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ArticlesIntroArticlesRoute: typeof ArticlesIntroArticlesRoute
  ExpertoIntroExpertoRoute: typeof ExpertoIntroExpertoRoute
  AboutIndexRoute: typeof AboutIndexRoute
  ExpertoPostNewRoute: typeof ExpertoPostNewRoute
  ArticlesCategoryIndexRoute: typeof ArticlesCategoryIndexRoute
  AuthLoginIndexRoute: typeof AuthLoginIndexRoute
  AuthRegisterIndexRoute: typeof AuthRegisterIndexRoute
  ExpertoPostIndexRoute: typeof ExpertoPostIndexRoute
  ArticlesCategoryCategoryidIndexRoute: typeof ArticlesCategoryCategoryidIndexRoute
  ExpertoPostPostidIndexRoute: typeof ExpertoPostPostidIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ArticlesIntroArticlesRoute: ArticlesIntroArticlesRoute,
  ExpertoIntroExpertoRoute: ExpertoIntroExpertoRoute,
  AboutIndexRoute: AboutIndexRoute,
  ExpertoPostNewRoute: ExpertoPostNewRoute,
  ArticlesCategoryIndexRoute: ArticlesCategoryIndexRoute,
  AuthLoginIndexRoute: AuthLoginIndexRoute,
  AuthRegisterIndexRoute: AuthRegisterIndexRoute,
  ExpertoPostIndexRoute: ExpertoPostIndexRoute,
  ArticlesCategoryCategoryidIndexRoute: ArticlesCategoryCategoryidIndexRoute,
  ExpertoPostPostidIndexRoute: ExpertoPostPostidIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/articles/introArticles",
        "/experto/introExperto",
        "/about/",
        "/experto/post/new",
        "/articles/category/",
        "/auth/login/",
        "/auth/register/",
        "/experto/post/",
        "/articles/category/$categoryid/",
        "/experto/post/$postid/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/articles/introArticles": {
      "filePath": "articles/introArticles.tsx"
    },
    "/experto/introExperto": {
      "filePath": "experto/introExperto.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/experto/post/new": {
      "filePath": "experto/post/new.tsx"
    },
    "/articles/category/": {
      "filePath": "articles/category/index.tsx"
    },
    "/auth/login/": {
      "filePath": "auth/login/index.tsx"
    },
    "/auth/register/": {
      "filePath": "auth/register/index.tsx"
    },
    "/experto/post/": {
      "filePath": "experto/post/index.tsx"
    },
    "/articles/category/$categoryid/": {
      "filePath": "articles/category/$categoryid/index.tsx"
    },
    "/experto/post/$postid/": {
      "filePath": "experto/post/$postid/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
