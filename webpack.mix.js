let mix = require('laravel-mix');

mix
    .copy('src/index.html', 'dist/')
    .copy('src/img/', 'dist/img/')
    .postCss('src/css/style.css', 'dist/css/', [
        require('tailwindcss'),
    ]);
