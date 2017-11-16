# Mithril-Portal

Mithril component for rendering inline children to document.body

## Why

Mithril-portal mounts a component/children to a `div` that is appended to `document.body`. This is useful for UI related components such as modals, popovers, dropdowns, etc. where rendering inline would cause css overflow/z-index issues.

## Installation

```
npm install --save mithril-portal
```

## Usage
```javascript
import m from 'mithril';
import Portal from 'mithril-portal';

const Page = {
  view() {
    return m('', [
      m(Portal, m('h1', 'Children'))
    ])
  }
}
```

## API

| Attribute                    	| Description                                                                               	|
|-----------------------------	|-------------------------------------------------------------------------------------------	|
| onContentMount(rootElement) 	| Callback invoked when the portal has mounted. Returns the HTML element it was mounted to. 	|