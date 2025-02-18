import React, { useRef } from 'react'
import classnames from 'classnames'

// Components
import Button from '../button/Button'
import Icon from '../../components/Icon'
import FormStatus from '../../components/FormStatus'
import ProgressIndicator from '../../components/progress-indicator'
import P from '../../elements/P'

// Icons
import {
  trash as TrashIcon,
  exclamation_medium as ExclamationIcon,
  file_pdf_medium as pdf,
  file_xls_medium as xls,
  file_ppt_medium as ppt,
  file_csv_medium as csv,
  file_txt_medium as txt,
  file_xml_medium as xml,
  file_medium as file,
} from '../../icons'
import { UploadFile } from './types'

// Shared
import { getPreviousSibling, warn } from '../../shared/component-helper'
import useUpload from './useUpload'

const images = {
  pdf,
  xls,
  ppt,
  csv,
  txt,
  xml,
  file,
}

export type UploadFileListCellProps = {
  id: string

  /**
   * Uploaded file
   */
  uploadFile: UploadFile

  /**
   * Calls onDelete when clicking the delete button
   */
  onDelete: () => void

  /**
   * Text
   */
  loadingText: React.ReactNode
  deleteButtonText: React.ReactNode
}

const UploadFileListCell = ({
  id,
  uploadFile,
  onDelete,
  loadingText,
  deleteButtonText,
}: UploadFileListCellProps) => {
  const { file, errorMessage, isLoading } = uploadFile
  const { name, type } = file

  const fileType = type.split('/')[1]

  const hasWarning = errorMessage != null

  const imageUrl = URL.createObjectURL(file)

  const cellRef = useRef<HTMLLIElement>()

  const exists = useExistsHighlight(id, file)

  const handleDisappearFocus = () => {
    try {
      const cellElement = cellRef.current
      const focusElement = getPreviousSibling(
        '.dnb-upload',
        cellElement
      ).querySelector(
        '.dnb-upload__file-input-button'
      ) as HTMLButtonElement
      focusElement.focus()
    } catch (e) {
      warn(e)
    }
  }

  const onDeleteHandler = () => {
    handleDisappearFocus()

    onDelete()
  }

  return (
    <li
      data-testid="upload-file-list-cell"
      className={classnames(
        'dnb-upload__file-cell',
        hasWarning && 'dnb-upload__file-cell--warning',
        exists && 'dnb-upload__file-cell--highlight'
      )}
      ref={cellRef}
    >
      <div className="dnb-upload__file-cell__content">
        <div className="dnb-upload__file-cell__content__left">
          {getIcon()}
          {getTitle()}
        </div>
        <div>
          <Button
            data-testid="upload-delete-button"
            icon={TrashIcon}
            variant="tertiary"
            onClick={onDeleteHandler}
            icon_position="left"
          >
            {deleteButtonText}
          </Button>
        </div>
      </div>

      {getWarning()}
    </li>
  )

  function getIcon() {
    if (isLoading) {
      return <ProgressIndicator data-testid="upload-progress-indicator" />
    }

    if (hasWarning) return <Icon icon={ExclamationIcon} />

    let iconFileType = fileType

    if (!Object.prototype.hasOwnProperty.call(images, fileType)) {
      iconFileType = 'file'
    }
    return <Icon icon={images[iconFileType]} />
  }

  function getTitle() {
    return isLoading ? (
      <div
        className={classnames(
          'dnb-upload__file-cell__text-container',
          'dnb-upload__file-cell__text-container--loading'
        )}
      >
        {loadingText}
      </div>
    ) : (
      <div className="dnb-upload__file-cell__text-container">
        <a
          data-testid="upload-file-anchor"
          target="_blank"
          href={imageUrl}
          className={classnames(
            'dnb-anchor',
            'dnb-upload__file-cell__title'
          )}
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <P
          data-testid="upload-subtitle"
          className="dnb-upload__file-cell__subtitle"
          size="x-small"
          top="xx-small"
        >
          {fileType.toUpperCase()}
        </P>
      </div>
    )
  }

  function getWarning() {
    return hasWarning ? (
      <FormStatus
        data-testid="upload-warning"
        top="small"
        text={errorMessage}
        stretch
      />
    ) : null
  }
}

export default UploadFileListCell

function useExistsHighlight(id: string, file: File) {
  const { internalFiles } = useUpload(id)
  const [exists, updateExists] = React.useState(false)
  const timerRef = React.useRef<NodeJS.Timer>()

  const clearTimers = () => {
    clearTimeout(timerRef.current)
  }

  React.useEffect(() => {
    const exists = internalFiles.some(({ exists, file: f }) => {
      return exists && f.name === file.name && f.size === file.size
    })

    if (exists) {
      updateExists(true)
      clearTimers()
      timerRef.current = setTimeout(() => updateExists(false), 1500) // transition-duration in CSS
    }

    return clearTimers
  }, [file, internalFiles])

  return exists
}
