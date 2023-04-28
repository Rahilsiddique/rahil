
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { twclsx } from '../../libs/twclsx'
import { UnstyledButton } from '../buttons/UnstyledButtons'
import { Spinner } from '../common'
import { useTheme } from 'next-themes'
import { IconType } from 'react-icons/lib'

type WrappedImageProps = ImageProps & {
  alt: string
  parentStyle?: string
}

type ThemeMenu = { value: string; name: string; icon: IconType }


export const WrappedImage: React.FunctionComponent<WrappedImageProps> = ({ parentStyle, ...props }) => {
  if (!props.fill) {
    return <Image {...props} />
  }

  return (
    <figure className={twclsx('relative', parentStyle)}>
      <Image {...props} placeholder='blur' blurDataURL='/blur.svg' sizes='(max-width: 768px) 100%' />
    </figure>
  )
}