export namespace ModuleLoaders{
  export const landingLoader = () => import(
    /* webpackChunkName: "Landing" */
    /* webpackPrefetch: true */
    './components/Landing');
  
  export const dummyLoader = () => import(
    /* webpackChunkName: "Dummy" */
    /* webpackPrefetch: true */
    './components/Dummy');
}