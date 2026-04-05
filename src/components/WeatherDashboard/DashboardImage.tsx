import Image, { ImageProps } from 'next/image'

export default function DashboardImage(props: ImageProps) {
  const { alt, ...rest } = props

  return <Image alt={alt} unoptimized {...rest} />
}
