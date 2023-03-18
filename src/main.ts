import app from './app';

export const root = document.getElementById('app') as HTMLDivElement;

document.addEventListener('DOMContentLoaded', () => new app(root));
