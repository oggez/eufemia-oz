/**
 * UI lib Component Example
 *
 */

import React, { PureComponent, Fragment } from 'react'
import ComponentBox from 'Src/shared/tags/ComponentBox'

class Example extends PureComponent {
  render() {
    return (
      <Fragment>
        <ComponentBox
          caption="FormStatus displaying error status"
          data-dnb-test="form-status"
        >
          {/* @jsx */ `
<FormStatus
  text="Failure text"
/>
          `}
        </ComponentBox>
        <ComponentBox
          caption="FormStatus displaying info status"
          data-dnb-test="form-status-info"
        >
          {/* @jsx */ `
<FormStatus
  title="Hover title"
  text="Long info nisl tempus hendrerit tortor dapibus nascetur taciti porta risus cursus fusce platea enim curabitur proin nibh ut luctus magnis metus"
  status="info"
/>
          `}
        </ComponentBox>
        <ComponentBox caption="A form status, used by the Input Component">
          {/* @jsx */ `
<Input
  label="Input with status:"
  status="You have to fill in this field"
  value="Input value"
/>
          `}
        </ComponentBox>
        <ComponentBox
          caption="A form status, with a custom styled content"
          data-dnb-test="form-status-custom"
          useRender
        >
          {/* @jsx */ `
const CustomStatus = () => (
  <>
    My info <Link href="/">with a link</Link> and more text
  </>
)
render(
  <Input
    label="Input with custom content:"
    status={ <CustomStatus /> }
    status_state="info"
    value="Input value"
  />
)
          `}
        </ComponentBox>
      </Fragment>
    )
  }
}

export { Example }
export default () => <Example />
