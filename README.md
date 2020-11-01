Reflex Studio
-------------------------------
@2020/10/26

Reflex site generators with prebuilt themes


## Starters - 9

- [base theme](./starters/reflex-starter-base), including default homepage, basic page, blog module.
- [business theme](./starters/reflex-starter-biz), business page as default homepage.
- [blog theme](./starters/reflex-starter-blog), simple blog theme.
- [boost theme](./starters/reflex-starter-bost), boost page as default homepage.
- [experience theme](./starters/reflex-starter-expe), experience page as default homepage.
- [hero theme](./starters/reflex-starter-hero), hero page as default homepage.
- [video easy theme](./starters/reflex-starter-vdes), video easy page as default homepage.
- [video rich theme](./starters/reflex-starter-vdrc), video site with different page layout.
- [academy theme](./starters/reflex-starter-acdm), deep customized version of base theme for academy specific purpose including cases/projects and docs module.
- and more...


## Prerequisites

2 tools installed beforehand:

- [node](https://nodejs.org/en/), 
- [yarn command tool](https://yarnpkg.com/getting-started/install) 

then install dependencies by:

```
% yarn
```

## Usage

to start studio:

```
% yarn workspace server start
```

then visit:

http://localhost:3000


## Development

- to start app(frontend) development server:

```
% yarn workspace app start
```

- to build app(frontend) into static folder:

```
% yarn workspace app build
```

- to start one of these themes:

```
% yarn workspace reflex-starter-base start
% yarn workspace reflex-starter-biz start
% yarn workspace reflex-starter-blog start
% yarn workspace reflex-starter-bost start
% yarn workspace reflex-starter-expe start
% yarn workspace reflex-starter-hero start
% yarn workspace reflex-starter-vdes start
% yarn workspace reflex-starter-vdrc start
% yarn workspace reflex-starter-acdm start
```

then visit:

http://localhost:8000