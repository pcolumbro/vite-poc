# React + TypeScript + Vite + Redux Toolkit

hosted on [Cloudflare Pages](https://vite-poc.pages.dev/)


1. [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
2. [When to use Redux blogpost](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)
3. [Reddit post from Redux Maintainer](https://www.reddit.com/r/reactjs/comments/z4y7sj/comment/ixtfehr/?utm_source=share&utm_medium=web2x&context=3)
4. [Code splitting RTK query](https://redux-toolkit.js.org/rtk-query/usage/code-splitting)
5. [Tao of Redux](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)


# Redux Selectors

## Introduction

Selectors in Redux serve as functions that extract specific pieces of data from the Redux store state. Utilizing selectors and incorporating them into `useAppSelector` provides a range of benefits in Redux-based applications.

## Benefits of Using Selectors

### 1. Encapsulation

- **Abstracting State Shape**
  - Selectors abstract away the shape of the state, making it possible to alter the structure of your state with updates centralized in selectors, rather than across numerous components.

- **Reusable Logic**
  - By defining logic for data access in selectors, you ensure consistency and avoid redundancy in how state is accessed throughout your application.

### 2. Computations and Memoization

- **Compute Derived Data**
  - Selectors can derive data, enabling Redux to store the minimal viable state, with additional properties computed as needed.

- **Memoization**
  - Libraries like `reselect` help selectors to memoize computed data, optimizing performance by avoiding unnecessary recalculations and re-renders.

### 3. Type Safety (with TypeScript)

- **Type-Checked State**
  - Utilizing TypeScript with selectors ensures type-checked state access and manipulation, safeguarding against type errors.

### 4. Testing

- **Easier Testing**
  - Pure functions of selectors allow for straightforward testing, with predictable outputs for provided inputs.
