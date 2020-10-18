import { ImageProps } from 'react-native'
import { Component } from 'react'

interface IOnSizeParams { width: number, height: number }

interface IImageProps extends ImageProps {
	height?: number,
	width?: number
}

export default class Image extends Component<IImageProps> { }
