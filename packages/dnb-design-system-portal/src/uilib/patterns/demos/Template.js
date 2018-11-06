/**
 * Element Demo setup
 * Ready for imporing in page
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/patterns/template/Example'
import Description from 'dnb-ui-lib/src/patterns/template/description.md'
import Details from 'dnb-ui-lib/src/patterns/template/details.md'
import ExampleCode from 'raw-loader!../examples/Template.txt'

export default class TemplateDemo extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    Description: PropTypes.func,
    Details: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'Template',
    id: 'template',
    ExampleCode,
    Description,
    Details,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return <ItemWrapper {...TemplateDemo.defaultProps} {...this.props} />
  }
}
