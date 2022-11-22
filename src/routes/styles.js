import styled from 'styled-components';
/* import { images } from '../assets/images'; */
import { colors } from '../assets/colors';

export const Wrapper = styled.div`
	display: flex;

	height: 100%;
	width: 100%;

	aside {
		max-height: 100vh;
		z-index: 999;
	}
	main {
		width: 100%;
		margin-left: 100px;
		overflow: hidden;
	}
`;

export const Container = styled.div`
	display: flex;
	background: ${colors.background};
	overflow-y: hidden;
`;
