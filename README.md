# Mithril-Portal

Mithril component for rendering children outside the DOM hierarchy of the parent component.

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
| onContentMount(rootElement: HTMLElement) => void 	| Callback invoked when the portal has mounted. 	|
| container: HTMLElement 	| Optional element to mount to (default is `document.body`) 	|
