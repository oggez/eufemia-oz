/**
 * Screenshot Test
 * This file will not run on "test:staged" because we don't require any related files
 */

import {
  testPageScreenshot,
  setupPageScreenshot,
} from '../../../core/jest/jestSetupScreenshots'

describe('Table screenshot', () => {
  setupPageScreenshot({ url: '/uilib/components/table' })

  it('have to match the default choice of table styles', async () => {
    const screenshot = await testPageScreenshot({
      style: {
        width: '30rem',
      },
      styleSelector: '[data-visual-test="table-default"] .dnb-table',
      selector: '[data-visual-test="table-default"] .dnb-table',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match a complex table layout', async () => {
    const screenshot = await testPageScreenshot({
      style: {
        width: '50rem',
      },
      styleSelector: '[data-visual-test="table-complex"] .dnb-table',
      selector: '[data-visual-test="table-complex"] .dnb-table',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match a fixed table layout', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-visual-test="table-fixed"]',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match table container', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-visual-test="table-container"]',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match table in medium size', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-visual-test="table-size-medium"]',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match table in small size', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-visual-test="table-size-small"]',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match header with wrapped text', async () => {
    const selector = '[data-visual-test="table-header"] .dnb-table'
    const screenshot = await testPageScreenshot({
      style: {
        width: '40rem',
      },
      styleSelector: '[data-visual-test="table-header"] .dnb-table',
      selector,
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match sticky header', async () => {
    const selector = '[data-visual-test="table-sticky"]'
    const screenshot = await testPageScreenshot({
      selector,
      executeBeforeSimulate: () => {
        document.getElementById('scroll-to-tr-id').scrollIntoView({
          behavior: 'auto',
        })
      },
    })
    expect(screenshot).toMatchImageSnapshot()
  })
})

describe('Table screenshot', () => {
  setupPageScreenshot({ url: '/uilib/components/table' })

  // should be tested first
  it('have to match a sortable table header on focus', async () => {
    const selector =
      '[data-visual-test="table-classes"] th.dnb-table--sortable.dnb-table--reversed'
    const screenshot = await testPageScreenshot({
      selector,
      simulateSelector: `${selector} .dnb-button`,
      simulate: 'focus',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match a sortable table header on active', async () => {
    const selector =
      '[data-visual-test="table-classes"] th.dnb-table--sortable.dnb-table--reversed'
    const screenshot = await testPageScreenshot({
      selector,
      simulateSelector: `${selector} .dnb-button`,
      simulate: 'active',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match a active sortable table header on active state', async () => {
    const selector =
      '[data-visual-test="table-classes"] th.dnb-table--sortable.dnb-table--active'
    const screenshot = await testPageScreenshot({
      selector,
      simulateSelector: `${selector} .dnb-button`,
      simulate: 'active',
    })
    expect(screenshot).toMatchImageSnapshot()
  })

  it('have to match a sortable table header on hover', async () => {
    const selector =
      '[data-visual-test="table-classes"] th.dnb-table--sortable.dnb-table--reversed'
    const screenshot = await testPageScreenshot({
      selector,
      simulateSelector: `${selector} .dnb-button`,
      simulate: 'hover',
    })
    expect(screenshot).toMatchImageSnapshot()
  })
})

describe('Table with skeleton screenshot', () => {
  setupPageScreenshot({ url: '/uilib/components/table?skeleton' })

  it('have to match default table', async () => {
    const screenshot = await testPageScreenshot({
      style: {
        width: '40rem',
      },
      selector: '[data-visual-test="table-default"]',
    })
    expect(screenshot).toMatchImageSnapshot()
  })
})
