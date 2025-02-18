---
showTabs: false
draft: true
---

## Properties

| Properties                                  | Description                                                                                                                                          |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element`                                   | _(optional)_ define what HTML or React element should be used (e.g. `element={Link}`). Defaults to semantic `a` element.                             |
| `href`                                      | _(optional)_ relative or absolute url.                                                                                                               |
| `to`                                        | _(optional)_ use this prop only if you are using a router Link component as the `element` that uses the `to` property to declare the navigation url. |
| `target`                                    | _(optional)_ defines the opening method. Use `_blank` to open a new browser window/tab.                                                              |
| `targetBlankTitle`                          | _(optional)_ the title shown as a tooltip when target is set to `_blank`.                                                                            |
| `tooltip`                                   | _(optional)_ Provide a string or a React Element to be shown as the tooltip content.                                                                 |
| `skeleton`                                  | _(optional)_ if set to `true`, an overlaying skeleton with animation will be shown.                                                                  |
| [Space](/uilib/components/space/properties) | _(optional)_ spacing properties like `top` or `bottom` are supported.                                                                                |

### Router Link

You can make use of the `element` property in combination with the `to` property.

```jsx
import { Link } from 'gatsby'

render(
  <Anchor to="/url" element={Link}>
    Link
  </Anchor>
)
```
