import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react'
import { cn } from '@/lib/utils';

const FALLBACK_IMAGE_URL = "https://placehold.co/400x300?text=Image+Not+Found";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit';
  originWidth?: number;
  originHeight?: number;
  focalPointX?: number;
  focalPointY?: number;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fittingType = 'fill', originWidth, originHeight, focalPointX: _fpx, focalPointY: _fpy, className, style, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src)

    useEffect(() => {
      setImgSrc(prev => (prev !== src ? src : prev))
    }, [src])

    if (!src) {
      return <div data-empty-image ref={ref} {...(props as React.HTMLAttributes<HTMLDivElement>)} />
    }

    const aspectRatio = originWidth && originHeight
      ? `${originWidth} / ${originHeight}`
      : undefined

    return (
      <img
        ref={ref}
        src={imgSrc}
        className={cn(
          fittingType === 'fit' ? 'object-contain' : 'object-cover',
          className
        )}
        style={{ aspectRatio, ...style }}
        onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
        data-error-image={imgSrc === FALLBACK_IMAGE_URL || undefined}
        {...props}
      />
    )
  }
)
Image.displayName = 'Image'

