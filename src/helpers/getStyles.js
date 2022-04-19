const getButtonStyles = (
  color,
  size,
  defaultColor = '#fff',
  defaultSize = '1.3rem'
) => {
  return {
    fontSize: size ? size : defaultSize,
    color: color ? color : defaultColor
  }
}

const widthStyles = (width, defaultWidth = '80%') => {
  return {
    width: width ? width : defaultWidth
  }
}

const backgroundStyles = (background, defaultColor) => {
  return {
    background: background ? background : defaultColor,
    border: background === defaultColor ? '2px solid #333' : 'none'
  }
}

export { getButtonStyles, widthStyles, backgroundStyles }
