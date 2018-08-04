# ecolines

**JavaScript client for the [Ecolines](https://ecolines.net) API.** Complies with the [friendly public transport format](https://github.com/public-transport/friendly-public-transport-format). Inofficial, using endpoints by *Ecolines*. Ask them for permission before using this module in production.


[![npm version](https://img.shields.io/npm/v/@juliuste/ecolines.svg)](https://www.npmjs.com/package/@juliuste/ecolines)
[![build status](https://img.shields.io/travis/juliuste/ecolines.svg)](https://travis-ci.org/juliuste/ecolines)
![ISC-licensed](https://img.shields.io/github/license/juliuste/ecolines.svg)
[![fptf version](https://fptf.badges.juliustens.eu/badge/juliuste/ecolines)](https://fptf.badges.juliustens.eu/link/juliuste/ecolines)
[![chat on gitter](https://badges.gitter.im/public-transport.svg)](https://gitter.im/public-transport)

Things still missing:

- [routes](https://github.com/public-transport/friendly-public-transport-format/blob/master/docs/readme.md#route), [schedules](https://github.com/public-transport/friendly-public-transport-format/blob/master/docs/readme.md#schedule) from [this gist](https://gist.github.com/juliuste/c76db8e9216b686b0262857cc9abd16e)

## Installing

```shell
npm install @juliuste/ecolines
```

## Usage

```js
const ecolines = require('@juliuste/ecolines')
```

This package contains data in the [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format) and provides the following methods:

- [`stations()`](docs/stations.md) to get a list of operated stations, such as `Riga (bus station)`, `Berlin` or `Warsaw 01 (Zachodnia)`.
- [`regions()`](docs/regions.md) to get a list of all operated regions (cities) such as `Riga`, `Berlin` or `Warsaw`.
- [`stopovers(station, opt = {})`](docs/stopovers.md) to get a list of stopovers (departures / arrivals) at a given station (at a given date).
- [`journeys(origin, destination, opt = {})`](docs/journeys.md) to get a list of journeys between given origin and destination.
- [`legDetails(legId)`](docs/legDetails.md) to get details (such as stopovers) for a given journey leg discovered using the `journeys` method.
- [`currencies()`](docs/currencies.md) to get a list of supported [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency codes such as `EUR` or `PLN`.

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/juliuste/ecolines/issues).
