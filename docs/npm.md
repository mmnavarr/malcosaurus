---
id: npm_cheatsheet
title: NPM Cheatsheet
---

This cheatsheet includes `npm` commands and other useful shortcuts & flags that can be used to perform day to day actions.

## Package Installation
Install a package to `node_modules` and also update `package.json` with the installed version and package name.

```
npm install <module-name> --save
```

Install a package to `node_modules` and also update `package.json` with the **exact installed version** and package name
```
npm install <module-name> --save-dev
```

Set `--save` as a default for npm install
```
npm config set save true
```

[Install](https://docs.npmjs.com/cli/install "https://docs.npmjs.com/cli/install") all packages in the local node_modules folder. (Either works)
```
npm install
```
```
npm i
```

[Clean install](https://docs.npmjs.com/cli/ci.html "https://docs.npmjs.com/cli/ci.html") of all packages in the local node_modules folder
(If `node_modules` exists, removed before `npm ci`. Doesn’t write to package.json)
```
npm clean-install
```
```
npm ci
```

### Install a Specific Tag
A tag can be used when installing packages as a reference to a version instead of using a specific version number:

```
npm install <name>@<tag>
``````
```
npm install react@next
```
This also applies to npm dedupe.

### Uninstall package (dependency)
```
npm uninstall <module-name>
```
```
npm un <module-name>
```

## What is a package, actually?

A package is:

1) A folder containing a program described by a `package.json` file

2) A gzipped tarball containing (a)

3) A url that resolves to (b)

4) A `<name>@<version>` that is published on the registry (see `npm-registry`) with (c)

5) A `<name>@<tag>` (see` npm-dist-tag`) that points to (d)

6) A `<name>` that has a “latest” tag satisfying (e)

7) A `<git remote url> `that resolves to (a)




## Package Information

List packages used by the applic­ation no depend­encies
```
npm ls — depth 0
```

Go to package repository (useful for reading documentation on how to use the npm package)
```
npm repo <module-name>
```

See package information on the command line *(My personal favorite)
```
npm info <module-name>
```
```
npm view <module-name>
```

See what version of a package the current working directory has
```
npm show <module-­nam­e> version
```

Search for a package
```
npm search <module-name>
```

##  Miscellaneous Package Management

Remove duplicates of referenced packages
```
npm dedupe
```

Removes packages that are installed but not listed in the package.json
```
npm prune
```


## Publishing & Versioning

For a deeper understanding of semantic versioning see: [https://semver.org/](https://semver.org/ "https://semver.org/")
**Patch** upgrade to the current version of the npm package (1.0.1 → 1.0.2)
```
npm version patch
```

**Minor** upgrade to the current version of the npm package (1.0.0 → 1.1.0)
```
npm version minor
```

**Major** upgrade to the current version of the npm package (1.0.0 → 2.0.0)
```
npm version major
```

Publish a package to the npm registry. This is generally executed after patch/minor/major upgrades (see above) so the package can be updated in the registry. (Default @latest tag)
```
npm publish
```

Publish a package to the npm registry **not under the default “latest” tag**. This can be used for prerelease versions like alpha/beta, etc.
```
npm publish --tag beta
```

_*By default, other than latest, no tag has any special significance to npm itself.*_

## NPM Itself

Update the global npm version
```
npm update npm -g
```

Update the global npm version if you’re on good ole’ Windows (can't confirm - I'm a mac guy but this was in their documentation)
```
npm-windows-upgrade
```

Tool to manipulate the local package cache (use in the event of weird node_modules issues)
```
npm cache clean
```

Execute package from the local node_modules in the command line. (In case you don't want to install something globally or need to use it locally.)
```
npx <module-name>
```

Fun fact:

Since npm was originally designed for node packages, the npm start command will automatically run the server.js file hence why you do not need to specify which file/script you want to run.

##

Easter Eggs

```
npm xmas
```

```
npm substack
```


```
npm visnup
```

Enjoy!