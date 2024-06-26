import './index.css'

const ThumbnailItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li>
      <button
        type="button"
        className="button-container"
        onClick={onClickTabItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeTabBtnClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
