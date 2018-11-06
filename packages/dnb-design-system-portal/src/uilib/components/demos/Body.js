/** 
  ATTENTION: This file is auto generated by using "makeDemosFactory".
  Do not change the content!
     */
/**
 * Component Demo setup
 * Ready for imporing in page
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/components/body/Example'
import Description from 'dnb-ui-lib/src/components/body/description.md'
import Details from 'dnb-ui-lib/src/components/body/details.md'
import ExampleCode from 'raw-loader!../examples/Body.txt'

export default class BodyDemo extends Component {
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
    title: 'Body',
    id: 'body',
    ExampleCode,
    Description,
    Details,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return <ItemWrapper {...BodyDemo.defaultProps} {...this.props} />
  }
}
