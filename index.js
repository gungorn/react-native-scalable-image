import React, { useState, useEffect } from 'react';

import { Image, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const Resim = props => {
	const { source, style, resizeMode } = props;
	let { width, height } = props;

	const [WH, setWH] = useState(null);

	useEffect(() => {
		if (typeof source === 'object') Image.getSize(source.uri, (ow, oh) => setWH(width ? { width, height: width * (oh / ow) } : { width: height * (ow / oh), height }));
		else {
			const T = Image.resolveAssetSource(source);
			setWH(width ? { width, height: width * (T.height / T.width) } : { width: height * (T.width / T.height), height })
		}
	}, [width, height, source]);

	return WH ? <FastImage source={source} style={[WH, style]} resizeMode={resizeMode} /> : <View style={{ width, height }} />;
}

Resim.propTypes = { width: PropTypes.number, height: PropTypes.number };
Resim.defaultProps = { width: null, height: null };

export default Resim;
