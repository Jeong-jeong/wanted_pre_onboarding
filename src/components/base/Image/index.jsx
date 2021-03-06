import PropTypes from 'prop-types'
import { typeChecking } from '@utils/functions'
import { css } from '@emotion/core'
import { dragNone } from '@style/GlobalCss'

const Image = ({
  block,
  width,
  height,
  borderRadius,
  src,
  alt,
  mode,
  drag,
  ...props
}) => {
  const ImageStyle = css`
    display: ${block ? 'block' : 'inline-block'};
    width: ${typeChecking(width)};
    height: ${typeChecking(height)};
    border-radius: ${typeChecking(borderRadius)};
    ${!drag && dragNone}

    // drag
    object-fit: ${mode};
  `

  return <img src={src} alt={alt} css={ImageStyle} {...props} />
}

Image.propTypes = {
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['fill', 'cover', 'none', 'contain']),
  drag: PropTypes.bool,
}

Image.defaultProps = {
  src: '',
  block: false,
  width: '100%',
  height: '100%',
  borderRadius: 0,
  mode: 'fill',
  drag: true,
}

export default Image
