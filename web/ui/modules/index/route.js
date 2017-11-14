import Index from './index';

export default [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        path: '*',
        redirect: {name: 'index'}
    }
]