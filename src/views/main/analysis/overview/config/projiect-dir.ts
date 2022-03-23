export const project_dir = `
|-- src
    |-- .browserslistrc
    |-- .editorconfig
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc
    |-- auto-imports.d.ts
    |-- babel.config.js
    |-- commitlint.config.js
    |-- components.d.ts
    |-- directoryList.md
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- vue.config.js
    |-- .husky
    |   |-- commit-msg
    |   |-- pre-commit
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.ts
        |-- shims-vue.d.ts
        |-- assets
        |   |-- css
        |   |   |-- base.less
        |   |   |-- index.less
        |   |-- img
        |       |-- login-bg.svg
        |       |-- logo.svg
        |       |-- xiaowang.jpg
        |-- base_ui
        |   |-- breadCrumb
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- breadCrumb.vue
        |   |   |-- type
        |   |       |-- index.ts
        |   |-- card
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- card.vue
        |   |-- code
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- code.vue
        |   |-- count-up
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- countUp.vue
        |   |-- description
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- description.vue
        |   |-- echarts
        |   |   |-- index.ts
        |   |   |-- data
        |   |   |   |-- china.json
        |   |   |-- hooks
        |   |   |   |-- useEcharts.ts
        |   |   |-- src
        |   |       |-- base_echarts.vue
        |   |-- form
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- form.vue
        |   |   |-- type
        |   |       |-- type.ts
        |   |-- tab
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- table.vue
        |   |   |-- type
        |   |       |-- type.ts
        |   |-- text-link
        |       |-- index.ts
        |       |-- src
        |           |-- text-link.vue
        |-- components
        |   |-- nav_header
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- nav_header.vue
        |   |       |-- user_info.vue
        |   |-- nav_menui
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- nav_menu.vue
        |   |-- page-CountUp
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page_countUp.vue
        |   |-- page_content
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page_content.vue
        |   |-- page_echarts
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- bar_echart.vue
        |   |   |   |-- line_echart.vue
        |   |   |   |-- map_echart.vue
        |   |   |   |-- pie_echart.vue
        |   |   |   |-- rose_echart.vue
        |   |   |-- type
        |   |   |   |-- type.ts
        |   |   |-- utils
        |   |       |-- convert-data.ts
        |   |       |-- coordinate-data.ts
        |   |-- page_modal
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page_modal.vue
        |   |-- page_search
        |       |-- index.ts
        |       |-- src
        |           |-- page_search.vue
        |-- global
        |   |-- index.ts
        |   |-- register-properties.ts
        |-- hooks
        |   |-- page-modal-hook.ts
        |   |-- page-permision.ts
        |   |-- page-search-hook.ts
        |-- router
        |   |-- index.ts
        |   |-- main
        |       |-- analysis
        |       |   |-- dashboard
        |       |   |   |-- dashboard.ts
        |       |   |-- overview
        |       |       |-- overview.ts
        |       |-- product
        |       |   |-- category
        |       |   |   |-- category.ts
        |       |   |-- goods
        |       |       |-- goods.ts
        |       |-- story
        |       |   |-- chat
        |       |   |   |-- chat.ts
        |       |   |-- list
        |       |       |-- list.ts
        |       |-- system
        |           |-- department
        |           |   |-- department.ts
        |           |-- menu
        |           |   |-- menu.ts
        |           |-- role
        |           |   |-- role.ts
        |           |-- user
        |               |-- user.ts
        |-- service
        |   |-- request.ts
        |   |-- type.ts
        |   |-- login
        |   |   |-- login.ts
        |   |   |-- type.ts
        |   |-- main
        |   |   |-- analysis
        |   |   |   |-- analysis.ts
        |   |   |-- system
        |   |       |-- system.ts
        |   |-- request
        |       |-- config.ts
        |       |-- index.ts
        |       |-- type.ts
        |-- store
        |   |-- index.ts
        |   |-- type.ts
        |   |-- login
        |   |   |-- login.ts
        |   |   |-- type.ts
        |   |-- main
        |       |-- analysis
        |       |   |-- analysis.ts
        |       |   |-- type.ts
        |       |-- product
        |       |-- system
        |           |-- user
        |               |-- type.ts
        |               |-- user.ts
        |-- utils
        |   |-- cache.ts
        |   |-- formatDate.ts
        |   |-- menuMapRoutes.ts
        |-- views
            |-- login
            |   |-- login.vue
            |   |-- config
            |   |   |-- index.ts
            |   |-- cps
            |       |-- login_count.vue
            |       |-- login_panel.vue
            |       |-- login_phone.vue
            |-- main
            |   |-- main.vue
            |   |-- analysis
            |   |   |-- dashboard
            |   |   |   |-- dashboard.vue
            |   |   |-- overview
            |   |       |-- overview.vue
            |   |       |-- config
            |   |           |-- description.ts
            |   |           |-- index.ts
            |   |           |-- projiect-dir.ts
            |   |           |-- technology-stack.ts
            |   |-- product
            |   |   |-- category
            |   |   |   |-- category.vue
            |   |   |   |-- config.ts
            |   |   |-- goods
            |   |       |-- config.ts
            |   |       |-- goods.vue
            |   |-- story
            |   |   |-- chat
            |   |   |   |-- chat.vue
            |   |   |-- list
            |   |       |-- config.ts
            |   |       |-- list.vue
            |   |-- system
            |       |-- department
            |       |   |-- config.ts
            |       |   |-- department.vue
            |       |-- menu
            |       |   |-- config.ts
            |       |   |-- menu.vue
            |       |-- role
            |       |   |-- config.ts
            |       |   |-- role.vue
            |       |-- user
            |           |-- config.ts
            |           |-- user.vue
            |-- not_found
                |-- not_found.vue

`;
