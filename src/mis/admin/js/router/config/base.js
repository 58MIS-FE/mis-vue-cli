/**
 * @description 基本配置
 */

// import ErrorComp from 'Spa@comp/pages/error';
const ErrorComp = () => import(
    /* webpackChunkName: "error-comp" */
    'mis@comp/pages/error'
);

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/error',
        name: 'error',
        component: ErrorComp
    },
    {
        path: '*',
        redirect: '/error'
    }
];
